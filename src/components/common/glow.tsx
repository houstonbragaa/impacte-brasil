import Image from "next/image"

interface GlowTypes {
  className?: string
}

const Glow = ({className}: GlowTypes) => {
  return (
    <Image 
      src="https://res.cloudinary.com/dpmmgqtzp/image/upload/v1768360785/glow_2_h9bu51.png"
      alt="glow"
      width={900}
      height={900}
      className={`${className} absolute`}
    />
  )
}

export default Glow