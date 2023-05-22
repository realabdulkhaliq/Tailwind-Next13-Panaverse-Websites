import Image from "next/image";
import React from "react";

export default function JoinUSCard({ title, img }: any) {
  return (
    <div className="bg-gray-900 h-[240px] w-[280px] flex flex-col gap-2 rounded-lg shadow-md items-center px-[76px] py-[34px]">
      <h1 className="text-white text-2xl text-center">{title}</h1>
      <Image src={img} alt={title} className="text-[#11AD8E]" />
    </div>
  );
}
