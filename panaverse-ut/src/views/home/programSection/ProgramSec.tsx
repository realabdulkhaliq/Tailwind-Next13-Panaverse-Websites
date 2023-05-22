import programImage from "@/assets/program/programImage.svg";
import Image from "next/image";

export default function ProgramSec() {
  return (
    <>
      <div className="mt-[1070px] ml-[97px] flex">
        <Image src={programImage} alt="" />
        <div className="bg-gray-800 w-[748px] h-[416px] text-center px-[56px] py-[67px] rounded-lg -mt-[140px]">
          <p className="text-[#11AD8E] text-5xl mb-8">
            The Program in a Nutshell
          </p>
          <p className="text-[#11AD8E] text-3xl mb-8 underline">
            Earn While You Learn
          </p>
          <p className="text-[#F2F5F8]">
            In this brand-new type of curriculum, students will learn how to
            make money and boost exports in the classroom and will begin doing
            so within six months of the programs beginning. It resembles a cross
            between a corporate venture and an educational project.
          </p>
        </div>
      </div>
    </>
  );
}
