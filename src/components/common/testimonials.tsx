import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import TestimonialItem from "../home/testimonial-item";
import Image from "next/image";
import testimonials from "@/constants/testimonials";
import { TestimonialsTypes } from "@/types/home-types";
import Glow from "./glow";

const Testimonials = () => {
  return (
    <LayoutDesktop className="relative flex flex-col items-center m-auto mt-48 max-w-7xl space-y-16">
      <Glow className="-left-80"/>
      <h1 className="sm:text-4xl text-3xl font-semibold">Depoimentos</h1>
      <LayoutContent className="grid sm:grid-cols-2 items-start relative w-full gap-4">
        <div className="relative sm:h-[350px] h-[280px] w-full bg-primary-green rounded-3xl">
          <Image
            src="/notbook-impacte.jpg"
            fill
            alt="not-impacte"
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>

        <h1 className="text-primary-green text-left pl-2 font-normal text-4xl w-full md:leading-relaxed">
          São mais de 100 supermercados atendidos por todo Brasil
        </h1>
        <div className="sm:absolute sm:-bottom-32 sm:right-0 sm:flex sm:flex-row flex-col space-y-5 gap-3 sm:mr-[120px] mr-0">
          {testimonials.map(
            ({ id, name, supermarket, avatar, text }: TestimonialsTypes) => (
              <TestimonialItem
                key={id}
                name={name}
                supermarket={supermarket}
                avatar={avatar}
                text={text}
              />
            )
          )}
        </div>
      </LayoutContent>
    </LayoutDesktop>
  );
};

export default Testimonials;
