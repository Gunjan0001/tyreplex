import React, { useState } from "react";
import tyre from "../../assets/images/png/tyre.png";
import { tyresArray } from "./Helper";
import { SearchIcon } from "./Icon";

const Tyres = () => {
  const [visibleItems, setVisibleItems] = useState(8);

  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  return (
    <div className="container max-w-[1320px] mx-auto px-6 mt-24">
      <div className="flex flex-col sm:flex-row justify-between">
        {" "}
        <h2 className="text-[#130F26] text-lg font-bold mb-4">
          Tyres sold by this Dealer
        </h2>
        {/* Filter Section */}
        <div className="flex flex-col sm:items-center justify-between mb-6 gap-5">
          <div className="flex items-center gap-3">
            <select className="border border-gray-300 rounded px-2 py-1 text-sm  sm:w-[200px]">
              <option>Filter By</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>

            <select className="border border-gray-300 rounded px-2 py-1 text-sm  sm:w-[200px]">
              <option>Most Popular</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>

            <a href="/" className="text-sm text-gray-500">
              Advanced
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="border border-gray-300 rounded px-2 py-1 text-sm">
              Car
            </button>
            <button className="border border-gray-300 rounded px-2 py-1 text-sm">
              Choose Brand
            </button>
            <button className="border border-gray-300 rounded px-2 py-1 text-sm">
              Choose Model
            </button>
            <button className="border border-gray-300 rounded px-2 py-1 text-sm">
              Choose Variant
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              <SearchIcon />
            </button>
          </div>{" "}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {tyresArray.slice(0, visibleItems).map((items, index) => {
          return (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 sm:px-3 pt-2"
            >
              <div className="border-0 mb-4 relative hover:shadow-2xl duration-300 shadow-md rounded-md bg-white overflow-hidden">
                <div className="flex items-end justify-end absolute end-0 top-0">
                  <p className="flex items-center justify-end bg-[#efe775] text-sm rounded-sm px-1 before:bg-contain before:bg-center before:mr-1 before:w-[13px] before:h-[16px] before:content-[''] before:bg-warranty">
                    {items.warrenty}
                  </p>
                </div>
                <img
                  className="absolute -bottom-3 -end-16"
                  src={tyre}
                  alt="tyre"
                />
                <h2 className="font-extrabold  text-[#372a74] text-3xl px-2">
                  {items.brand}
                </h2>
                <p className="text-[#130F26] px-2 text-md mt-1">
                  AMAZER 4G LIFE
                </p>
                <p className="text-[#130f268a] px-2 text-md py-3">
                  {items.vName}
                </p>
                <div className="flex items-center px-2 gap-3">
                  <div className="bg-[#4CA72C] text-white px-[5px] rounded-sm inline-flex items-center h-[15px]">
                    4
                  </div>
                  <p className="mb-0 text-xs text-[#130f268a]">321 Reviews</p>
                </div>
                <p className="text-[#130F26] mb-0 mt-2 px-2">₹ 3,136</p>
                <p className="text-[#4CA72C] text-[11px] mb-0 py-3 px-2">
                  Offer available
                </p>
                <p className="text-[#130f268a] text-xs mb-0 pb-4 px-2">
                  {items.tubeType}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        {visibleItems < tyresArray.length && (
          <button
            onClick={showMoreItems}
            className="font-normal text-base capitalize text-black/50 border border-black/50 rounded-md px-6 py-2.5 mt-4"
          >
            view more
          </button>
        )}
      </div>
    </div>
  );
};

export default Tyres;
