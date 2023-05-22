import React from "react";
import HeroBg from "@/assets/hero/HeroBg.png";

const MyHero = () => {
  return (
    <div
      className="bg-hero-background w-screen  z-10 h-[972px]"
      style={{
        backgroundImage: `url(${HeroBg})`,
        height: "972px",
      }}
    ></div>
  );
};

export default MyHero;
