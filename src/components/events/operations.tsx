import { operations } from "@/constants/operations";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import OperationItem from "./operation-item";
import Image from "next/image";
import Glow from "../common/glow";
import Title from "../common/title";

const Operations = () => {
  return (
    <LayoutContent className="relative flex flex-col mt-24 sm:mt-36">
      <Glow className="-bottom-100 -right-48" />
      <div className="space-y-12 sm:space-y-20 flex flex-col items-center">
        <Title text="Como funciona" color=""/>
        <LayoutDesktop className="flex flex-col gap-6 sm:gap-8 w-full">
          {operations.map((operation, idx) => {
            const rightAlign = idx % 2 === 1;
            const side = rightAlign ? "md:justify-end" : "md:justify-start";
            return (
              <div
                key={operation.id}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full ${side}`}
              >
                {!rightAlign && (
                  <>
                    <OperationItem
                      icon={operation.icon}
                      title={operation.title}
                    />
                    <Image
                      src="/Line 3.svg"
                      alt="Seta"
                      width={60}
                      height={60}
                      className={`hidden md:block lg:mr-48 ${
                        idx === operations.length - 1 ? "invisible" : ""
                      }`}
                    />
                  </>
                )}
                {rightAlign && (
                  <>
                    <Image
                      src="/Line 3.svg"
                      alt="Seta"
                      width={60}
                      height={60}
                      style={{ transform: "scaleX(-1)" }}
                      className={`hidden md:block lg:ml-48 ${
                        idx === operations.length - 1 ? "invisible" : ""
                      }`}
                    />
                    <OperationItem
                      icon={operation.icon}
                      title={operation.title}
                    />
                  </>
                )}
              </div>
            );
          })}
        </LayoutDesktop>
      </div>
    </LayoutContent>
  );
};

export default Operations;
