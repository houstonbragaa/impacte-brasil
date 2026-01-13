import { TestimonialsTypes } from "@/types/home-types";
import Image from "next/image";

const TestimonialItem = ({text, name, supermarket, avatar}: TestimonialsTypes) => {
  return (
    <div className="flex flex-col justify-between px-4 py-6 bg-white w-full sm:w-[350px] h-[280px] border border-solid border-secondary-blue rounded-3xl">
      <div className="flex flex-col items-center gap-3 ">
        <div className="relative rounded-full bg-secondary-blue h-[50px] w-[50px]">
          <Image 
            src={avatar}
            alt="avatar testimonials"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <p className="text-sm text-center text-zinc-400">
          {text}
        </p>
      </div>
      <div className="flex flex-col items-center bottom-20">
        <p className="text-md font-semibold text-primary-green/80">{name}</p>
        <span className="text-xs text-zinc-400">{supermarket}</span>
      </div>
    </div>
  );
};

export default TestimonialItem;
