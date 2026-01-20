import Footer from "@/components/common/footer"
import styles from "@/app/styles.module.css"
import { LayoutContent, LayoutDesktop } from "@/components/layout/layout-content"

import '../guidelines.css'

const Privacy = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-x-hidden">
        <div
          className={`flex flex-col w-full relative ${styles.bgGradientHero}`}
        >
          <LayoutContent className="md:mt-24 mt-12 md:mb-24 mb-12">
            <LayoutDesktop className="flex flex-col justify-center items-center overflow-x-hidden">
              <h1 className="text-4xl mb-12">Política de privacidade</h1>
              <div className="space-y-8 ">
                <p className="text-white/90 text-xl">A Impacte Brasil valoriza a transparência, a ética e a proteção dos dados pessoais e
                empresariais tratados em seus canais digitais. Esta Política de Privacidade descreve como
                coletamos, utilizamos, armazenamos e protegemos informações, em conformidade com a
                Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).</p>

                <h2 className="text-secondary-blue text-2xl">1. Dados Coletados</h2>

                <p className="text-white/90 text-xl">Podemos coletar e tratar os seguintes dados:</p>

                <h3 className="text-secondary-blue text-xl"> a) Dados pessoais</h3>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Nome completo</li>
                  <li className="text-white/90 text-xl">●  E-mail</li>
                  <li className="text-white/90 text-xl">●  Telefone</li>
                  <li className="text-white/90 text-xl">●  Cargo e empresa</li>
                  <li className="text-white/90 text-xl">●  Dados fornecidos em formulários, diagnósticos, eventos, conteúdos e comunidades</li>
                </ul>

                <h3 className="text-secondary-blue text-xl">b) Dados estratégicos empresariais</h3>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Informações operacionais, financeiras, gerenciais e estratégicas fornecidas voluntariamente</li>
                  <li className="text-white/90 text-xl">●  Respostas a diagnósticos, avaliações, formulários e ferramentas como o ScanCorp</li>
                  <li className="text-white/90 text-xl">●  Dados compartilhados em eventos, mentorias, comunidades e interações
                  estratégicas</li>
                </ul>

                <h3 className="text-secondary-blue text-xl">c) Dados de navegação</h3>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Endereço IP</li>
                  <li className="text-white/90 text-xl">●  Tipo de navegador e dispositivo</li>
                  <li className="text-white/90 text-xl">●  Páginas acessadas</li>
                  <li className="text-white/90 text-xl">●  Cookies e tecnologias similares</li>
                </ul>

                <h2 className="text-secondary-blue text-2xl">2. Finalidade do Tratamento</h2>

                <p className="text-white/90 text-xl">Os dados coletados são utilizados para:</p>

                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Contato institucional e comercial</li>
                  <li className="text-white/90 text-xl">●  Envio de conteúdos, materiais, convites e comunicações</li>
                  <li className="text-white/90 text-xl">●  Execução de diagnósticos, análises e recomendações estratégicas</li>
                  <li className="text-white/90 text-xl">●  Gestão do relacionamento com clientes, leads e membros da comunidade</li>
                  <li className="text-white/90 text-xl">●  Melhoria contínua de produtos, serviços e experiências</li>
                  <li className="text-white/90 text-xl">●  Cumprimento de obrigações legais e regulatórias</li>
                </ul>

                <p className="text-white/90 text-xl">A Impacte Brasil <b className="text-secondary-blue">não comercializa dados pessoais ou empresariais.</b></p>

                <h2 className="text-secondary-blue text-2xl">3. Dados Estratégicos e Anonimização</h2>

                <p className="text-white/90 text-xl">Os dados estratégicos empresariais:</p>
                
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  São fornecidos voluntariamente pelos usuários</li>
                  <li className="text-white/90 text-xl">●  São utilizados para análises internas, diagnósticos e geração de valor estratégico</li>
                  <li className="text-white/90 text-xl"><b className="text-secondary-blue">●  Nunca são compartilhados de forma identificável com terceiros</b></li>
                </ul>

                <p className="text-white/90 text-xl">A Impacte Brasil pode utilizar dados anonimizados e agregados para fins:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Estatísticos</li>
                  <li className="text-white/90 text-xl">●  Educacionais</li>
                  <li className="text-white/90 text-xl">●  Produção de conteúdos, estudos e benchmarks
                  Sem qualquer identificação de empresas ou pessoas.</li>
                </ul>

                <h2 className="text-secondary-blue text-2xl">4. Base Legal</h2>

                <p className="text-white/90 text-xl">O tratamento de dados ocorre com base em:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Consentimento do titular</li>
                  <li className="text-white/90 text-xl">●  Execução de contrato ou procedimentos preliminares</li>
                  <li className="text-white/90 text-xl">●  Legítimo interesse, respeitando direitos e liberdades fundamentais</li>
                </ul>

                <h2 className="text-secondary-blue text-2xl">5. Uso de CRM, Automação e Anúncios</h2>

                <p className="text-white/90 text-xl">Utilizamos plataformas de CRM, automação de marketing e gestão comercial para:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Armazenar histórico de interações</li>
                  <li className="text-white/90 text-xl">●  Organizar comunicações</li>
                  <li className="text-white/90 text-xl">●  Realizar contatos ativos e campanhas segmentadas</li>
                </ul>
                <p className="text-white/90 text-xl">Os dados também podem ser originados de campanhas patrocinadas (anúncios pagos),
                respeitando as políticas das plataformas e a legislação vigente.</p>
                <p className="text-white/90 text-xl">O titular pode solicitar descadastramento a qualquer momento.</p>

                <h2 className="text-secondary-blue text-2xl">6. Compartilhamento de Dados</h2>
                <p className="text-white/90 text-xl">Os dados poderão ser compartilhados apenas com:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Fornecedores de tecnologia e plataformas essenciais à operação</li>
                  <li className="text-white/90 text-xl">●  Parceiros estratégicos diretamente envolvidos na entrega das soluções</li>
                  <li className="text-white/90 text-xl">●  Autoridades legais, quando exigido</li>
                </ul>
                <p className="text-white/90 text-xl">Sempre observando confidencialidade, finalidade e segurança.</p>

                <h2 className="text-secondary-blue text-2xl">7. Armazenamento e Segurança</h2>
                <p className="text-white/90 text-xl">Adotamos medidas técnicas e administrativas adequadas para proteger os dados contra:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Acesso não autorizado</li>
                  <li className="text-white/90 text-xl">●  Perda, destruição ou alteração indevida</li>
                </ul>
                <p className="text-white/90 text-xl">Os dados são armazenados apenas pelo tempo necessário às finalidades descritas.</p>

                <h2 className="text-secondary-blue text-2xl">8. Direitos do Titular</h2>
                <p className="text-white/90 text-xl">O titular pode solicitar:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Confirmação da existência de tratamento</li>
                  <li className="text-white/90 text-xl">●  Acesso aos dados</li>
                  <li className="text-white/90 text-xl">●  Correção de dados incompletos ou desatualizados</li>
                  <li className="text-white/90 text-xl">●  Exclusão, anonimização ou bloqueio</li>
                  <li className="text-white/90 text-xl">●  Revogação do consentimento</li>
                </ul>
                <p className="text-white/90 text-xl">Solicitações devem ser enviadas para: <b className="text-secondary-blue">contato@impactebrasil.com.br</b></p>

                <h2 className="text-secondary-blue text-2xl">9. Cookies</h2>
                <p className="text-white/90 text-xl">Utilizamos cookies para melhorar a experiência do usuário. O gerenciamento pode ser feito
                diretamente no navegador.</p>
                
                <h2 className="text-secondary-blue text-2xl">10. Alterações</h2>
                <p className="text-white/90 text-xl">Esta Política pode ser atualizada a qualquer momento. Recomendamos revisão periódica.</p>
              </div>
            </LayoutDesktop>
          </LayoutContent>
        </div>
      </div>
        <Footer />
      
    </>
  )
}

export default Privacy

