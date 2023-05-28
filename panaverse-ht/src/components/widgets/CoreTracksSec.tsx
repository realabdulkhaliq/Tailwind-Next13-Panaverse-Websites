import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import QuarterBox from "../shared/QuarterBox";
import { quarterData } from "@/assets/data/database";

const CoreTracksSec = () => {
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
        <div className="flex space-x-16 mt-6">
          <QuarterBox
            quarter="Quarter I"
            description="CS-101: Object-Oriented Programming using TypeScript"
            number={1}
          />
          <QuarterBox
            quarter="Quarter II"
            description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
            number={2}
          />
          <QuarterBox
            quarter="Quarter III"
            description="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
            number={3}
          />
        </div>
        <div className="flex gap-x-16 mt-6">
          {quarterData.map((data) => (
            <div key={data.num} className="flex-1">
              <QuarterBox
                quarter={data.quarter}
                description={data.desc}
                number={data.num}
              />
            </div>
          ))}
        </div>
        {/* Best Way of Using Map */}
        <div className="flex gap-x-16 mt-6">
          {quarterData.map((data, i) => (
            <div
              key={data.num}
              className="border rounded-md relative pt-[120px] pb-14 px-8 flex-1"
            >
              <h4 className="text-lg font-bold">{data.quarter}</h4>
              <p className="mt-2">{data.desc}</p>
              <span className="absolute top-0 right-10 text-[204px] font-bold -z-10 text-gray-200">
                {data.num}
              </span>
            </div>
          ))}
          {/* Key mangta hy Hamza Waly method me */}
          {/* {quarterData.map((item, i) => (
            <div>
              <h4 className="text-lg font-bold">{item.quarter}</h4>
              <p className="mt-2">{item.desc}</p>
              <span className="absolute top-0 right-10 text-[204px] font-bold -z-10 text-gray-200">
                {i + 1}
              </span>
            </div>
          ))} */}
        </div>
        <div className="flex gap-8 mt-6 max-w-screen-2xl items-stretch flex-col md:flex-row">
          {quarterData.map((data, i) => (
            <div
              key={data.num}
              className="border rounded-md relative flex flex-col flex-1 justify-center py-24 px-8"
            >
              {/* Insted of w-full md:w-4/12 we use flex-1 */}
              <h4 className="text-lg font-bold">{data.quarter}</h4>
              <p className="mt-2">{data.desc}</p>
              <span className="absolute -top-10 right-10 text-[204px] font-bold -z-10 text-gray-200">
                {data.num}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracksSec;
