import Image from "next/image";
import React from "react";
import logo from "@/assets/images/Logo.svg";
import MenuItems from "@/components/navBar/MenuItems";
import MenuDeopDown from "@/components/navBar/MenuDeopDown";
import NavIconsButton from "./NavIconsButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const NavBar = () => {
  return (
    <div className="grid grid-cols-4 bg-black opacity-70 sticky top-0">
      <div className="ml-[87px] my-[24px]">
        <Image src={logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-x-10 col-span-2">
        <MenuItems labelName="Home" link="/" />
        <MenuItems labelName="About" link="/" />
        <MenuDeopDown labelName="Courses" />
        <MenuItems labelName="Contact" link="/" />
      </div>
      <div className="flex items-center space-x-10">
        <NavIconsButton />
        <PrimaryButton labelName="Apply Now" link="/" />
      </div>
    </div>
  );
};

export default NavBar;
