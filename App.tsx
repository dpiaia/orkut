
import React, { useState, useEffect } from 'react';
import { ProfileData, ScreenshotMode } from './types.ts';
import ProfilePage from './components/ProfilePage.tsx';
import EditorPanel from './components/EditorPanel.tsx';
import Header from './components/Header.tsx';
import LoginPage from './components/LoginPage.tsx';
import { GoogleGenAI, Type } from "@google/genai";

const INITIAL_PROFILE: ProfileData = {
  name: "Junior",
  status: "Saudades do que a gente não viveu ainda...",
  relationship: "Solteiro(a)",
  gender: "Masculino",
  city: "São Paulo",
  country: "Brasil",
  birthdate: "01/01/1990",
  fortune: "O segredo da felicidade é ter o que fazer.",
  bio: "Later! Ryt now visit Radioworld.",
  profilePic: "https://picsum.photos/seed/orkut1/150/150",
  stats: {
    trustworthy: 3,
    cool: 2,
    sexy: 1,
    fans: 46
  },
  details: {
    ethnicity: "Latino",
    religion: "Nenhuma",
    humor: "Clever/quick witted, friendly",
    fashion: "Contemporary",
    hometown: "São Paulo",
    webpage: "http://meusite.com.br",
    passions: "Technology! in each and every dimension of life!",
    sports: "in Second Life!",
    activities: "ONline!",
    books: "Technojunky!",
    music: "Rock, Pop, Indie",
    tvShows: "Discoveries, National Geographics",
    movies: "Matrix, Spiderman",
    cuisines: "Pizza, Burger"
  },
  friends: [
    { id: 'f1', name: 'Alex', image: 'https://picsum.photos/seed/f1/80/80' },
    { id: 'f2', name: 'Mari', image: 'https://picsum.photos/seed/f2/80/80' },
    { id: 'f3', name: 'Guto', image: 'https://picsum.photos/seed/f3/80/80' },
    { id: 'f4', name: 'Carla', image: 'https://picsum.photos/seed/f4/80/80' },
    { id: 'f5', name: 'Beto', image: 'https://picsum.photos/seed/f5/80/80' },
    { id: 'f6', name: 'Dani', image: 'https://picsum.photos/seed/f7/80/80' },
    { id: 'f7', name: 'Rafa', image: 'https://picsum.photos/seed/f8/80/80' },
    { id: 'f8', name: 'Leo', image: 'https://picsum.photos/seed/f9/80/80' },
    { id: 'f9', name: 'Ana', image: 'https://picsum.photos/seed/f10/80/80' },
  ],
  scraps: [
    { id: '1', author: 'Junior', date: '15 Out 2007', content: 'eai cara, td blz? passa la no meu perfil dps!! vlw flw', avatar: 'https://picsum.photos/seed/p1/40/40' },
    { id: '2', author: 'Ana Julia', date: '12 Out 2007', content: 'OIEEEE! saudades de vc sumido(a)! bjos', avatar: 'https://picsum.photos/seed/p2/40/40' },
  ],
  testimonials: [
    { id: '1', author: 'Melhor Amigo', content: 'O que dizer dessa pessoa que mal conheço e ja considero pacas? kkkk Brincadeira, vc é top!', avatar: 'https://picsum.photos/seed/p3/40/40' },
  ],
  communities: [
    { id: '1', name: 'Eu odeio acordar cedo', image: 'https://picsum.photos/seed/c1/50/50', members: 1567 },
    { id: '2', name: 'Tocava a campainha e corria', image: 'https://picsum.photos/seed/c2/50/50', members: 3964 },
    { id: '3', name: 'Eu amo minha mãe', image: 'https://picsum.photos/seed/c3/50/50', members: 10712 },
    { id: '4', name: 'Anos 90', image: 'https://picsum.photos/seed/c4/50/50', members: 3397 },
    { id: '5', name: 'Chocolate é vida', image: 'https://picsum.photos/seed/c5/50/50', members: 2211 },
    { id: '6', name: 'Se eu morrer não me enterre', image: 'https://picsum.photos/seed/c6/50/50', members: 120 },
    { id: '7', name: 'Queria sorvete, mas é feijão', image: 'https://picsum.photos/seed/c7/50/50', members: 850 },
    { id: '8', name: 'Deus me livre, mas quem me dera', image: 'https://picsum.photos/seed/c8/50/50', members: 45 },
    { id: '9', name: 'Fui no Orkut e lembrei de vc', image: 'https://picsum.photos/seed/c9/50/50', members: 999 },
  ]
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(INITIAL_PROFILE);
  const [screenshotMode, setScreenshotMode] = useState<ScreenshotMode>('none');
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Acesso seguro à API Key para evitar erros ReferenceError
  const getApiKey = () => {
    try {
      return (typeof process !== 'undefined' && process.env.API_KEY) || "";
    } catch (e) {
      return "";
    }
  };

  const handleUpdateProfile = (newData: any) => {
    setProfile(prev => {
      const updated = { ...prev, ...newData };
      if (newData.details) updated.details = { ...prev.details, ...newData.details };
      if (newData.stats) updated.stats = { ...prev.stats, ...newData.stats };
      return updated;
    });
  };

  const generateOrkutProfile = async (provider: string, realData?: any) => {
    setIsLoggingIn(true);
    try {
      const apiKey = getApiKey();
      if (!apiKey) {
        console.warn("API Key não configurada. Prosseguindo com dados padrão.");
        if (realData) {
           handleUpdateProfile({
             name: realData.name,
             profilePic: realData.picture?.data?.url || INITIAL_PROFILE.profilePic
           });
        }
        setIsLoggedIn(true);
        setIsLoggingIn(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = realData 
        ? `O usuário acabou de logar via Facebook. 
           Dados reais do Facebook: ${JSON.stringify(realData)}.
           
           Gere um perfil de Orkut (ano 2005) COMPLETO baseado nesses dados reais. 
           Traduza os interesses modernos e a bio para a estética do Orkut de 2005 (use gírias como "vlw flw", "add ai", "scraps", "depoimentos").
           Se o Facebook diz que ele mora em "São Paulo", mantenha. Se o status de relacionamento for "Married", mude para "Casado(a)".
           Seja muito criativo na "bio" e no "status", fazendo parecer um perfil real de 2005.`
        : `O usuário acabou de "autorizar" o acesso via ${provider}. 
           Gere um perfil de Orkut (ano 2005) COMPLETO baseado na estética dessa rede social (${provider}). 
           Por exemplo, se for TikTok, use gírias modernas adaptadas a 2005. Se for Facebook, seja mais família. Se for Google, seja mais tecnológico.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `${prompt}
        
        Retorne APENAS um objeto JSON com as seguintes chaves: 
        name, status, relationship, city, country, birthdate, gender, fortune, bio, profilePic, 
        ethnicity, religion, humor, fashion, hometown, webpage, passions, sports, activities, books, music, tvShows, movies, cuisines.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              status: { type: Type.STRING },
              relationship: { type: Type.STRING },
              city: { type: Type.STRING },
              country: { type: Type.STRING },
              birthdate: { type: Type.STRING },
              gender: { type: Type.STRING },
              fortune: { type: Type.STRING },
              bio: { type: Type.STRING },
              profilePic: { type: Type.STRING },
              ethnicity: { type: Type.STRING },
              religion: { type: Type.STRING },
              humor: { type: Type.STRING },
              fashion: { type: Type.STRING },
              hometown: { type: Type.STRING },
              webpage: { type: Type.STRING },
              passions: { type: Type.STRING },
              sports: { type: Type.STRING },
              activities: { type: Type.STRING },
              books: { type: Type.STRING },
              music: { type: Type.STRING },
              tvShows: { type: Type.STRING },
              movies: { type: Type.STRING },
              cuisines: { type: Type.STRING },
            },
            required: ["name", "status", "relationship", "city", "country", "birthdate", "gender", "fortune", "bio", "profilePic", "ethnicity", "religion", "humor", "fashion", "hometown", "webpage", "passions", "sports", "activities", "books", "music", "tvShows", "movies", "cuisines"]
          },
        },
      });

      const data = JSON.parse(response.text);
      
      const newProfile: Partial<ProfileData> = {
        name: realData?.name || data.name,
        status: data.status,
        relationship: data.relationship || (realData?.relationship_status ? (realData.relationship_status === 'Single' ? 'Solteiro(a)' : realData.relationship_status) : INITIAL_PROFILE.relationship),
        city: realData?.location?.name?.split(',')[0] || data.city,
        country: realData?.location?.name?.split(',')[1]?.trim() || data.country,
        birthdate: realData?.birthday || data.birthdate,
        gender: realData?.gender === 'male' ? 'Masculino' : (realData?.gender === 'female' ? 'Feminino' : data.gender),
        fortune: data.fortune,
        bio: data.bio,
        profilePic: realData?.picture?.data?.url || data.profilePic || `https://picsum.photos/seed/${provider}/150/150`,
        details: {
          ethnicity: data.ethnicity,
          religion: data.religion,
          humor: data.humor,
          fashion: data.fashion,
          hometown: realData?.hometown?.name || data.hometown,
          webpage: data.webpage,
          passions: data.passions,
          sports: data.sports,
          activities: data.activities,
          books: data.books,
          music: data.music,
          tvShows: data.tvShows,
          movies: data.movies,
          cuisines: data.cuisines
        }
      };

      handleUpdateProfile(newProfile);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Profile generation error:", error);
      setIsLoggedIn(true); 
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogin = async (provider: string) => {
    if (provider === 'Default') {
      setIsLoggedIn(true);
      return;
    }

    if (provider === 'Facebook') {
      try {
        console.log('Iniciando login com Facebook...');
        
        // Abrir popup em branco imediatamente para evitar bloqueadores
        const width = 600;
        const height = 700;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
        
        const popup = window.open(
          'about:blank',
          'facebook_login',
          `width=${width},height=${height},left=${left},top=${top}`
        );

        if (!popup) {
          alert('O popup de login foi bloqueado pelo seu navegador. Por favor, autorize popups para este site.');
          setIsLoggingIn(false);
          return;
        }

        popup.document.write('<p style="font-family: sans-serif; text-align: center; margin-top: 50px;">Carregando autenticação...</p>');

        const response = await fetch('/api/auth/facebook/url');
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Erro na API de Auth: ${response.status}`, errorText);
          popup.close();
          throw new Error('Servidor de autenticação indisponível');
        }

        const { url } = await response.json();
        console.log('URL de Auth recebida:', url);
        
        // Redirecionar o popup para a URL real
        popup.location.href = url;
      } catch (error) {
        console.error('Erro ao abrir login do Facebook:', error);
        // Fallback to simulation if server fails
        alert('O servidor de autenticação real não respondeu. Usando simulação de perfil...');
        generateOrkutProfile(provider);
      }
      return;
    }

    // Other providers still use simulation for now
    generateOrkutProfile(provider);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Validate origin
      if (!event.origin.endsWith('.run.app') && !event.origin.includes('localhost')) {
        return;
      }

      if (event.data?.type === 'OAUTH_AUTH_SUCCESS') {
        const userData = event.data.payload;
        generateOrkutProfile('Facebook', userData);
      }

      if (event.data?.type === 'OAUTH_AUTH_ERROR') {
        console.error('OAuth Error:', event.data.error);
        alert('Erro ao autenticar com Facebook. Tente novamente.');
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Health check on mount
    fetch('/api/health')
      .then(res => res.json())
      .then(data => console.log('Server Health Check:', data))
      .catch(err => console.error('Server Health Check Failed:', err));

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (isLoggingIn) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center font-orkut p-8 text-center">
        <div className="text-orkut-pink font-bold text-6xl tracking-tighter mb-8 animate-pulse">orkut</div>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-orkut-pink animate-loading"></div>
        </div>
        <p className="text-orkut-text-blue font-bold text-sm">Autenticando e importando seu perfil...</p>
        <p className="text-gray-400 text-[10px] mt-2 italic">Aguarde enquanto a IA reconstrói sua identidade de 2005.</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const getContainerStyle = () => {
    if (screenshotMode === 'post') {
      return 'w-[1080px] h-[1080px] overflow-hidden bg-orkut-bg relative';
    }
    if (screenshotMode === 'story') {
      return 'w-[1080px] h-[1920px] overflow-hidden bg-orkut-bg relative';
    }
    return 'min-h-screen bg-orkut-bg pb-10';
  };

  return (
    <div className="min-h-screen font-orkut relative overflow-x-hidden">
      <EditorPanel 
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile} 
        onUpdate={handleUpdateProfile} 
        screenshotMode={screenshotMode}
        setScreenshotMode={(mode) => {
          setScreenshotMode(mode);
          if (mode !== 'none') setIsEditorOpen(false);
        }}
      />

      <div className={`flex flex-col items-center transition-all duration-300 ${isEditorOpen ? 'blur-sm pointer-events-none' : ''} ${screenshotMode !== 'none' ? 'p-0' : 'p-4 overflow-y-auto'}`}>
        <div className={`${getContainerStyle()} shadow-lg border border-orkut-border`}>
          {screenshotMode !== 'none' && (
             <button 
                onClick={() => setScreenshotMode('none')}
                className="absolute top-4 left-4 z-50 bg-white/80 px-3 py-1 text-sm border border-gray-400 rounded-sm hover:bg-white"
             >
               ← Voltar ao Editor
             </button>
          )}

          <Header 
            name={profile.name} 
            screenshotMode={screenshotMode} 
            onOpenSettings={() => setIsEditorOpen(true)}
          />
          
          <main className={`${screenshotMode === 'none' ? 'max-w-[1100px]' : 'w-full'} mx-auto px-2 mt-4`}>
             <ProfilePage profile={profile} screenshotMode={screenshotMode} />
          </main>

          {screenshotMode !== 'none' && (
            <div className="absolute bottom-8 right-8 text-orkut-pink font-bold text-4xl opacity-50 select-none">
              orkut.com.br
            </div>
          )}
        </div>
      </div>

      {isEditorOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 transition-opacity"
          onClick={() => setIsEditorOpen(false)}
        />
      )}
    </div>
  );
};

export default App;