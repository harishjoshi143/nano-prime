import React from "react";
import { serviceData } from "../components/Helper";

export default function Services() {
  return (
    <>
      <div className="bg-[#F1F1F1] md:mt-[152px] p-6 md:p-12 lg:p-[72px]">
        <h1 className="text-center font-medium sm:text-4xl lg:text-5xl xl:text-6xl ">
          Our Range of <span className="text-[#00A015]">Services</span>
        </h1>
        <div className="flex flex-wrap mt-8 md:mt-12 lg:mt-[52px]">
          {serviceData.card1.map((items, index) => {
            return (
              <>
                <div className="sm:w-1/2 lg:w-1/3 p-2">
                  <div className="border border-black/15 bg-[#F1F1F1] px-6 py-6 flex justify-center items-center   hover:border-transparent duration-300 hover:shadow-xl flex-col h-full">
                    {" "}
                    <span>
                      <svg
                        width="90"
                        height="90"
                        viewBox="0 0 90 90"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="90"
                          height="90"
                          rx="45"
                          fill="#00A015"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M51 43.5H49.5V33C49.5 30.51 47.49 28.5 45 28.5C42.51 28.5 40.5 30.51 40.5 33V43.5H39C34.86 43.5 31.5 46.86 31.5 51V58.5C31.5 60.15 32.85 61.5 34.5 61.5H55.5C57.15 61.5 58.5 60.15 58.5 58.5V51C58.5 46.86 55.14 43.5 51 43.5ZM55.5 58.5H52.5V54C52.5 53.175 51.825 52.5 51 52.5C50.175 52.5 49.5 53.175 49.5 54V58.5H46.5V54C46.5 53.175 45.825 52.5 45 52.5C44.175 52.5 43.5 53.175 43.5 54V58.5H40.5V54C40.5 53.175 39.825 52.5 39 52.5C38.175 52.5 37.5 53.175 37.5 54V58.5H34.5V51C34.5 48.525 36.525 46.5 39 46.5H51C53.475 46.5 55.5 48.525 55.5 51V58.5Z"
                          fill="#00A015"
                        />
                      </svg>
                    </span>
                    <h2>{items.work}</h2>
                    <p className="text-center">{items.about}</p>{" "}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
