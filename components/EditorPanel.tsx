
import React, { useState } from 'react';
import { ProfileData, ScreenshotMode } from '../types';
import { GoogleGenAI, Type } from "@google/genai";

interface EditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdate: (newData: Partial<ProfileData>) => void;
  screenshotMode: ScreenshotMode;
  setScreenshotMode: (mode: ScreenshotMode) => void;
}

const EditorPanel: React.FC<EditorPanelProps> = ({ isOpen, onClose, profile, onUpdate, screenshotMode, setScreenshotMode }) => {
  const [socialHandle, setSocialHandle] = useState('');
  const [isImporting, setIsImporting] = useState(false);

  const handleImportSocial = async () => {
    if (!socialHandle) return;
    setIsImporting(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-3-flash-preview for fast and creative reconstruction
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analise o perfil público do usuário "${socialHandle}" nas redes sociais Instagram, TikTok e X (Twitter). 
        Gere dados para um perfil de Orkut vintage (ano 2005) baseados nesse usuário real. 
        Extraia ou gere: Nome, Bio (em estilo orkut), Cidade, País, Status de relacionamento, Data de nascimento e uma URL de foto de perfil (Avatar).
        Seja criativo e nostálgico. 
        Retorne APENAS um objeto JSON com as seguintes chaves: 
        name, status, relationship, city, country, birthdate, fortune, bio, profilePic.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Nome completo ou apelido do usuário" },
              status: { type: Type.STRING, description: "Uma frase curta de efeito estilo 2005" },
              relationship: { type: Type.STRING, description: "Estado civil (ex: Solteiro, Casado)" },
              city: { type: Type.STRING, description: "Cidade onde mora" },
              country: { type: Type.STRING, description: "País onde mora" },
              birthdate: { type: Type.STRING, description: "Data de nascimento formatada" },
              fortune: { type: Type.STRING, description: "Frase de 'Sorte de Hoje'" },
              bio: { type: Type.STRING, description: "Descrição 'Quem sou eu' com gírias de 2005" },
              profilePic: { type: Type.STRING, description: "URL de uma imagem de perfil representativa" },
            },
            required: ["name", "status", "relationship", "city", "country", "birthdate", "fortune", "bio", "profilePic"]
          },
        },
      });

      const data = JSON.parse(response.text);
      onUpdate(data);
      alert('Perfil reconstruído com sucesso! (IA simulou os dados com base nas redes sociais)');
    } catch (error) {
      console.error("Erro ao importar:", error);
      alert('Não conseguimos recuperar os dados. Tente novamente ou verifique se o handle está correto.');
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div 
      className={`
        fixed top-0 left-0 z-50 w-full md:w-80 h-screen bg-white border-r border-gray-200 p-6 shadow-2xl flex flex-col 
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold text-orkut-pink mb-1">Editor Retro</h2>
          <p className="text-xs text-gray-500">Personalize seu Orkut para o print perfeito</p>
        </div>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-orkut-pink p-1"
          aria-label="Fechar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-4 flex-1 overflow-y-auto pr-2">
        {/* Import Section */}
        <div className="bg-orkut-card-bg border border-orkut-border p-3 rounded mb-4">
          <label className="block text-[10px] font-bold uppercase text-orkut-text-blue mb-2">Importar Perfil Social (IA)</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              value={socialHandle}
              onChange={(e) => setSocialHandle(e.target.value)}
              placeholder="@usuario"
              className="flex-1 p-2 border border-gray-300 rounded text-xs outline-none focus:ring-1 focus:ring-orkut-pink"
            />
            <button 
              onClick={handleImportSocial}
              disabled={isImporting}
              className={`orkut-btn px-3 py-1 text-[10px] font-bold text-orkut-text-blue rounded transition-opacity ${isImporting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            >
              {isImporting ? 'Lendo...' : 'Importar'}
            </button>
          </div>
          <p className="text-[9px] text-gray-500 mt-2">Busca Bio, Cidade, País e Avatar via IA.</p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Nome</label>
          <input 
            type="text" 
            value={profile.name} 
            onChange={e => onUpdate({ name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Cidade</label>
            <input 
              type="text" 
              value={profile.city} 
              onChange={e => onUpdate({ city: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-gray-400 mb-1">País</label>
            <input 
              type="text" 
              value={profile.country} 
              onChange={e => onUpdate({ country: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Status (Mood)</label>
          <input 
            type="text" 
            value={profile.status} 
            onChange={e => onUpdate({ status: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Sorte de hoje</label>
          <textarea 
            value={profile.fortune} 
            onChange={e => onUpdate({ fortune: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none h-16 resize-none"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
           {['trustworthy', 'cool', 'sexy'].map((key) => (
             <div key={key}>
                <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1">{key === 'trustworthy' ? 'Conf.' : key}</label>
                <select 
                  value={profile.stats[key as keyof typeof profile.stats]}
                  onChange={e => onUpdate({ stats: { ...profile.stats, [key]: parseInt(e.target.value) } })}
                  className="w-full p-1 border border-gray-300 rounded text-xs"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
             </div>
           ))}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Bio (Quem sou eu)</label>
          <textarea 
            value={profile.bio} 
            onChange={e => onUpdate({ bio: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none h-24 resize-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-gray-400 mb-1">URL da Foto (Avatar)</label>
          <input 
            type="text" 
            value={profile.profilePic} 
            onChange={e => onUpdate({ profilePic: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-orkut-pink outline-none"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
        <div className="text-xs font-bold text-gray-700 mb-2 uppercase">Modo de Captura</div>
        <div className="flex flex-col gap-2">
          <button 
            onClick={() => setScreenshotMode('post')}
            className="orkut-btn px-4 py-2 text-sm font-bold text-orkut-text-blue rounded hover:opacity-80 flex items-center justify-center space-x-2"
          >
            <span>Feed (1080x1080)</span>
          </button>
          <button 
            onClick={() => setScreenshotMode('story')}
            className="orkut-btn px-4 py-2 text-sm font-bold text-orkut-text-blue rounded hover:opacity-80 flex items-center justify-center space-x-2"
          >
            <span>Story (1080x1920)</span>
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-4 italic">
          Ao ativar, o layout será ajustado. <br/>Use o atalho do sistema para printar!
        </p>
      </div>
    </div>
  );
};

export default EditorPanel;
