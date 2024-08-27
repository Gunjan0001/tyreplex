import React from "react";
import facebook from "../assets/images/png/fb-icon.png"
import instagram from "../assets/images/png/insta-icon.png"
const Footer = () => {
  return (
    <>
      <div className="mx-2 my-8 border-b pb-8 border-gray-400">
        <div className="w-full flex flex-wrap justify-center    ">
          <div className="w-full sm:w-1/2 xl:w-1/3 lg:border-r-2 px-4">
            <h2 className="font-bold lg:text-xl mt-5 lg:mt-0 text-center lg:text-start">CONTACT INFO</h2>
            <ul className="ps-0 mt-4 flex flex-col gap-3">
              <li className=" cursor-pointer text-center lg:text-start text-md text-gray-600">
                <span className="text-lg me-2 text-black font-semibold">
                  Address:
                </span>
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </li>
              <li className=" cursor-pointer text-center lg:text-start text-md text-gray-600">
                <span className="text-lg me-2 text-black font-semibold">
                  Phone:
                </span>
                012-345-223
              </li>
              <li className=" cursor-pointer text-center lg:text-start text-md text-gray-600">
                <span className="text-lg me-2 text-black font-semibold">
                  Email:
                </span>
                Tyreplex@gmail.com
              </li>
              <li className="flex justify-center items-center lg:justify-start">
                <button className="border border-[#ed1c24] text-[#ed1c24] text-md  rounded-[3px] px-2 py-[6px] mt-4 lg:mt-7">
                  Get Directions
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3 px-4">
            <div className="w-full flex ">
              <div className="w-1/2 lg:border-r-2 ">
                <h2 className="font-bold lg:text-xl mt-5 lg:mt-0 mx-16 lg:mx-0">PRODUCTS</h2>
                <ul className="ps-0 mt-4 flex flex-col gap-3 mx-16 lg:mx-0">
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Prices Drop
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    New Products
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Best Sales
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Contact us
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Sitemap
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Stores
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:border-r-2 px-4 ">
                <h2 className="font-bold lg:text-xl mt-5 lg:mt-0 mx-16 lg:mx-0">OUR COMPANY</h2>
                <ul className="ps-0 mt-4 flex flex-col gap-3  mx-16 lg:mx-0">
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Delivery
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Terms and Conditions
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    About Us
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Secure Payment
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Shipping{" "}
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-md text-gray-600">
                    Stores
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3  px-4">
            <h2 className="font-bold lg:text-xl mt-5 lg:mt-0">NEWSLETTER </h2>
            <ul className="ps-0 mt-4 flex flex-col gap-3 ">
              <li className=" text-md text-gray-600">
                Subscribe to our newsletters now and stay up to date with new
                collections and exclusive offers.
              </li>
              <li className="bg-white max-w-[300px] mx-auto min-w-[270px] sm:min-w-[400px] flex items-center justify-between mt-3 text-[#130F26] rounded-[10px] shadow-[0px_1px_1px_#ffca28] border border-[#FFCA28] px-4 py-2">
                <input
                  className="w-full outline-none"
                  type="text"
                  placeholder="Ask or search your question"
                />
                <button className="border border-[#ed1c24] px-2 rounded-sm text-[#ed1c24] py-1">
                  Send
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mx-2 pb-6">
        <div className="flex gap-3 items-center">
          <a className="min-w-[24px] max-w-[24px] min-h-[22px] max-h-[22px] object-cover" href="https://www.facebook.com/"><img className="w-[15px] h-[22px]" src={facebook} alt="facebook" /></a>
          <a className="min-w-[24px] max-w-[24px] min-h-[22px] max-h-[22px] object-cover" href="https://www.instagram.com/"><img className="w-[15px] h-[22px]" src={instagram} alt="instagram" /></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
