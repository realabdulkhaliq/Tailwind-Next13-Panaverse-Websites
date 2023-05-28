import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import { quarterData } from "@/assets/data/database";
import QuarterBox from "@/components//shared/QuarterBox";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section>
      <Wrapper>
        <div className="bg-[#00616C] w-64 h-80 blur-[150px]"></div>
        <div className="max-w-screen-sm -mt-32">
          <h4 className="text-[#00616C] text-lg">Program of Studies</h4>
          <h2 className="text-[38px] sm:text-[40px] font-bold whitespace-pre-line">
            {header}
          </h2>
          <p className="text-xl">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-9">
            {/* div for adding margin to button */}
            <Button link="" labelName="Learn More" />
          </div>
        </div>
        {/* Best Way of Using Map */}
        <div className="flex gap-8 mt-6 max-w-screen-2xl flex-col md:flex-row">
          {quarterData.map((data) => (
            <QuarterBox
              key={data.num}
              description={data.desc}
              quarter={data.quarter}
              number={data.num}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
