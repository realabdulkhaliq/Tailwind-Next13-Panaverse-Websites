import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/views/home/heroSection/Hero";
import Program from "@/views/home/programSection/Program";
import HeroSec from "@/views/home/heroSection/HeroSec";
import ProgramSec from "@/views/home/programSection/ProgramSec";
import MyHero from "@/views/home/heroSection/MyHero";
import JoinSec from "@/views/home/joinUs/JoinSec";
import OurPartners from "@/views/home/ourPartners/OurPartners";

export default function Home() {
  return (
    <>
      <HeroSec />
      <ProgramSec />
      <JoinSec />
      <OurPartners />
    </>
  );
}
