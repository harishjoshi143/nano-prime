import React from "react";
import { serviceData } from "../components/Helper";

export default function ChooseNano() {
  return (
    <div className="container mx-auto max-w-[1140px] px-4">
      <div className="flex flex-wrap mt-[52px] md:mt-[152px]">
        <div className="w-full lg:w-1/2 mb-6 md:mb-0">
          <h1 className="font-medium text-3xl md:text-5xl">
            Why Choose
            <span className="text-[#00A015]"> Namo Prime services</span>
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="font-normal text-base text-[#000F02]">
            At Namo Prime, we pride ourselves on delivering unparalleled
            services that go beyond the ordinary. Choosing us means choosing
            excellence, reliability, and a commitment to your satisfaction.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-[52px]">
        {serviceData.second_card.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 p-3">
            <div className="p-4 border hover:shadow-xl rounded-lg duration-300  h-full">
              <div className="flex">
                <span className="flex-shrink-0">
                  <img
                    className="w-16 h-16 object-cover"
                    src={item.img}
                    alt=""
                  />
                </span>
                <div className="ml-4">
                  <h2 className="font-medium text-lg md:text-xl">
                    {item.heding}
                  </h2>
                  <p className="font-normal text-sm md:text-base">
                    Book services at your fingertips through our user-friendly
                    app. We bring the experts to you, saving you time and
                    effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
