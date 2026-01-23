
import React from 'react';
import { Scrap } from '../types';

const ScrapsList: React.FC<{ scraps: Scrap[] }> = ({ scraps }) => {
  return (
    <div className="space-y-3">
      <div className="bg-[#FFFFCC] border border-[#FFCC66] p-2 text-[10px] text-[#663300]">
        Lembre-se: Só escreva aqui o que você quer que todos leiam. Mensagens privadas use a função de "Mensagem Privada".
      </div>
      {scraps.map(scrap => (
        <div key={scrap.id} className="flex space-x-3 bg-white border border-orkut-border p-3 rounded-sm">
          <img src={scrap.avatar} alt={scrap.author} className="w-10 h-10 rounded-sm border border-gray-200" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-orkut-text-blue hover:underline cursor-pointer">{scrap.author}</span>
              <span className="text-[9px] text-gray-400">{scrap.date}</span>
            </div>
            <p className="text-xs text-gray-700">{scrap.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrapsList;
