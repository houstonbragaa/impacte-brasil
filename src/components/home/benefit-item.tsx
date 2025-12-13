import React from "react";
import { twMerge } from "tailwind-merge";

interface BenefitItemProps {
  icon: React.ReactNode
  text: string
  className?: string
}

const BenefitItem = ({icon, text, className}: BenefitItemProps) => {
  return (
    <div className={twMerge(`flex flex-col gap-3 p-8 w-[250px]`, className)}>
      <div className="flex justify-center items-center rounded-full w-12 h-12 bg-white">
        {icon}
      </div>
      <p className="max-w-[150px] font-semibold">{text}</p>
    </div>
  );
};

export default BenefitItem;
