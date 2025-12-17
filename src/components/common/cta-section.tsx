import Image from "next/image";
import styles from "../../app/styles.module.css";
import Button from "./button";

const CtaSection = () => {
  return (
    <div
      className={`${styles.bgGradientHeroSecondary} relative overflow-hidden h-[400px] flex flex-col justify-center items-center mt-48 gap-10`}
    >
      <Image
        src="/gridhome.svg"
        alt="grid"
        width={1000}
        height={1000}
        className="absolute opacity-40 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
      />
      <h1 className="text-white font-bold sm:text-5xl text-center text-4xl">
        Faça parte deste movimento
      </h1>
      <Button text="Entrar para nosso ecossistema" />
    </div>
  );
};

export default CtaSection;
