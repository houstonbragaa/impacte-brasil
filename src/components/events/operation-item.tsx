import { OperationType } from "@/types/events-types";
import Image from "next/image";

const OperationItem = ({ icon, title }: OperationType) => {
  return (
    <div className="flex gap-6 items-center px-6 py-5 w-[460px] h-[120px] rounded-2xl bg-white border border-secondary-blue/35 min-h-[120px] max-w-[460px]">
      <Image src={icon} alt="icon" width={50} height={50} />
      <h2 className="text-xl text-left font-medium leading-tight flex-1 wrap-break-words whitespace-pre-line">
        {title}
      </h2>
    </div>
  );
};

export default OperationItem;
