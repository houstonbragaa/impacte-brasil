import { LayoutContent, LayoutDesktop } from "../layout/layout-content";
import TestimonialItem from "../home/testimonial-item";

const Testimonials = () => {
  return (
    <LayoutDesktop className="flex flex-col items-center m-auto mt-48 max-w-7xl space-y-16">
      <h1 className="text-4xl font-semibold">Depoimentos</h1>
      <LayoutContent className="grid grid-cols-2 items-start h-[450px] relative w-full gap-4">
        <div className="h-[350px] w-full bg-primary-green rounded-3xl"></div>

        <h1 className="text-primary-green font-normal text-4xl w-full leading-relaxed">
          São mais de 100 supermercados atendidos por todo Brasil
        </h1>
        <div className="absolute bottom-0 right-0 flex gap-3 mr-[120px]">
          <TestimonialItem />
          <TestimonialItem />
        </div>
      </LayoutContent>
    </LayoutDesktop>
  );
};

export default Testimonials;
