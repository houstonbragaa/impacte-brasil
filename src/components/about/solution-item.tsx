import { SolutionsProps } from "@/types/about-types";
import Image from "next/image";

const SolutionItem = ({
  icon,
  title,
  description,
  className = "",
}: SolutionsProps & { className?: string }) => {
  return (
    <div
      className={`bg-linear-to-r from-primary-green to-secondary-blue p-[2px] rounded-3xl w-[340px] h-[300px] ${className}`}
    >
      <div className="bg-white rounded-3xl p-8 h-full w-full flex gap-4 flex-col justify-center items-center">
        <Image
          src={icon}
          width={50}
          height={50}
          className="w-[50px] h-[50px]"
          quality={100}
          alt={title}
        />
        <h2 className="font-bold text-xl text-center">{title}</h2>
        <p className="text-sm opacity-70 text-center">{description}</p>
      </div>
    </div>
  );
};

export default SolutionItem;
