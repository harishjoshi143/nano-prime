import React from "react";
import heroimg from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font mt-4">
        <div className="container !max-w-[1140px] mx-auto flex md:flex-row flex-col-reverse items-center">
          <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
            <h1 className="title-font sm:text-4xl mb-4 text-[#000F02] font-bold xl:text-6xl lg:text-5xl">
              Your <span className="text-[#00a015]">One-Stop</span> Solution for
              Services
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              efficitur feugiat ultrices. Vivamus aliquet consequat tortor quis
              posuere. Nullam molestie vulputate dolor vel ultrices. Etiam ac
              justo arcu.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white button_green max-md:!py-2 focus:outline-none text-lg font-medium">
              Find Out More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="w-full" src={heroimg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
