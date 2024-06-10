import "./App.css";
import React from "react";
import logo from "./assets/logo.png";
import { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ChooseNano from "./components/ChooseNano";
import SimpleSlider from "./components/Client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import proposition from "./assets/proposition.png";
import Contact from "./components/Contact";
import Ourblog from "./components/Ourblog";
import Footer from "./components/Footer";
import clip from "./assets/clip.png";
import CountUp from "react-countup";

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  if(toggleNav){
    document.body.classList.add("overflow-hidden");
  }else{
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <header className="text-gray-600 body-font mt-2">
        <div className="container !max-w-[1140px] mx-auto flex flex-wrap justify-between items-center">
          <a className="flex title-font font-medium items-center text-gray-900 md:mb-0 ">
            <img src={logo} alt="" />
          </a>
          <nav
            className={`md:mx-auto flex flex-col md:flex-row top-0 flex-wrap items-center text-base justify-center max-md:fixed max-md:gap-[40px]  bg-white max-md:h-screen max-md:w-screen ${
              toggleNav ? "left-0" : "-left-full"
            }`}
          >
            <a className="mr-5 font-normal text-base max-md:text-2xl text-[#000F02] cursor-pointer hover:text-[#00A015]">
              Home
            </a>
            <a className="mr-5 font-normal text-base max-md:text-2xl text-[#000F02] cursor-pointer hover:text-[#00A015]">
              {" "}
              About Us{" "}
            </a>
            <a className="mr-5 font-normal text-base max-md:text-2xl text-[#000F02] cursor-pointer hover:text-[#00A015]">
              Our Services
            </a>
            <a className="mr-5 font-normal text-base max-md:text-2xl text-[#000F02] cursor-pointer hover:text-[#00A015]">
              Testimonials{" "}
            </a>
            <a className="mr-5 font-normal text-base max-md:text-2xl text-[#000F02] cursor-pointer hover:text-[#00A015]">
              Contact Us{" "}
            </a>
          </nav>
          <button className="inline-flex items-center border focus:outline-none font-medium md:mt-0 button_green text-lg text-white max-md:!py-2 px-4">
            Book Now
          </button>

          <button
            onClick={() => setToggleNav(!toggleNav)}
            className="md:hidden text-black z-10"
          >
            <span>
              {toggleNav ? (
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Menu / Close_SM">
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="35px"
                  height="35px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                    fill="#000000"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </header>
      <div className="absolute top-[80%] -z-10">
        <img src={clip} alt="" />
      </div>

      {/* hero section */}
      <Hero />
      {/* counter section  */}

      <div className="container !max-w-[1140px] mx-auto py-12">
        <div className="flex flex-col md:flex-row justify-around items-center bg-white shadow-lg rounded-lg py-6 px-20">
          <div className="text-center md:border-r md:border-[#00A015] md:pr-20 mb-8 md:mb-0">
            <p className="font-medium text-5xl text-[#00A015]">
              <CountUp end={8.9} decimals={1} duration={2.5} suffix="%" />
            </p>
            <p className="font-normal text-base text-[#000F02]">
              Active Clients
            </p>
          </div>
          <div className="text-center md:border-r md:border-[#00A015] md:px-20 mb-8 md:mb-0">
            <p className="font-medium text-5xl text-[#00A015]">
              <CountUp end={150} duration={2.5} suffix="k" />
            </p>
            <p className="font-normal text-base text-[#000F02]">Reviews</p>
          </div>
          <div className="text-center md:pl-8">
            <p className="font-medium text-5xl text-[#00A015]">
              <CountUp end={10} duration={2.5} suffix="M+" />
            </p>
            <p className="font-normal text-base text-[#000F02]">Downloads</p>
          </div>
        </div>
      </div>
      {/* propostion section */}

      <section className="text-gray-600 body-font mt-4">
        <div className="container !max-w-[1140px] mx-auto flex md:flex-row flex-col items-center md:mt-[152px]">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="w-full" src={proposition} alt="" />
          </div>

          <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 p-3">
            <h1 className="title-font sm:text-4xl mb-4 text-[#000F02] font-bold xl:text-6xl lg:text-5xl">
              Unique Selling <span className="text-[#00A015]">Proposition</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              purus eleifend, sollicitudin tortor id, eleifend ante. Nam
              tincidunt ipsum pellentesque viverra facilisis. Suspendisse id
              lacus et mauris luctus lobortis. Curabitur libero nibh, dictum eu
              neque et, pharetra placerat diam. Ut vulputate magna et felis
              sodales facilisis. Praesent est arcu, egestas blandit tincidunt
              ac, gravida et quam.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white button_green max-md:!py-2 focus:outline-none text-lg font-medium">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* service section */}
      <Services />
      {/* choosenano section */}
      <ChooseNano />
      {/* slider section */}
      <SimpleSlider />
      {/* ourblog section */}
      <Ourblog />
      {/* contact section */}
      <Contact />
      {/* footer section */}
      <Footer />
    </>
  );
}

export default App;
