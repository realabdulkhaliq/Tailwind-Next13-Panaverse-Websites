import Image from "next/image";
import React from "react";
import bgImage from "@/assets/hero/HeroBg.svg";
import heroImg from "@/assets/hero/HeroImg.svg";
import { herotext } from "@/assets/data/database";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function HeroSec() {
  return (
    <>
      <div className="flex-1 -mt-40 relative -z-10">
        <div className="z-10">
          <div className="text-white mt-[239px] ml-[183px] absolute z-10 text-5xl font-bold">
            <span>Become</span>
            <br />
            <span className="text-[#11AD8E]">Certified Web 3.0</span> and
            <br />
            <span className="text-[#11AD8E]">Metaverse Developer</span>
          </div>
          <span className="text-white mt-[445px] ml-[183px] absolute z-10 text-2xl w-[588px]">
            {herotext}
          </span>
          <div className="mt-[564px] ml-[183px] absolute z-10">
            <PrimaryButton labelName="Join Now" link="/" />
          </div>
        </div>
        <div className="absolute z-10 mt-[239px] ml-[824px]">
          <Image src={heroImg} alt="Hero Image" />
        </div>
        <Image src={bgImage} alt="bgImg" className="w-screen absolute" />
      </div>
    </>
  );
}
