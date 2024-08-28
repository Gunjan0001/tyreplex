import React from "react";
import { MainData } from "./Common/Helper";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="max-w-full mx-auto text-center relative">
      <Slider {...settings}>
        {MainData.map((item, index) => (
          <div key={index} className="relative">
            <div
              className="flex items-center justify-end bg-cover bg-center h-screen p-4 relative"
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 xl:hidden"></div>
              
              <div className="text-start  mx-4 relative z-10  max-w-[500px]">
                <p className="mb-0 mt-3 text-white text-md sm:text-xl">{item.para}</p>
                <h2 className="font-bold mb-0 mt-3 text-xl  sm:text-5xl text-white max-w-[500px]">
                  {item.heading}
                </h2>
                <button className="bg-[#ed1c24] text-md mt-10 text-white rounded-[3px] px-4 py-2">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
