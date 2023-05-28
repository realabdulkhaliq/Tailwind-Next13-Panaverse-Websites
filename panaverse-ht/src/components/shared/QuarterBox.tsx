import React, { FC } from "react";

// interface IProps {
//   quarter: string; desc: string; num: number
// }

const QuarterBox: FC<{
  quarter: string;
  description: string;
  number: number;
  haveBorder?: boolean;
}> = ({ quarter, description, number, haveBorder = true }) => {
  return (
    <div
      className={`rounded-md relative flex flex-col flex-1 justify-center py-24 px-8 ${
        haveBorder && "border"
      }`}
    >
      {/* Insted of w-full md:w-4/12 we use flex-1 */}
      <h4 className="text-lg font-bold">{quarter}</h4>
      <p className="mt-2">{description}</p>
      <span className="absolute -top-10 right-10 text-[204px] font-bold -z-10 text-gray-200">
        {number}
      </span>
    </div>
  );
};

export default QuarterBox;
