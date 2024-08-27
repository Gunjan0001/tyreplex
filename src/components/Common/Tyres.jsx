import React from "react";
import tyre from "../../assets/images/png/tyre.png"
const Tyres = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="flex flex-wrap">
        <div className="border-0 mb-4 relative shadow-md rounded-md bg-white w-1/4 overflow-hidden">
          <div className="flex items-end justify-end absolute end-0 top-0">
            <p className="flex items-center justify-end bg-[#efe775] text-sm rounded-sm px-1 before:bg-contain before:bg-center before:mr-1 before:w-[13px] before:h-[16px] before:content-[''] before:bg-warranty">
              5 Year Warranty
            </p>
          </div>
          <img className="absolute -bottom-3 -end-16" src={tyre} alt="tyre" />
          <h2 className="font-extrabold  text-[#372a74] text-3xl px-2">
            apollo
          </h2>
          <p className="text-[#130F26] px-2 text-md mt-1">AMAZER 4G LIFE</p>
          <p className="text-[#130f268a] px-2 text-md py-3">145/80 R12</p>
          <div className="flex items-center px-2 gap-3">
            <div className="bg-[#4CA72C]  text-white px-[5px] rounded-sm inline-flex items-center h-[15px]">4</div>
            <p className="mb-0 text-xs text-[#130f268a]">321 Reviews </p>
          </div>
          <p className="text-[#130F26] mb-0 mt-2 px-2">₹ 3,136 </p>
          <p className="text-[#4CA72C] text-[11px] mb-0 py-3 px-2">Offer available</p>
          <p className="text-[#130f268a] text-xs mb-0 pb-4 px-2"> Tube Type </p>
        </div>
      </div>
    </div>
  );
};

export default Tyres;
