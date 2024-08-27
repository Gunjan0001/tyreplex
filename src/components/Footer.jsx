import React from "react";
import facebook from "../assets/images/png/fb-icon.png";
import instagram from "../assets/images/png/insta-icon.png";
const Footer = () => {
  const getCurrentYear = new Date().getFullYear();
  return (
    <>
      <div className="max-w-[1320px] mx-auto px-6 my-8 border-b pb-8 border-gray-400">
        <div className="w-full flex flex-wrap    ">
          <div className="w-full sm:w-1/2 xl:w-1/3 lg:border-r-2 lg:px-4">
            <h2 className="font-bold lg:text-lg mt-5 lg:mt-0 ">CONTACT INFO</h2>
            <ul className="ps-0 mt-4 flex flex-col gap-3">
              <li className=" text-xs  md:text-base text-gray-600">
                <span className="text-base lg:text-lg me-2 text-black font-semibold">
                  Address:
                </span>
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </li>
              <li className=" text-xs  md:text-base text-gray-600">
                <span className=" text-base lg:text-lg me-2 text-black font-semibold">
                  Phone:
                </span>
                012-345-223
              </li>
              <li className=" text-xs md:text-base text-gray-600">
                <span className=" text-base lg:text-lg me-2 text-black font-semibold">
                  Email:
                </span>
                Tyreplex@gmail.com
              </li>
              <li className="flex ">
                <button className="border border-[#ed1c24] text-[#ed1c24] md:text-base  rounded-[3px] px-2 py-[6px] mt-4 lg:mt-7">
                  Get Directions
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3 lg:px-4">
            <div className="w-full flex ">
              <div className="w-1/2 lg:border-r-2 ">
                <h2 className="font-bold text-sm lg:text-lg mt-5 lg:mt-0 ">
                  PRODUCTS
                </h2>
                <ul className="ps-0 mt-4 flex flex-col gap-3 ">
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Prices Drop
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    New Products
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Best Sales
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Contact us
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Sitemap
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Stores
                  </li>
                </ul>
              </div>
              <div className="w-1/2 lg:border-r-2 px-4 ">
                <h2 className="font-bold text-sm lg:text-lg mt-5 lg:mt-0 ">
                  OUR COMPANY
                </h2>
                <ul className="ps-0 mt-4 flex flex-col gap-3  ">
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Delivery
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Terms and Conditions
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    About Us
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Secure Payment
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Shipping{" "}
                  </li>
                  <li className=" cursor-pointer hover:text-[#ed1c24] transition-all ease-out duration-300 text-xs md:text-base text-gray-600">
                    Stores
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/3  lg:px-4">
            <h2 className="font-bold lg:text-lg mt-7 xl:mt-0">NEWSLETTER </h2>
            <ul className="ps-0 mt-4 flex flex-col gap-3 ">
              <li className="text-xs md:text-base text-gray-600">
                Subscribe to our newsletters now and stay up to date with new
                collections and exclusive offers.
              </li>
              <li className="bg-white max-w-[300px] min-w-[270px] sm:min-w-[400px] flex items-center justify-between mt-3 text-[#130F26] rounded-[10px] shadow-[0px_1px_1px_#ffca28] border border-[#FFCA28] px-4 py-2">
                <input
                  className="w-full outline-none text-xs md:text-base"
                  type="text"
                  placeholder="Ask or search your question"
                />
                <button className="border text-xs border-[#ed1c24] px-2 rounded-sm text-[#ed1c24] py-1">
                  Send
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full sm:flex  items-center justify-center sm:justify-between max-w-[1320px] mx-auto px-6 pb-6">
        <div className="flex gap-3 items-center justify-center">
          <a
            className="min-w-[24px] max-w-[24px] min-h-[22px] max-h-[22px] object-cover"
            href="https://www.facebook.com/"
          >
            <img className="w-[15px] h-[22px]" src={facebook} alt="facebook" />
          </a>
          <a
            className="min-w-[24px] max-w-[24px] min-h-[22px] max-h-[22px] object-cover"
            href="https://www.instagram.com/"
          >
            <img
              className="w-[17px] h-[22px]"
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
        <p className="mb-0 px-4 mt-4 sm:mt-0 text-center text-xs md:text-base">
          ©{getCurrentYear}TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
