import Main from "@/components/about/main";
import Header from "@/components/common/header";
import styles from "../../app/styles.module.css";
import AboutUs from "@/components/about/aboutus";
import Solutions from "@/components/about/solutions";
import Footer from "@/components/common/footer";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-48 overflow-x-hidden">
        <div
          className={`flex flex-col w-full relative ${styles.bgGradientHero}`}
        >
          <Header isTransparent="bg-transparent" />
          <Main />
        </div>
        <AboutUs />
        <Solutions />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
