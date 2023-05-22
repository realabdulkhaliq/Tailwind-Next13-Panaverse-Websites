import Image from "next/image";
import joinBg from "@/assets/images/joinus/JoinBg.svg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import JoinUSCard from "@/components/cards/JoinUSCard";
import Person from "@/assets/images/icons/Person.svg";
import Economy from "@/assets/images/icons/Economy.svg";
import Progress from "@/assets/images/icons/Progress.svg";
import WorkingMan from "@/assets/images/icons/WorkingMan.svg";

export default function JoinSec() {
  return (
    <div className="relative flex">
      <Image src={joinBg} alt="" className="absolute -z-10" />
      <div className="basis-1/2">
        <div className="text-[#11AD8E] text-5xl font-bold ml-[194px] mt-[64px] absolute">
          Why to join
        </div>
        <div className="absolute w-[517px] mt-[168px] ml-[120px] text-2xl ">
          <ul className="list-disc text-2xl leading-10">
            <li>
              Own products (Full-Stack App Templates, AR and VR Experiences, and
              APIs).
            </li>
            <li>
              Offer services at a rate of $50 per hour ($96,000 per year).
            </li>
            <li>Fantastic opportunity to better their financial situation.</li>
            <li>Boost economy by expanding software exports.</li>
          </ul>
        </div>
        <div className="absolute mt-[524px] ml-[155px]">
          <PrimaryButton labelName="Join Now" link="/" />
        </div>
      </div>
      <div className="basis-1/2 flex space-x-11">
        <div className="mt-[64px] space-y-11">
          <JoinUSCard title="Product Owner" img={Person} />
          <JoinUSCard title="Access to Global Market" img={Economy} />
        </div>
        <div className="mt-[105px] space-y-11">
          <JoinUSCard title="Freelance" img={WorkingMan} />
          <JoinUSCard title="Boost Economy" img={Progress} />
        </div>
      </div>
    </div>
  );
}
