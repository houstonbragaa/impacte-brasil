import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import ContactForm from "./contact-form";
import SocialMedias from "./social-medias";

const Main = () => {
  return (
    <LayoutContent className="flex flex-col justify-center items-center relative z-10">
      <LayoutDesktop className="flex flex-col items-center justify-center lg:w-2xl md:w-xl md:mt-24 mt-8 lg:p-8 rounded-xl">
        <ContactForm />
        <p className="flex w-full ml-4 text-white/80 text-sm">Ao enviar este formulário, você concorda com o processamento <br /> de seus dados de acordo com nossa Política de Privacidade.</p>
        <SocialMedias />
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default Main;
