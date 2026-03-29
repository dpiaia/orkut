
import React from 'react';

interface PrivacyPageProps {
  onBack: () => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white font-orkut flex flex-col items-center p-4">
      <div className="max-w-3xl w-full bg-orkut-card-bg border border-orkut-border rounded shadow-sm overflow-hidden mt-8">
        <div className="bg-[#D9E6F7] p-3 border-b border-orkut-border flex justify-between items-center">
          <h1 className="text-sm font-bold text-orkut-text-blue uppercase tracking-wider">Política de Privacidade (LGPD)</h1>
          <button 
            onClick={onBack}
            className="text-[11px] text-orkut-text-blue font-bold hover:underline"
          >
            [voltar]
          </button>
        </div>
        
        <div className="p-6 text-xs text-gray-700 space-y-4 leading-relaxed overflow-y-auto max-h-[70vh]">
          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">1. Introdução</h2>
            <p>
              Bem-vindo ao <strong>Orkut Retro Profile Maker</strong>. Valorizamos a sua privacidade e estamos comprometidos em proteger seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">2. Dados que Coletamos</h2>
            <p>
              Quando você utiliza o login social (Facebook), coletamos apenas as informações autorizadas por você através do provedor:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Nome público e foto de perfil;</li>
              <li>Endereço de e-mail (para identificação da conta);</li>
              <li>Dados de perfil públicos (como cidade, data de nascimento e interesses) para fins de geração do perfil retrô.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">3. Finalidade do Tratamento</h2>
            <p>
              Seus dados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Personalizar sua experiência no gerador de perfis;</li>
              <li>Alimentar o modelo de Inteligência Artificial que reconstrói seu perfil com a estética de 2005;</li>
              <li>Permitir que você visualize e edite suas informações no simulador.</li>
            </ul>
            <p className="mt-2 font-bold italic text-blue-600">
              Importante: Não vendemos seus dados para terceiros nem os utilizamos para fins de marketing invasivo.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">4. Armazenamento e Segurança</h2>
            <p>
              Nesta versão de demonstração, seus dados são processados em tempo real. Implementamos medidas técnicas para garantir que a comunicação entre seu navegador e nossos servidores seja segura.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">5. Seus Direitos</h2>
            <p>
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar seus dados;</li>
              <li>Corrigir dados incompletos ou inexatos;</li>
              <li>Solicitar a exclusão de seus dados tratados com seu consentimento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">6. Contato</h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato através do e-mail de suporte indicado na plataforma.
            </p>
          </section>

          <div className="pt-4 border-t border-gray-200 text-center italic text-[10px] text-gray-400">
            Última atualização: Março de 2026.
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-orkut-pink font-bold text-2xl tracking-tighter">orkut</div>
    </div>
  );
};

export default PrivacyPage;
