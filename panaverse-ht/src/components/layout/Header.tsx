import Image from "next/image";
import Link from "next/link";
import Logo from "/public/Logo.svg";
import Wrapper from "@/components/shared/Wrapper";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <Wrapper>
        <div className="flex justify-between py-6  items-center">
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link href={"/"}>Home</Link>{" "}
            </li>
            <li>
              <Link href={"/cources"}>Cources</Link>{" "}
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};
