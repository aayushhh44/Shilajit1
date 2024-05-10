import TawkMessengerReactUmd from "@tawk.to/tawk-messenger-react";
import React from "react";
import { FaLeaf } from "react-icons/fa6";

const SecondPage = () => {
  return (
    <div className="h-full p-4" id="product">
      <TawkMessengerReactUmd
        className=""
        propertyId="663c85cf9a809f19fb2eedf7"
        widgetId="1hte6ld0r"
      />
      <p className="animate-blink1 p-2 font-poppins sticky top-16 w-auto text-center mx-auto bg-green-600">
        1 to 3 days shipping all over the UK
      </p>
      <div className="p-8 xl:p-28">
        <h2 className="text-center uppercase p-2 font-rubik text-gray-600 md:tex-2xl">
          Experience the Himalayan magic in every drop of our Shilajit –
          straight from Nepal's heart to yours
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center p-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold">
              GURKHA SHILAJIT
            </h1>
            <p className="font-poppins text-red-700">(Pure Nepali Product)</p>

            <div className="p-4">
              <ul className="md:text-2xl text-gray-600">
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-nowrap">
                    Boosts libido and sexual performance
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-nowrap">Reduces stress and anxiety</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-wrap">Strengthens the immune system</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-wrap">Slows down the aging process</p>
                </div>
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-wrap">
                    Supports bone density and joint health
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-wrap">
                    Aids digestion and promotes gut health
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <FaLeaf />
                  <p className="text-wrap">
                    Supports male fertility and reproductive function
                  </p>
                </div>
              </ul>
            </div>
          </div>

          <div className="text-center w-full md:w-96 mt-4 md:mt-20">
            <img
              className=" w-96 h-full mx-auto"
              src="https://gurkhaherbs.com/wp-content/uploads/2024/01/shiljit-package.webp"
              alt="Shilajit Image"
            />
            <p className="text-center w-66 md:w-96 bg-red-400 mx-auto font-oswald cursor-pointer bg-gradient-to-r mt-4 p-2 text-white from-black via-[#d89a35] to-black rounded-r-lg">
              Pure, potent, and proudly Nepali
            </p>

            <a href="https://buy.stripe.com/5kA14k050a3Q5bycMM">
              <button className="text-center border m-2 mt-12 bg-yellow-500 rounded-md border-black p-4 animate-blink">
                BUY NOW!
              </button>
            </a>
          </div>
        </div>

        {/* Authorized */}

        <div className="flex p-6 gap-2 justify-center xl:gap-60 flex-wrap">
          <img
            className="w-16 sm:w-32 object-contain"
            src="https://t4.ftcdn.net/jpg/03/50/85/71/360_F_350857109_Nh168Z8p8LFQMIwy68CLmvxJxP1s2ZIF.jpg"
            alt=""
          />
          <img
            className="w-16 sm:w-32 object-contain"
            src="https://www.pngkey.com/png/full/42-424511_organic-dietary-label-stamps-postage-stamp.png"
            alt=""
          />
          <img
            className="w-16 sm:w-32 object-contain"
            src="https://t3.ftcdn.net/jpg/03/28/10/72/360_F_328107212_BRthwiB6IVH3uOMmW8zDyQJrM8SBQTAS.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
