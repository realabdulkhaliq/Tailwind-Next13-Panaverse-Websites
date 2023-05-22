import Link from "next/link";
import React from "react";

const PrimaryButton = ({ labelName, link }: any) => {
  return (
    <div
      className="bg-[#11AD8E] text-black rounded-lg text-[18px] font-semibold 
    hover:bg-transparent hover:text-[#11AD8E] hover:border-[#11AD8E] hover:border-2"
    >
      <Link href={link}>
        <button className="mx-[24px] my-[12px]">{labelName}</button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
