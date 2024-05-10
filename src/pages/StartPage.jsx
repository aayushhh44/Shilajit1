import React, { useRef } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import Navbar from "../components/Navbar";
import TawkMessengerReactUmd from "@tawk.to/tawk-messenger-react";

const StartPage = () => {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="h-full" id="main">
      <Navbar />
      <img
        className="h-screen w-full object-cover bg-black"
        src="https://image5.sixthtone.com/image/5/67/220.gif"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-60"></div>
      <div className="absolute top-1/4 inset-x-0 text-center">
        <h1 className="font-oswald font-bold uppercase text-4xl md:text-6xl text-[#d89a35]">
          Gurkha Shilajit
        </h1>
        <p className="text-white text-2xl font-poppins ">
          Boost your energy every day
        </p>
      </div>
      {/* <img className='absolute right-32 transform -rotate-45 bottom-20 w-32' src="https://pngimg.com/d/red_arrow_PNG16.png" alt="arrow" /> */}
      {/* <button className="absolute right-6 bottom-6 border m-2 bg-yellow-500 rounded-md border-black p-4 text-center animate-blink">
  BUY NOW!
</button> */}

      {/* <div
        className="absolute animate-bounce bottom-4 w-full flex justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <p className=" text-center uppercase text-white">
          Scroll down to see more
        </p>
        <FaLongArrowAltDown className="text-white ml-2" />
      </div> */}
    </div>
  );
};

export default StartPage;
