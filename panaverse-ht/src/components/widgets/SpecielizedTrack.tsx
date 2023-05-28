"use client";
import { SpecielizedData, SpecielizedTrackInfo } from "@/assets/data/database";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
import QuarterBox from "../shared/QuarterBox";
import Image from "next/image";
import { useState } from "react";

const SpecielizedTrack = () => {
  const [selectedItem, setselectedItem] = useState("wmd");
  const selectedItemData = SpecielizedData.find(
    (item) => item.slug === selectedItem
  );

  return (
    <section className="my-44">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h2 className="text-[38px] sm:text-[40px] font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="text-xl">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-14 flex flex-col-reverse lg:flex-row gap-14">
          {/* Left Content */}
          <div className="shadow-xl self-start sticky top-32 rounded-xl border border-[#00616C] px-12 py-11 basis-8/12">
            <h4 className="text-primary text-xl font-medium">
              Specialized Program
            </h4>
            <h3 className="text-xl sm:text-2xl font-bold mt-2">
              {selectedItemData?.header}
            </h3>
            <p className="text-xl mt-2">{selectedItemData?.description}</p>
            <div className="mt-9">
              <Link
                href={""}
                className="underline text-primary text-xl flex gap-x-2 items-center"
              >
                Learn More
                <svg
                  className="-mb-2"
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                    stroke="#00616C"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-32">
              {selectedItemData?.quartars.map((item) => (
                <QuarterBox
                  key={item.header}
                  description={item.description}
                  quarter={item.header}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>
          {/* Right Content */}
          <div className="px-4 py-6 space-y-6 basis-4/12 self-start">
            {SpecielizedData.map((data) => (
              <div
                onClick={(item) => setselectedItem(data.slug)}
                key={data.slug}
              >
                <div className="flex gap-x-4 items-center cursor-pointer">
                  <div className="flex-shrink-0 h-24 w-36">
                    {/* This div is to resolve image issues */}
                    <Image
                      src={data.image}
                      alt={data.header}
                      className="h-24 object-cover rounded-md"
                    />
                  </div>

                  <div className="">
                    <h4 className="text-primary font-medium">
                      Specialized Program
                    </h4>
                    <h3 className="text-xl font-semibold">{data.header}</h3>
                  </div>
                </div>
                <div className="underline w-full border mt-4 bg-[#DEE1E6]"></div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecielizedTrack;
