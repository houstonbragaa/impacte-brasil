import Button from "../common/button";
import { LayoutDesktop } from "../layout/layout-content";

const AboutUs = () => {
  return (
    <>
      <div
        className={`
      w-24 h-12 mx-auto block -z-10 
      [background:linear-gradient(135deg,#04a859_0%,#047d43_55%,#316178_100%)] 
      [clip-path:polygon(50%_100%,0_0,100%_0)]
      animate-bounce
    `}
      ></div>
      <LayoutDesktop className="flex flex-col space-y-24 mt-42">
        <div className="grid grid-cols-2 gap-24 h-[300px] w-full">
          <p className="text-xl">
            Aqui, não entregamos serviços avulsos. Entregamos transformação. Com
            um portfólio robusto que conecta 14 empresas especializadas, atuamos
            de forma prática nas áreas mais sensíveis do supermercado: da
            consultoria tributária à operação, da gestão estratégica à inovação,
            da liderança à tecnologia aplicada.
          </p>
          <div className="bg-primary-green w-full rounded-2xl">
            {/* Foto de algo que representa a comunidade */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="max-w-[800px] text-xl text-center">
            Nosso papel é ser o elo entre o supermercadista e o próximo nível do
            seu negócio. Ajudamos líderes a enxergar o invisível, corrigir o que
            trava o crescimento e implementar soluções com segurança, clareza e
            acompanhamento real. Mais que parceiros, somos catalisadores de
            resultados duradouros. E é com esse compromisso que seguimos lado a
            lado com quem quer crescer com consciência, dominar seu mercado e
            transformar o varejo com inteligência.
          </p>
          <Button text="Faça parte da nossa comunidade"/>
        </div>
      </LayoutDesktop>
    </>
  );
};

export default AboutUs;
