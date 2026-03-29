
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DataDeletionPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-orkut flex flex-col items-center p-4">
      <div className="max-w-3xl w-full bg-orkut-card-bg border border-orkut-border rounded shadow-sm overflow-hidden mt-8">
        <div className="bg-[#D9E6F7] p-3 border-b border-orkut-border flex justify-between items-center">
          <h1 className="text-sm font-bold text-orkut-text-blue uppercase tracking-wider">Exclusão de Dados</h1>
          <button 
            onClick={() => navigate(-1)}
            className="text-[11px] text-orkut-text-blue font-bold hover:underline"
          >
            [voltar]
          </button>
        </div>
        
        <div className="p-6 text-xs text-gray-700 leading-relaxed space-y-4">
          <section>
            <h2 className="font-bold text-orkut-text-blue mb-2">Como excluir seus dados</h2>
            <p>
              O <strong>Orkut Retro Profile Maker</strong> preza pela sua privacidade e transparência. 
              É importante notar que nosso aplicativo <strong>não armazena seus dados pessoais em servidores permanentes</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-text-blue mb-2">Processo de Exclusão</h2>
            <p>
              Como não mantemos um banco de dados com suas informações após a sessão de geração do perfil, a "exclusão" ocorre automaticamente das seguintes formas:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li><strong>Encerramento da Sessão:</strong> Ao fechar a aba do navegador ou atualizar a página, todos os dados importados e o perfil gerado são apagados da memória temporária do seu dispositivo.</li>
              <li><strong>Limpeza de Cache:</strong> Você pode limpar o cache e os cookies do seu navegador para garantir que qualquer rastro local da sessão seja removido.</li>
              <li><strong>Revogação no Facebook:</strong> Para desconectar permanentemente o aplicativo da sua conta do Facebook, siga os passos abaixo:</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-4 border border-gray-200 rounded">
            <h3 className="font-bold mb-2">Passos para revogar acesso no Facebook:</h3>
            <ol className="list-decimal ml-5 space-y-1">
              <li>Vá para as <strong>Configurações e Privacidade</strong> da sua conta do Facebook.</li>
              <li>Clique em <strong>Configurações</strong>.</li>
              <li>No menu lateral, selecione <strong>Aplicativos e Sites</strong>.</li>
              <li>Encontre o <strong>Orkut Retro Profile Maker</strong>.</li>
              <li>Clique em <strong>Remover</strong>.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-bold text-orkut-text-blue mb-2">Solicitações Manuais</h2>
            <p>
              Caso você tenha qualquer dúvida ou queira confirmar se algum dado ainda persiste (o que, por design, não deveria ocorrer), você pode entrar em contato através do e-mail de suporte do desenvolvedor listado na loja de aplicativos ou no portal do Facebook for Developers.
            </p>
          </section>

          <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400 italic">
            Última atualização: 28 de Março de 2026.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletionPage;
