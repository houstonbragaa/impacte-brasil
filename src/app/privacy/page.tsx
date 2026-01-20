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

                <h2>1. Dados Coletados</h2>

                <p>Podemos coletar e tratar os seguintes dados:</p>

                <h3> a) Dados pessoais</h3>
                <ul className="ml-6">
                  <li>●  Nome completo</li>
                  <li>●  E-mail</li>
                  <li>●  Telefone</li>
                  <li>●  Cargo e empresa</li>
                  <li>●  Dados fornecidos em formulários, diagnósticos, eventos, conteúdos e comunidades</li>
                </ul>

                <h3>b) Dados estratégicos empresariais</h3>
                <ul className="ml-6">
                  <li>●  Informações operacionais, financeiras, gerenciais e estratégicas fornecidas voluntariamente</li>
                  <li>●  Respostas a diagnósticos, avaliações, formulários e ferramentas como o ScanCorp</li>
                  <li>●  Dados compartilhados em eventos, mentorias, comunidades e interações
                  estratégicas</li>
                </ul>

                <h3>c) Dados de navegação</h3>
                <ul className="ml-6">
                  <li>●  Endereço IP</li>
                  <li>●  Tipo de navegador e dispositivo</li>
                  <li>●  Páginas acessadas</li>
                  <li>●  Cookies e tecnologias similares</li>
                </ul>

                <h2>2. Finalidade do Tratamento</h2>

                <p>Os dados coletados são utilizados para:</p>

                <ul className="ml-6">
                  <li>●  Contato institucional e comercial</li>
                  <li>●  Envio de conteúdos, materiais, convites e comunicações</li>
                  <li>●  Execução de diagnósticos, análises e recomendações estratégicas</li>
                  <li>●  Gestão do relacionamento com clientes, leads e membros da comunidade</li>
                  <li>●  Melhoria contínua de produtos, serviços e experiências</li>
                  <li>●  Cumprimento de obrigações legais e regulatórias</li>
                </ul>

                <p>A Impacte Brasil <b className="text-secondary-blue">não comercializa dados pessoais ou empresariais.</b></p>

                <h2>3. Dados Estratégicos e Anonimização</h2>

                <p>Os dados estratégicos empresariais:</p>
                
                <ul className="ml-6">
                  <li>●  São fornecidos voluntariamente pelos usuários</li>
                  <li>●  São utilizados para análises internas, diagnósticos e geração de valor estratégico</li>
                  <li><b className="text-secondary-blue">●  Nunca são compartilhados de forma identificável com terceiros</b></li>
                </ul>

                <p>A Impacte Brasil pode utilizar dados anonimizados e agregados para fins:</p>
                <ul className="ml-6">
                  <li>●  Estatísticos</li>
                  <li>●  Educacionais</li>
                  <li>●  Produção de conteúdos, estudos e benchmarks
                  Sem qualquer identificação de empresas ou pessoas.</li>
                </ul>

                <h2>4. Base Legal</h2>

                <p>O tratamento de dados ocorre com base em:</p>
                <ul className="ml-6">
                  <li>●  Consentimento do titular</li>
                  <li>●  Execução de contrato ou procedimentos preliminares</li>
                  <li>●  Legítimo interesse, respeitando direitos e liberdades fundamentais</li>
                </ul>

                <h2>5. Uso de CRM, Automação e Anúncios</h2>

                <p>Utilizamos plataformas de CRM, automação de marketing e gestão comercial para:</p>
                <ul className="ml-6">
                  <li>●  Armazenar histórico de interações</li>
                  <li>●  Organizar comunicações</li>
                  <li>●  Realizar contatos ativos e campanhas segmentadas</li>
                </ul>
                <p>Os dados também podem ser originados de campanhas patrocinadas (anúncios pagos),
                respeitando as políticas das plataformas e a legislação vigente.</p>
                <p>O titular pode solicitar descadastramento a qualquer momento.</p>

                <h2>6. Compartilhamento de Dados</h2>
                <p>Os dados poderão ser compartilhados apenas com:</p>
                <ul className="ml-6">
                  <li>●  Fornecedores de tecnologia e plataformas essenciais à operação</li>
                  <li>●  Parceiros estratégicos diretamente envolvidos na entrega das soluções</li>
                  <li>●  Autoridades legais, quando exigido</li>
                </ul>
                <p>Sempre observando confidencialidade, finalidade e segurança.</p>

                <h2>7. Armazenamento e Segurança</h2>
                <p>Adotamos medidas técnicas e administrativas adequadas para proteger os dados contra:</p>
                <ul className="ml-6">
                  <li>●  Acesso não autorizado</li>
                  <li>●  Perda, destruição ou alteração indevida</li>
                </ul>
                <p>Os dados são armazenados apenas pelo tempo necessário às finalidades descritas.</p>

                <h2>8. Direitos do Titular</h2>
                <p>O titular pode solicitar:</p>
                <ul className="ml-6">
                  <li>●  Confirmação da existência de tratamento</li>
                  <li>●  Acesso aos dados</li>
                  <li>●  Correção de dados incompletos ou desatualizados</li>
                  <li>●  Exclusão, anonimização ou bloqueio</li>
                  <li>●  Revogação do consentimento</li>
                </ul>
                <p>Solicitações devem ser enviadas para: <b className="text-secondary-blue">contato@impactebrasil.com.br</b></p>

                <h2>9. Cookies</h2>
                <p>Utilizamos cookies para melhorar a experiência do usuário. O gerenciamento pode ser feito
                diretamente no navegador.</p>
                
                <h2>10. Alterações</h2>
                <p>Esta Política pode ser atualizada a qualquer momento. Recomendamos revisão periódica.</p>
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

