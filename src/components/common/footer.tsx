import Image from "next/image";
import { LayoutContent } from "../layout/layout-content";
import Link from "next/link";

const Footer = () => {
  return (
    <LayoutContent className="pt-24 pb-12 bg-zinc-100 relative">
      <footer className="flex flex-col gap-14">
        <div className="w-full flex justify-start">
          <Image
            src="/logofooter.png"
            alt="logofooter"
            width={300}
            height={39}
            className="md:h-[39px] md:w-[300px] h-[29px] w-[200px]"
          />
        </div>
        <div className="w-full flex gap-6">
          <Link href="/">
            <Image
              width={32}
              height={32}
              src="/LinkedinLogo.png"
              alt="Linkedin"
            />
          </Link>
          <Link href="/">
            <Image
              width={32}
              height={32}
              src="/InstagramLogo.png"
              alt="Linkedin"
            />
          </Link>
          <Link href="/">
            <Image
              width={32}
              height={32}
              src="/YoutubeLogo.png"
              alt="Linkedin"
            />
          </Link>
        </div>
        <div className="w-full flex md:flex-row  flex-col lg:justify-start justify-between gap-8 lg:gap-20 items-start">
          <div className="flex flex-col justify-start">
            <h2 className="mb-4 md:text-2xl text-xl font-normal">Endereço</h2>
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-400 md:text-xl text-md">
                Rod. Admar Gonzaga, 440
              </h3>
              <h3 className="text-gray-400 md:text-xl text-md">
                Torre Pacifico – Itacorubi
              </h3>
              <h3 className="text-gray-400 md:text-xl text-mdl">
                Florianópolis/SC
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="mb-4 md:text-2xl text-xl font-normal">Contatos</h2>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-gray-400 cursor-text  md:text-xl text-mdl"
              >
                48 3036 2728
              </Link>
              <Link
                href="https://wa.me/554898060177"
                target="_blank"
                className="text-gray-400 hover:text-gray-400/50  md:text-xl text-md"
              >
                WhatsApp
              </Link>
              <Link
                href="/"
                className="text-gray-400 cursor-text  md:text-xl text-md"
              >
                contato@impactebrasil.com.br
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="mb-4 md:text-2xl text-xl font-normal">
              Ecossistema
            </h2>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-gray-400 hover:text-gray-400/50 md:text-xl text-md"
              >
                Sobre nós
              </Link>
              <Link
                href="https://comunidadegira.com.br/"
                target="_blank"
                className="text-gray-400 hover:text-gray-400/50 md:text-xl text-md"
              >
                Gira comunidade
              </Link>
              <Link
                href="/contacts"
                className="text-gray-400 hover:text-gray-400/50 md:text-xl text-md"
              >
                Formulário
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <h2 className="mb-4 md:text-2xl text-xl font-normal">Políticas</h2>
            <div className="flex flex-col gap-2">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-gray-400/50 md:text-xl text-md"
              >
                Privacidade
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-gray-400/50 md:text-xl text-md"
              >
                Termos de uso
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-start">
          <p className="text-md">© 2026 Impacte brasil.</p>
        </div>
      </footer>
    </LayoutContent>
  );
};

export default Footer;
