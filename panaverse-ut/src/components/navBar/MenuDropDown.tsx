import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuDropDown = ({ labelName }: any) => {
  return (
    <div className="text-white text-[24px] hover:text-[#11AD8E] flex items-center">
      {labelName}
      <RiArrowDropDownLine size={36} />
    </div>
  );
};

export default MenuDropDown;
