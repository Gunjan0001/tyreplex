import React from "react";
import { ServiceData } from "./Common/Helper";
import Slider from "react-slick";

const Services = () => {
  const settings = {
    infinite: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite:true,
    autoplay: true, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 500 ,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1320px] mx-auto px-6">
      <div className="max-w-full mx-auto text-center shadow-md p-4 my-4 bg-white rounded-sm">
        <p className="text-start font-bold mb-0">
          Services offered by this dealer
        </p>
        <Slider {...settings}>
          {ServiceData.map((item, index) => (
              <div
              key={index}
              className="flex min-w-[227px] min-h-[97px] max-w-[227px] mx-auto py-5 flex-col justify-center items-center service shadow-xl my-4 bg-white border rounded-md hover_cards transition-all ease-in-out duration-300 cursor-pointer"
            >
              <div className="flex flex-col justify-center">
                <img src={item.image} alt="service" />
                <p className="text-start font-bold mb-0 mt-3">{item.para}</p>
                <button className="bg-[#ed1c24] text-sm text-white rounded-[3px] px-2 py-[6px] mt-7">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
