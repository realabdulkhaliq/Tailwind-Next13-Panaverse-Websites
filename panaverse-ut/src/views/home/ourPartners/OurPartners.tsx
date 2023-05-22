import Partner from "@/assets/images/partner/Partner.svg";
import Image from "next/image";

export default function OurPartners() {
  return (
    <div>
      <div className="m-[124px]">
        <h1 className="text-[#11AD8E] text-5xl font-bold text-center">
          Our Partners
        </h1>
      </div>
      <div className="my-[74px] bg-[#09121d] h-[148px] shadow-lg shadow-[#11AD8E]">
        <Image src={Partner} alt="Partners" className="m-auto" />
      </div>
    </div>
  );
}
