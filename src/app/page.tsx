import Header from "@/components/common/header";

import styles from "./styles.module.css";
import Image from "next/image";
import HeroContent from "@/components/hero-content";
import Button from "@/components/common/button";
import Results from "@/components/results";
import Benefits from "@/components/benefits";
import Faq from "@/components/faq";
import Testimonials from "@/components/common/testimonials";
import CtaSection from "@/components/common/cta-section";
import Footer from "@/components/common/footer";

const HomePage = () => {
  return (
    <>
      <div className={`flex flex-col w-full relative ${styles.bgGradientHero}`}>
        <Header isTransparent="bg-transparent" />
        <Image
          alt="bg hero"
          fill={true}
          src="/photohero.webp"
          className={`opacity-5 ${styles.bgImage}`}
          priority={true}
        />
        <Image
          alt="bg hero"
          fill={true}
          src="/gridhome.svg"
          className={`opacity-40 ${styles.bgImage}`}
          priority={true}
        />
        <div className="z-10 my-auto">
          <HeroContent />
        </div>
      </div>
      <div
        className={`${styles.bgGradientHeroSecondary} h-[400px] flex justify-center items-center`}
      >
        <div className="text-white">
          <p className="text-left max-w-[480px] text-xl">
            Juntos, enfrentamos gargalos reais, aceleramos decisões e
            construímos soluções completas e integradas para transformar o
            varejo supermercadista de forma prática e contínua.
          </p>
          <Button text="Tire suas dúvidas" />
        </div>
        <div>
          <Image
            src="/logo-orbit.png"
            width={600}
            height={600}
            alt="logo orbita"
          />
        </div>
      </div>
      <Results />
      <Benefits />
      <div className="flex flex-col items-center justify-center mt-48 gap-8">
        <h1 className="text-4xl font-semibold">
          Pronto para virar essa chave?
        </h1>
        <Button text="Entrar para nosso ecossistema" />
      </div>
      <Faq />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
};

export default HomePage;
