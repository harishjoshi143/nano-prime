import React from "react";
import comma from "../assets/comma.png";
import stars from "../assets/stars.png";
import { serviceData } from "../components/Helper";
import Slider from "react-slick";

export default function Client() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-[#F1F1F1] md:mt-[152px] p-7 md:p-12 lg:p-[72px]">
        <h1 className="text-center font-medium sm:text-4xl lg:text-5xl xl:text-6xl ">
          Our <span className="text-[#00A015]">Clients</span> Say
        </h1>
        <div className="">
          <Slider {...settings}>
            {serviceData.Card3.map((item, index) => {
              return (
                <div className="px-2">
                  {" "}
                  <div key={index} className="card_client mt-[52px]">
                    <div className="flex justify-between items-center mx-3">
                      <div className="flex items-center">
                        <span>
                          <img src={item.img} alt="" />
                        </span>
                        <p className="font-medium text-base ml-3 text-[#161616]">
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <img src={comma} alt="" />
                      </div>
                    </div>
                    <p className="mt-2 font-normal text-xs text-[#85888C]">
                      {item.title}
                    </p>
                    <img src={stars} alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
