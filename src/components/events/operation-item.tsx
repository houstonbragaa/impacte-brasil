import { OperationType } from "@/types/events-types"
import Image from "next/image"

const OperationItem = ({icon, title }: OperationType) => {
  return (
    <div className="flex gap-6 px-6 py-5 rounded-3xl bg-white border border-secondary-blue">
      <Image 
        src={icon}
        alt="icon"
        width={100}
        height={100}
      />
      <h2 className="text-xl">{title}</h2>
    </div>
  )
}

export default OperationItem