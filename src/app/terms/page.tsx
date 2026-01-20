import { LayoutContent, LayoutDesktop } from "@/components/layout/layout-content"
import styles from '@/app/styles.module.css'

import '../guidelines.css'
import Footer from "@/components/common/footer"

const Terms = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-x-hidden">
        <div
          className={`flex flex-col w-full relative ${styles.bgGradientHero}`}
        >
          <LayoutContent className="md:mt-24 mt-12 md:mb-24 mb-12">
            <LayoutDesktop className="flex flex-col justify-center items-center overflow-x-hidden">
              <h1 className="text-4xl mb-12">Termos de uso</h1>
              <div className="space-y-8 ">
                <p className="text-white/90 text-xl">Ao acessar o site da Impacte Brasil, o usuário concorda integralmente com estes Termos de
                Uso.</p>

                <h2 className="text-secondary-blue text-2xl">1. Finalidade do Site</h2>
                <p className="text-white/90 text-xl">O site tem como objetivo:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Disponibilizar informações institucionais</li>
                  <li className="text-white/90 text-xl">●  Oferecer conteúdos educacionais e estratégicos</li>
                  <li className="text-white/90 text-xl">●  Divulgar eventos, programas, comunidades e soluções</li>
                  <li className="text-white/90 text-xl">●  Facilitar contato e relacionamento com o ecossistema Impacte Brasil</li>
                </ul>

                <h2 className="text-secondary-blue text-2xl">2. Uso Adequado</h2>
                <p className="text-white/90 text-xl">O usuário compromete-se a:</p>
                <ul className="ml-6">
                  <li className="text-white/90 text-xl">●  Utilizar o site de forma lícita e ética</li>
                  <li className="text-white/90 text-xl">●  Não violar direitos de terceiros</li>
                  <li className="text-white/90 text-xl">●  Não tentar acessar áreas restritas ou sistemas internos</li>
                </ul>

                <h2 className="text-secondary-blue text-2xl">3. Propriedade Intelectual</h2>
                <p className="text-white/90 text-xl">Todo o conteúdo do site pertence à Impacte Brasil ou a seus parceiros, sendo proibida a
                reprodução, distribuição ou uso comercial sem autorização expressa.</p>
              
                <h2 className="text-secondary-blue text-2xl">4. Limitação de Responsabilidade</h2>
                <p className="text-white/90 text-xl">Os conteúdos possuem caráter informativo e educacional. A Impacte Brasil não garante
                  resultados financeiros, operacionais ou estratégicos decorrentes da aplicação das
                  informações.
                </p>

                <h2 className="text-secondary-blue text-2xl">5. Comunicações</h2>
                <p className="text-white/90 text-xl">Ao fornecer seus dados, o usuário autoriza o envio de comunicações institucionais e de
                conteúdo, podendo cancelar a qualquer momento.</p>

                <h2 className="text-secondary-blue text-2xl">6. Alterações</h2>
                <p className="text-white/90 text-xl">Os Termos podem ser alterados sem aviso prévio. O uso contínuo implica aceitação.</p>
              </div>
            </LayoutDesktop>
          </LayoutContent>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Terms
