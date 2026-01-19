import Link from "next/link";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <Link href="https://wa.me/554898060177" target="_blank" className="w-fit px-4 bg-secondary-blue h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-xs shadow-white hover:scale-105 hover:shadow-sm before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-linear-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-white">
      {text}
    </Link>
  );
};

export default Button;
