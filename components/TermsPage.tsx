
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-orkut flex flex-col items-center p-4">
      <div className="max-w-3xl w-full bg-orkut-card-bg border border-orkut-border rounded shadow-sm overflow-hidden mt-8">
        <div className="bg-[#D9E6F7] p-3 border-b border-orkut-border flex justify-between items-center">
          <h1 className="text-sm font-bold text-orkut-text-blue uppercase tracking-wider">Termos de Serviço</h1>
          <button 
            onClick={() => navigate(-1)}
            className="text-[11px] text-orkut-text-blue font-bold hover:underline"
          >
            [voltar]
          </button>
        </div>
        
        <div className="p-6 text-xs text-gray-700 space-y-4 leading-relaxed overflow-y-auto max-h-[70vh]">
          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o <strong>Orkut Retro Profile Maker</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">2. Uso do Serviço</h2>
            <p>
              Este serviço é uma ferramenta de entretenimento que utiliza Inteligência Artificial para simular perfis da rede social Orkut (extinta). Você concorda em:
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Não utilizar o serviço para gerar conteúdo ofensivo, discriminatório ou ilegal;</li>
              <li>Não tentar burlar as medidas de segurança do site;</li>
              <li>Não utilizar identidades falsas de terceiros sem autorização.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">3. Isenção de Responsabilidade</h2>
            <p>
              O serviço é fornecido "como está". Não garantimos que a simulação seja 100% fiel à realidade histórica ou que o serviço estará disponível ininterruptamente. O uso da marca "Orkut" e sua estética é feito para fins de nostalgia e paródia, sem vínculo oficial atual com os detentores originais da marca.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">4. Propriedade Intelectual</h2>
            <p>
              O conteúdo gerado pela IA é de uso pessoal do usuário. O design da interface busca replicar uma estética histórica de domínio público emocional, mas o código-fonte desta aplicação pertence aos seus respectivos desenvolvedores.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">5. Modificações</h2>
            <p>
              Podemos revisar estes termos de serviço a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-orkut-pink mb-2 text-sm">6. Lei Aplicável</h2>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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

export default TermsPage;
