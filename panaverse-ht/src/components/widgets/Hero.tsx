import Wrapper from "@/components/shared/Wrapper";
import HeroImg from "@/assets/images/HeroImg.svg";
import Image from "next/image";
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h4 className="text-[#00616C] text-lg">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-[48px] sm:text-[56px] font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="text-xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <br />
            <p className="text-xl">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-9">
              {/* div for adding margin to button */}
              <Button link="" labelName="Learn More" />
            </div>
          </div>
          <div className="flex-1">
            <Image src={HeroImg} alt="Hero Image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
