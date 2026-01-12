const TestimonialItem = () => {
  return (
    <div className="flex flex-col justify-between px-4 py-6 bg-white w-full sm:w-[350px] h-[280px] border border-solid border-secondary-blue rounded-3xl">
      <div className="flex flex-col items-center gap-3 ">
        <div className="rounded-full bg-secondary-blue h-[50px] w-[50px]"></div>
        <p className="text-sm text-center text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          perferendis sit corporis soluta incidunt esse iste nulla excepturi
          mollitia debitis cupiditate et.
        </p>
      </div>
      <div className="flex flex-col items-center bottom-20">
        <p className="text-md font-semibold text-primary-green/80">Houston</p>
        <span className="text-xs text-zinc-400">Mercadinho Sucesso</span>
      </div>
    </div>
  );
};

export default TestimonialItem;
