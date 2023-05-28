import Link from "next/link";
import React, { FC } from "react";

const Button: FC<{ labelName: string; link: string }> = ({
  labelName,
  link,
}) => {
  return (
    <Link href={link}>
      <button className="bg-[#00616C] text-white text-lg font-medium px-8 py-4 rounded-full hover:shadow-lg hover:scale-110 duration-300">
        {labelName}
      </button>
    </Link>
  );
};

export default Button;
