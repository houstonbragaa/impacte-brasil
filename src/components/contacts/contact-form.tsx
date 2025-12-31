"use client";

import Image from "next/image";
import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className=" flex flex-col w-2xl mt-32 mb-48 p-8 rounded-xl items-start">
      <Image 
        src="/impacte-logo.png"
        width={100}
        height={100}
        alt="impacte logo"
        className="ml-2"
      />
      <iframe
        data-tally-src="https://tally.so/embed/J9dy54?alignLeft=1&transparentBackground=1&dynamicHeight=1"
        width="100%"
        height="350"
        title="Contato"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactForm;
