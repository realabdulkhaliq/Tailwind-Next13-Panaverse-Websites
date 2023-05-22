import Image from "next/image";
import logo from "@/assets/images/Logo.svg";
import MenuItems from "@/components/navBar/MenuItems";
import MenuDropDown from "@/components/navBar/MenuDropDown";
import NavIconsButton from "./NavIconsButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default function DesktopNav() {
  return (
    <div className="grid grid-cols-4 bg-gray-700 opacity-70 sticky top-0">
      <div className="ml-[87px] my-[24px]">
        <Image alt="panaverseLogo" src={logo}></Image>
      </div>
      <div className="flex col-span-2 items-center space-x-10">
        <MenuItems labelName="Home" link="/"></MenuItems>
        <MenuItems labelName="About" link="/"></MenuItems>
        <MenuDropDown labelName="Courses"></MenuDropDown>
        <MenuItems labelName="Contact" link="/"></MenuItems>
      </div>
      <div className="flex items-center space-x-10">
        <NavIconsButton></NavIconsButton>
        <PrimaryButton labelName="Apply Now" link="/"></PrimaryButton>
      </div>
    </div>
  );
}
