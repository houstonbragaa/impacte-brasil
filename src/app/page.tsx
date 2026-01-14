import Header from "@/components/common/header";

import styles from "./styles.module.css";
import Image from "next/image";
import HeroContent from "@/components/home/hero-content";
import Button from "@/components/common/button";
import Results from "@/components/home/results";
import Benefits from "@/components/home/benefits";
import Faq from "@/components/home/faq";
import Testimonials from "@/components/common/testimonials";
import CtaSection from "@/components/common/cta-section";
import Footer from "@/components/common/footer";
import VideoTestemonial from "@/components/home/video-testimonial";
import Glow from "@/components/common/glow";



const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className={`flex flex-col  w-full relative ${styles.bgGradientHero}`}
      >
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
          src="/gridHome.png"
          className={`opacity-40 ${styles.bgImage}`}
          priority={true}
        />
        <div className="z-10 my-auto">
          <HeroContent />
        </div>
      </div>
      <div
        className={`${styles.bgGradientHeroSecondary} md:h-[400px] h-[800px] flex md:flex-row gap-10 md:gap-0 flex-col-reverse  justify-center items-center`}
      >
        <div className="text-white/90 flex flex-col items-center md:gap-0 gap-6 md:items-start">
          <p className="text-center md:text-left md:max-w-[480px] max-w-[330px] text-sm md:text-xl">
            Juntos, enfrentamos gargalos reais, aceleramos decisões e
            construímos soluções completas e integradas para transformar o
            varejo supermercadista de forma prática e contínua.
          </p>
          <Button text="Tire suas dúvidas" />
        </div>
        <div>
          <Image
            src="/logo-orbit-impacte.svg"
            width={600}
            height={600}
            alt="logo orbita"
            className="h-auto w-[350px] md:w-[600px]"
          />
        </div>
      </div>
      <Results />
      <Benefits />
      <div className="flex flex-col items-center justify-center relative mt-48 gap-8">
        <Glow className="-right-20 top-0"/>
        <h1 className="sm:text-4xl text-3xl font-semibold text-center">
          Pronto para virar essa chave?
        </h1>
        <Button text="Entrar para nosso ecossistema" />
      </div>
      <Faq />
      <Testimonials />
      <VideoTestemonial />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default HomePage;
