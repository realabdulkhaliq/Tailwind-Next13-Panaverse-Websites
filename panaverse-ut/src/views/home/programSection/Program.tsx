import Image from "next/image";
import programImage from "@/assets/program/programImage.svg";
import { programInfo } from "@/assets/data/database";

const Program = () => {
  return (
    <div className="grid grid-cols-2 mt-[1000px]">
      <div className="mt-[240px]">
        <Image src={programImage} alt="A Man Working on Laptop" />
      </div>

      {programInfo.map((data) => (
        <div
          className="bg-gradient-to-r from-[#F2F5F81F] to-[#F2F5F8] rounded-lg"
          key={data.id}
        >
          <h1 className="text-[#11AD8E] text-2xl">{data.heading}</h1>
          <h2 className="text-[#11AD8E] text-xl">{data.subheading}</h2>
          <p className="text-[#F2F5F8]">{data.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Program;
