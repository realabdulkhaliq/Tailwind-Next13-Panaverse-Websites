import Image from "next/image";
import React from "react";
import heroBg from "@/assets/hero/HeroBg.svg";
import heroImg from "@/assets/hero/HeroImg.svg";
import { herobutton, herotext } from "@/assets/data/database";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className="flex-1 -mt-40 relative -z-10 bg-[url('/assets/hero/HeroBg.svg')]">
      <Image src={heroBg} alt="Hero Background" className="w-screen absolute" />
      <div className="text-white absolute mt-[240px] z-10 text-5xl font-bold left-44">
        Become <br />
        <span className="text-[#11AD8E]">Certified Web 3.0 </span> and
        <br />
        <span className="text-[#11AD8E]"> Metaverse Developer</span>
      </div>
      <p className="absolute mt-[445px] z-10 text-2xl text-[#F2F5F8] left-44 w-[588px]">
        {herotext}
      </p>
      <div className="absolute mt-[574px] left-44 z-10">
        <PrimaryButton labelName={herobutton} link="/" />
      </div>
      <div className="absolute mt-[240px] right-44">
        <Image src={heroImg} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
