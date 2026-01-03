import Header from "@/components/common/header";
import styles from "@/app/styles.module.css";
import Main from "@/components/contacts/main";
import Footer from "@/components/common/footer";
import Image from "next/image";

const ContactsPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className={`flex flex-col h-screen w-full ${styles.bgGradientHero}`}>
          <Header isTransparent="bg-transparent" />
          <Main />
        </div>
        <Image src="/gridhome.svg" alt="grid" fill className="opacity-35"/> 
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
