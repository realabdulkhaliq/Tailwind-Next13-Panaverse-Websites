import Link from "next/link";
import React from "react";

const MenuItems = ({ labelName, link }: any) => {
  return (
    <div className="text-white text-[24px] hover:text-[#11AD8E]">
      <Link href={link}>{labelName}</Link>
    </div>
  );
};

export default MenuItems;
