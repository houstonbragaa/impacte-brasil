import Main from "@/components/about/main";
import Header from "@/components/common/header";
import styles from "../../app/styles.module.css";
import AboutUs from "@/components/about/aboutus";

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <div className={`flex flex-col w-full relative ${styles.bgGradientHero}`}>
        <Header isTransparent="bg-transparent" />
        <Main />
      </div>
      <AboutUs />
    </div>
  );
};

export default AboutPage;
