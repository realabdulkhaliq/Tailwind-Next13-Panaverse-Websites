import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import outcome from "@/assets/images/outcome.webp";
import outcomePoint from "@/assets/images/outcomePoint.svg";
import { OutcomePoints, ProgramOutcomeInfo } from "@/assets/data/database";

const ProgramOutcome = () => {
  return (
    <section className="my-16">
      <Wrapper>
        <div className="flex flex-col-reverse md:flex-row gap-x-8">
          {/* Left Side */}
          <div className="flex-1">
            <Image src={outcome} alt="Outcome Image" />
          </div>
          {/* Right Side */}
          <div className="flex-1">
            <div className="bg-[#05C19C] w-[315px] h-[315px] blur-[280px]"></div>
            <h2 className="text-[38px] sm:text-[44px] leading-[48px] font-bold -mt-72">
              The Outcome for Participants of the Program
            </h2>
            <p className="text-xl  mt-6">{ProgramOutcomeInfo}</p>
            <div className="mt-9 grid grid-cols-2 gap-y-4">
              {OutcomePoints.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Image src={outcomePoint} alt="" className="flex-shrink-0" />
                  <h3 className="text-lg font-medium">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
