import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import ContactForm from "./contact-form";

const Main = () => {
  return (
    <LayoutContent className="flex flex-col justify-center items-center relative z-10">
      <LayoutDesktop>
        <ContactForm />
      </LayoutDesktop>
    </LayoutContent>
  );
};

export default Main;
