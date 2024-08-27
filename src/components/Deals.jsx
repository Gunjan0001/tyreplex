import React from "react";
import Slider from "react-slick";
import redlogo from "../assets/images/png/tyrelogo.png";
import pvcusLogo from "../assets/images/png/tyrelogo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deals = () => {
  const settingsToRight = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: "linear",
    variableWidth: true,
    pauseOnHover: true,
    rtl: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const settingsToLeft = {
    ...settingsToRight,
    rtl: true,
  };

  const logos = new Array(14).fill(redlogo);
  const pvcusLogos = new Array(14).fill(pvcusLogo);

  return (
    <div className="mx-2">
      <div className="max-w-full  mx-auto text-center shadow-md p-4 my-4  bg-white rounded-sm  ">
        <p className="text-3xl mb-4">Our Technology Partners</p>
        <div className="mb-8">
          <Slider {...settingsToRight} className="slider">
            {logos.map((logo, index) => (
              <div key={index} className="px-2">
                <img
                  src={logo}
                  alt={`partner-logo-${index}`}
                  className="mx-auto max-w-20 sm:max-w-24 md:max-w-28 lg:max-w-32"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Deals;
