import React from "react";
import { ServiceData } from "./Common/Helper";

const Services = () => {
  return (
    <div className="mx-2">
      <div className="max-w-full mx-auto text-center shadow-md p-4 my-4 bg-white rounded-sm">
        <p className="text-start font-bold mb-0">
          Services offered by this dealer
        </p>
        <div className="flex flex-wrap gap-3">
          {ServiceData.map((item, index) => (
            <div
              key={index}
              className="flex min-w-[227px] min-h-[97px] max-w-[227px] max-w-sm:mx-auto  py-5 flex-col justify-center items-center service shadow-xl my-4 bg-white border   rounded-md hover_cards transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img src={item.image} alt="service" />
              <p className="text-start font-bold mb-0 mt-3">{item.para}</p>
              <button className="bg-[#ed1c24] text-sm text-white rounded-[3px] px-2 py-[6px] mt-7">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
