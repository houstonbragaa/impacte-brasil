"use client";

import { CirclePlus } from "lucide-react";
import { useState } from "react";

interface FaqItemProps {
  question: string;
  response?: string;
}

const FaqItem = ({ question, response }: FaqItemProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col bg-linear-to-r to-45% from-primary-green to-secondary-blue rounded-3xl w-full">
      <div className="flex justify-between p-8">
        <h2 className="text-white text-xl font-bold">{question}</h2>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => setIsActive((prev) => !prev)}
        >
          <CirclePlus
            className={`font-bold w-8 h-8 text-white transition-all ${
              isActive ? "rotate-45" : ""
            }`}
          />
        </button>
      </div>
      {isActive && (
        <div className="px-8 pb-8 text-zinc-300">
          <p className="font-light ">{response}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
