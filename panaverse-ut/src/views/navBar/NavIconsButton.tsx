"use client";

import { BiBell, BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

const NavIconsButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  let currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="text-white text-3xl flex space-x-7">
      <BiBell />
      <p className="-mt-1">|</p>
      {/* -mt-1 give margin in negative */}

      {currentTheme == "dark" ? (
        <BiSun onClick={() => setTheme("light")} />
      ) : (
        <BiMoon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default NavIconsButton;
