import React from "react";

const ThirdPage = () => {
  return (
    <div className="h-full p-8 mt-4 z-0">
      <div className="flex cursor-pointer flex-wrap gap-6 md:gap-8 lg:gap-6 justify-center xl:justify-between">
        <div className="flex transform transition-transform duration-300 hover:scale-105 flex-col gap-4 justify-center bg-[#f5f5f5] p-4 rounded-md">
          <h4 className="text-center text-2xl font-poppins font-light">
            1 Bottle - 30 days Supply
          </h4>
          <img
            className="m-2 w-72 md:w-96 "
            src="/assets/1 shilajit.png"
            alt="Shilajit Image"
          />
          <p className="text-center">
            <span className="font-bold">Price</span>: £ 30 per Bottle
          </p>
          <a href="https://buy.stripe.com/5kA14k050a3Q5bycMM" className="border transform hover:scale-110 m-2 bg-yellow-500 rounded-md border-black p-2 text-center">
            BUY NOW!
          </a>

          <p className="text-center text-green-600 text-3xl">
            <span className="font-bold">Total:</span>
            <span className="text-red-600 mx-4 line-through">£40</span>$30
          </p>
          <img
            className="mx-auto w-72"
            src="https://pronailcomplex24.com//statics/img/credit-cards.png"
            alt="Payments"
          />
        </div>

        <div className="flex transform transition-transform duration-300 bg-yellow-400 hover:scale-105 flex-col gap-4 justify-center bg-yellow-3  00 p-4 rounded-md">
          <h4 className="text-center text-2xl font-poppins font-light">
            4 Bottle - 120 days Supply
          </h4>
          <img
            className="m-2 w-72 md:w-96 "
            src="/assets/4 shilajit.png"
            alt="Shilajit Image"
          />
          <p className="text-center">
            <span className="font-bold">Price</span>: £ 25 per Bottle
          </p>
          <a href="https://buy.stripe.com/28o4gweZUek65byaEG" className="border transform hover:scale-110 m-2  bg-white rounded-md border-black p-2 text-center">
            BUY NOW!
          </a>

          <p className="text-center text-green-600 text-3xl">
            <span className="font-bold">Total:</span>
            <span className="text-red-600 mx-4 line-through">£ 120</span> £100
          </p>
          <img
            className="mx-auto w-72"
            src="https://pronailcomplex24.com//statics/img/credit-cards.png"
            alt="Payments"
          />
        </div>

        <div className="flex transform transition-transform duration-300 hover:scale-105 flex-col gap-4 justify-center bg-[#f5f5f5] p-4 rounded-md">
          <h4 className="text-center text-2xl font-poppins font-light">
            2 Bottle - 90 days Supply
          </h4>
          <img
            className="m-2 w-72 md:w-96 "
            src="/assets/2 shilajit.png"
            alt="Shilajit Image"
          />
          <p className="text-center">
            <span className="font-bold">Price</span>: £ 27.5 per Bottle
          </p>
          <a className="border m-2 transform hover:scale-110 bg-yellow-500 rounded-md border-black p-2 text-center" href="https://buy.stripe.com/aEU4gw5pkcbY9rO5kl">
            BUY NOW!
         
          </a>

          <p className="text-center text-green-600 text-3xl">
            <span className="font-bold">Total:</span>
            <span className="text-red-600 line-through mx-4">£60</span>£55
          </p>
          <img
            className="mx-auto w-72"
            src="https://pronailcomplex24.com//statics/img/credit-cards.png"
            alt="Payments"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
