import { OperationType } from "@/types/events-types";
import Image from "next/image";

const OperationItem = ({ icon, title }: OperationType) => {
  return (
    <div className="flex gap-4 sm:gap-6 items-center px-4 sm:px-6 py-4 sm:py-5 w-full sm:w-[460px] h-[100px] sm:h-[120px] rounded-2xl bg-white border border-secondary-blue/35 min-h-[100px] sm:min-h-[120px] max-w-full sm:max-w-[460px]">
      <Image
        src={icon}
        alt="icon"
        width={42}
        height={42}
        className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
      />
      <h2 className="text-base sm:text-xl text-left font-medium leading-tight flex-1 wrap-break-words whitespace-pre-line">
        {title}
      </h2>
    </div>
  );
};

export default OperationItem;
