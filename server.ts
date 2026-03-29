
import express from 'express';
import { createServer as createViteServer } from 'vite';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Facebook Config
  const FB_APP_ID = process.env.FACEBOOK_APP_ID || '1457510615844583';
  const FB_APP_SECRET = process.env.FACEBOOK_APP_SECRET || '75440802d2049fbfebb67fe93870cf9c';
  
  // Use APP_URL from environment if available, otherwise fallback to a generic way to get it
  // (though APP_URL is preferred per instructions)
  const getBaseUrl = (req: express.Request) => {
    return process.env.APP_URL || `${req.protocol}://${req.get('host')}`;
  };

  app.use(express.json());

  // API Routes
  app.get('/api/auth/facebook/url', (req, res) => {
    const redirectUri = `${getBaseUrl(req)}/api/auth/facebook/callback`;
    const params = new URLSearchParams({
      client_id: FB_APP_ID,
      redirect_uri: redirectUri,
      scope: 'email,public_profile',
      response_type: 'code',
      auth_type: 'rerequest',
      display: 'popup'
    });
    
    const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;
    res.json({ url: authUrl });
  });

  app.get('/api/auth/facebook/callback', async (req, res) => {
    const { code } = req.query;
    const redirectUri = `${getBaseUrl(req)}/api/auth/facebook/callback`;

    if (!code) {
      return res.send(`
        <script>
          window.opener.postMessage({ type: 'OAUTH_AUTH_ERROR', error: 'No code provided' }, '*');
          window.close();
        </script>
      `);
    }

    try {
      // 1. Exchange code for access token
      const tokenResponse = await axios.get('https://graph.facebook.com/v18.0/oauth/access_token', {
        params: {
          client_id: FB_APP_ID,
          client_secret: FB_APP_SECRET,
          redirect_uri: redirectUri,
          code
        }
      });

      const accessToken = tokenResponse.data.access_token;

      // 2. Fetch user profile
      const userResponse = await axios.get('https://graph.facebook.com/me', {
        params: {
          fields: 'id,name,first_name,last_name,email,picture.type(large),birthday,gender,location,hometown,relationship_status,quotes,about',
          access_token: accessToken
        }
      });

      const userData = userResponse.data;

      // Send success message to parent window and close popup
      res.send(`
        <html>
          <body>
            <script>
              if (window.opener) {
                window.opener.postMessage({ 
                  type: 'OAUTH_AUTH_SUCCESS', 
                  payload: ${JSON.stringify(userData)} 
                }, '*');
                window.close();
              } else {
                window.location.href = '/';
              }
            </script>
            <p>Autenticação concluída com sucesso! Esta janela fechará automaticamente.</p>
          </body>
        </html>
      `);
    } catch (error: any) {
      console.error('Facebook OAuth Error:', error.response?.data || error.message);
      res.send(`
        <script>
          window.opener.postMessage({ 
            type: 'OAUTH_AUTH_ERROR', 
            error: ${JSON.stringify(error.response?.data || error.message)} 
          }, '*');
          window.close();
        </script>
      `);
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
