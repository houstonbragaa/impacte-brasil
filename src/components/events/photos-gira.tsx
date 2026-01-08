import Image from "next/image";

const PhotosGira = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-8">
      <div className="relative w-[250px] h-[216px] rounded-4xl bg-transparent flutuando animation-delay-0">
        <Image 
          src="/image-gira1.jpg"
          alt="image gira"
          fill
          loading="lazy"
          className="rounded-4xl object-cover mask-b-from-50%"
        />
      </div>
      <div className="relative w-[250px] h-[216px] rounded-4xl bg-transparent flutuando animation-delay-1">
        <Image 
          src="/image-gira2.jpg"
          alt="image gira"
          fill
          loading="lazy"
          className="rounded-4xl object-cover mask-b-from-50%"
        />
      </div>
      
      <div className="relative w-[250px] h-[216px] rounded-4xl bg-transparent flutuando animation-delay-3">
        <Image 
          src="/image-gira3.jpg"
          alt="image gira"
          fill
          loading="lazy"
          className="rounded-4xl object-cover mask-b-from-50%"
        />
      </div>
      <div className="relative w-[250px] h-[216px] rounded-4xl bg-transparent flutuando animation-delay-2">
        <Image 
          src="/image-gira4.jpg"
          alt="image gira"
          fill
          loading="lazy"
          className="rounded-4xl object-cover mask-b-from-50%"
        />
      </div>
    </div>
  );
};

export default PhotosGira;
