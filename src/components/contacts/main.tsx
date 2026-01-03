import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import ContactForm from "./contact-form";
import SocialMedias from "./social-medias";

const Main = () => {
  return (
    <LayoutContent className="flex flex-col justify-center items-center relative z-10">
      <LayoutDesktop className="flex flex-col items-center justify-center w-2xl mt-32 p-8 rounded-xl">
        <ContactForm />
        <SocialMedias />
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default Main;
