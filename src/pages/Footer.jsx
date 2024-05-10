import React from "react";

const Footer = () => {
  return (
    <div className="bg-black  text-white flex flex-col gap-12 sm:gap-0 sm:flex-row justify-between p-8 md:p-12 items-center">
      <div>
        <h1 className="uppercase text-yellow-600 text-sm font-poppins">
          Gurkha Shilajit
        </h1>
        <p className="text-gray-400 text-sm font-poppins">
          Directly from the Himalayans of Nepal
        </p>
        <img className="w-56" src="/assets/LOGOOOOO.png" alt="" />
      </div>

      <div className="flex flex-col justify-start gap-6">
        <h3 className="text-sm font-poppins">NEPAL</h3>

        <p className="text-sm font-poppins text-gray-400">
          aayushpoudel59@gmail.com
        </p>

        <p className="text-sm font-poppins text-gray-400">+9779843249388</p>
        <p className="text-sm font-poppins text-gray-400">
          Anamnagar-4, Kathmandu, Nepal
        </p>
      </div>

      <div className="flex text-nowrap flex-row gap-1 sm:flex-col items-center mr-4 justify-center">
        <h3 className="text-xs text-nowrap uppercase mx-6 sm:mx-0">Quick Links</h3>
        <br />
        <a
          href="#main"
          className="text-xs sm:text-sm cursor-pointer text-gray-400 hover:text-red-600"
        >
          Home
        </a>
        <a
          href="#product"
          className="text-xs sm:text-sm cursor-pointer text-gray-400 hover:text-red-600"
        >
          Our Product
        </a>
        <a
          href="#faqs"
          className="text-xs sm:text-sm cursor-pointer text-gray-400 hover:text-red-600"
        >
          FAQs
        </a>
        <a
          href="#reviews"
          className="text-xs sm:text-sm cursor-pointer text-gray-400 hover:text-red-600"
        >
          Reviews
        </a>
        <a
          href="#buy-now"
          className="text-xs sm:tex-sm cursor-pointer text-gray-400 hover:text-red-600"
        >
          Buy now
        </a>
      </div>
    </div>
  );
};

export default Footer;
