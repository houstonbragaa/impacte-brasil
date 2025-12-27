import { operations } from "@/constants/operations";
import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import OperationItem from "./operation-item";
import Image from "next/image";

const Operations = () => {
  return (
    <LayoutContent className="flex min-w-[1000px] flex-col mt-48">
      <div className="space-y-24 flex flex-col items-center">
        <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold">
          Como funciona
        </h1>
        <LayoutDesktop className="flex flex-col gap-8 w-full">
          {operations.map((operation, idx) => {
            const rightAlign = idx % 2 === 1;
            const side = rightAlign ? "justify-end" : "justify-start";
            return (
              <div
                key={operation.id}
                className={`flex items-center gap-6 w-full ${side}`}
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
                      className={
                        idx === operations.length - 1 ? "invisible" : ""
                      }
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
                      className={
                        idx === operations.length - 1 ? "invisible" : ""
                      }
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
