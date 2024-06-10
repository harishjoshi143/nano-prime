import React from "react";
import earth from "../assets/earth.png";

export default function ContactUs() {
  return (
    <div className="bg-[#F1F1F1] flex items-center justify-center mt-[152px]">
      <div className="container !max-w-[1140px] rounded-lg p-6 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-6">
          <h1 className="font-semibold text-3xl mb-6 text-gray-800">
            Contact Us
          </h1>
          <form className="space-y-4">
            <div className="flex flex-col- lg:flex-row md:space-x-4">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <label className="block font-normal text-base text-[#000F02]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block font-normal text-base text-[#000F02]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>
            <div>
              <label className="block font-normal text-base text-[#000F02]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block font-normal text-base text-[#000F02]">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label className="block font-normal text-base text-[#000F02]">
                Message
              </label>
              <textarea
                placeholder="Your message"
                className="mt-1 p-2 w-full border rounded-md h-24"
              ></textarea>
            </div>
            <div>
              <button className="button_green text-white py-2 rounded-md transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={earth}
            alt="Contact Us"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
