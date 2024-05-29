import React from "react";
import Image from "next/image";
import hero from "../../../../public/HomeImages/hero.jpg";
import Button from "../../components/button/page";
import leftherocard from "../../../../public/HomeImages/leftherocard.jpg";
import rightherocard from "../../../../public/HomeImages/rightherocard.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-section relative text-white text-4xl font-extrabold ">
      <Image src={hero} width="500px" height="500px" className="hero-image" />
      <div className="hero-text flex flex-col gap-14 absolute top-36 left-40 z-10">
        <p>T-shirt/Tops</p>
        <h1 className="font-extrabold text-6xl">
          Summer <br /> value pack
        </h1>
        <p>cool/colorful/comfy</p>
        <Button
          bgColor="bg-white"
          textColor="text-gray-700"
          textSize="text-sm"
          paddingX="px-6"
          paddingY="py-4"
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
