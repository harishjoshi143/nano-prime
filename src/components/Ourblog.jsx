import React from "react";
import image from "../assets/Image.png";
import girl from "../assets/girl.png";

export default function Ourblog() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mt-[152px]">
          <h1 className="font-medium text-5xl text-[#161616] text-center">
            Our Blog
          </h1>
          <div className="flex flex-col lg:flex-row mt-[52px] gap-6">
            <div className="lg:w-1/2 w-full">
              <div>
                <img className="w-full" src={image} alt="Main blog post" />
              </div>
              <p className="font-normal text-sm text-[#00A015] mt-8">
                27 Jan 2023
              </p>
              <h2 className="font-medium text-[#161616] text-2xl mt-2">
                Nullam viverra nunc sit amet libero rutrum,
              </h2>
              <p className="text-[#85888C] font-normal text-base mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                ac nibh in ex consectetur pellentesque ac porttitor ipsum. Ut
                iaculis lectus quis feugiat rutrum. Sed non venenatis est.
                Praesent tortor leo,
              </p>
              <button className="inline-flex mt-6 text-white button_green bg-[#00A015] py-2 px-4 focus:outline-none text-lg font-medium">
                Read more
              </button>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-5">
              <div className="flex flex-col md:flex-row">
                <img className="w-full md:w-1/2" src={girl} alt="Blog post thumbnail" />
                <div className="md:ml-6 mt-4 md:mt-0">
                  <p className="font-normal text-sm text-[#00A015]">
                    19 Jan 2022
                  </p>
                  <h2 className="font-medium text-[#161616] text-xl mt-2">
                    Vivamus non tellus vel est dictum aliquam
                  </h2>
                  <p className="text-[#85888C] font-normal text-base mt-4">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get...
                  </p>
                  <button className="text-[#00A015] font-medium text-lg mt-4">
                    Read more...
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <img className="w-full md:w-1/2" src={girl} alt="Blog post thumbnail" />
                <div className="md:ml-6 mt-4 md:mt-0">
                  <p className="font-normal text-sm text-[#00A015]">
                    19 Jan 2022
                  </p>
                  <h2 className="font-medium text-[#161616] text-xl mt-2">
                    Vivamus non tellus vel est dictum aliquam
                  </h2>
                  <p className="text-[#85888C] font-normal text-base mt-4">
                    Linear helps streamline software projects, sprints, tasks,
                    and bug tracking. Here’s how to get...
                  </p>
                  <button className="text-[#00A015] font-medium text-lg mt-4">
                    Read more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
