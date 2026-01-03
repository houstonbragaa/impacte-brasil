import Image from "next/image";
import Link from "next/link";

const SocialMedias = () => {
  return (
    <div className="flex w-full gap-4 mt-8">
      <Link href="/">
        <Image src="/icons8-instagram (1).svg" alt="Instagram" width={30} height={50} />
      </Link>
      <Link href="/">
        <Image src="/icons8-linkedin.svg" alt="Linkedin" width={30} height={50} />
      </Link>
      <Link href="/">
        <Image src="/icons8-youtube (1).svg" alt="Youtube" width={30} height={50} />
      </Link>
    </div>
  );
};

export default SocialMedias;