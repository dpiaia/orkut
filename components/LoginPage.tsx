
import React from 'react';

interface LoginPageProps {
  onLogin: (provider: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const friendPhotos = [
    'https://picsum.photos/seed/l1/80/80',
    'https://picsum.photos/seed/l2/80/80',
    'https://picsum.photos/seed/l3/80/80',
    'https://picsum.photos/seed/l4/80/80',
    'https://picsum.photos/seed/l5/80/80',
    'https://picsum.photos/seed/l6/80/80',
    'https://picsum.photos/seed/l7/80/80',
    'https://picsum.photos/seed/l8/80/80',
    'https://picsum.photos/seed/l9/80/80',
    'https://picsum.photos/seed/l10/80/80',
  ];

  return (
    <div className="min-h-screen bg-white font-orkut flex flex-col items-center">
      {/* Top Banner Header */}
      <div className="w-full bg-[#D9E6F7] border-b border-orkut-border h-8 flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full flex justify-between items-center text-[11px] text-orkut-text-blue">
          <div className="flex space-x-2">
            <span className="cursor-pointer hover:underline">Início</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline font-bold">Participar do orkut</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Ajuda</span>
          </div>
          <div className="text-orkut-pink font-bold text-xl tracking-tighter transform translate-y-2">orkut</div>
        </div>
      </div>

      <div className="max-w-5xl w-full px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Welcome */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-orkut-text-blue text-sm flex items-center">
              <span className="text-orkut-pink font-bold text-2xl mr-2">orkut</span>
              <span className="font-normal text-gray-700">é uma comunidade on-line que conecta pessoas através de uma rede de amigos confiáveis.</span>
            </h1>
            <p className="text-xs text-gray-600 leading-relaxed">
              Proporcionamos um ponto de encontro on-line com um ambiente de confraternização, onde é possível fazer novos amigos e conhecer pessoas que têm os mesmos interesses. Participe do orkut para estabelecer seu círculo social e se conectar a ele.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {friendPhotos.map((url, i) => (
              <div key={i} className="aspect-square border border-gray-300 p-0.5 bg-white shadow-sm transform hover:scale-105 transition-transform">
                <img src={url} alt="Friend" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="pt-4">
            <span className="text-orkut-text-blue text-xs underline cursor-pointer hover:no-underline">Leia mais sobre como manter o orkut bonito</span>
          </div>
        </div>

        {/* Right Side: Social Login */}
        <div className="flex flex-col items-center md:items-end">
          <div className="w-full max-w-[340px] bg-orkut-card-bg border border-orkut-border p-6 rounded shadow-sm">
            <div className="bg-[#D9E6F7] -mx-6 -mt-6 p-2 mb-6 border-b border-orkut-border">
              <h2 className="text-xs font-bold text-orkut-text-blue text-center uppercase tracking-wider">login</h2>
            </div>
            
            <p className="text-xs text-center text-gray-700 mb-6 font-normal">
              Acesse o orkut com a sua conta social
            </p>

            <div className="space-y-3">
              <button 
                onClick={() => onLogin('Google')}
                className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded shadow-sm flex items-center justify-center space-x-3 hover:bg-gray-50 transition-colors"
              >
                <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="G" />
                <span className="text-xs font-bold text-gray-700">Entrar com Google</span>
              </button>

              <div className="space-y-1">
                <button 
                  onClick={() => onLogin('Facebook')}
                  className="w-full py-2.5 px-4 bg-[#1877F2] border border-[#1877F2] rounded shadow-sm flex items-center justify-center space-x-3 hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span className="text-xs font-bold text-white">Entrar com Facebook</span>
                </button>
                <p className="text-[9px] text-center text-gray-400">Importa nome, foto e dados reais para o seu perfil retrô</p>
              </div>

              <button 
                onClick={() => onLogin('TikTok')}
                className="w-full py-2.5 px-4 bg-black border border-black rounded shadow-sm flex items-center justify-center space-x-3 hover:opacity-90 transition-opacity"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/></svg>
                <span className="text-xs font-bold text-white">Entrar com TikTok</span>
              </button>
            </div>

            <div className="mt-8 text-center">
               <span className="text-[10px] text-gray-400">Esqueceu a sua senha?</span>
            </div>

            <div className="mt-6 pt-6 border-t border-orkut-border text-center">
              <div className="text-xs text-gray-700 mb-2">Ainda não é membro?</div>
              <button 
                onClick={() => onLogin('Default')}
                className="text-xs font-bold text-orkut-text-blue underline hover:no-underline uppercase"
              >
                ENTRE JÁ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto w-full max-w-5xl px-4 py-8 border-t border-gray-100 mt-12">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] text-orkut-text-blue">
          <span className="cursor-pointer hover:underline">Sobre o orkut</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Centro de segurança</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Privacidade</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Termos</span>
        </div>
        <div className="text-[9px] text-gray-400 text-center mt-4">
          © 2005 Google - serviço filiado ao Google
        </div>
        <div className="mt-4 p-2 bg-blue-50 border border-blue-100 rounded text-center">
          <p className="text-[10px] text-blue-600 font-medium">
            <span className="mr-2">✅ Login com Facebook: Ativo</span>
            <span className="mr-2">|</span>
            <span className="text-gray-400">Login com Google e TikTok: Em criação</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
