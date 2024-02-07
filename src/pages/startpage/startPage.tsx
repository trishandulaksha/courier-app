import React from "react";
import courierman from "../../assets/courierman.png";
import Logo from "../../components/Logo/Logo";

const StartPage = () => {
  return (
    <>
      {/* BODY CONTENT OF THE START SCREEN */}
      <div className="items-center  h-screen mt-auto mb-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        {/* LOGO COMPONENT */}
        <div>
          <Logo />
        </div>
        <div className="flex items-center h-full md:px-48 p-7 ">
          <div className="md:w-65 content item-center ">
            <h1 className="text-3xl font-extrabold text-justify text-white lg:text-6xl">
              The Best Ever Courier Service In The World.
            </h1>
            <p className="mt-10 text-base text-justify lg:mt-24 lg:text-xl text-gray-300s">
              Deliver fastest across 25000+ pin codes in world with real time
              shipment tracking feature. Get best international courier
              services. we are the best courier service provider in world.Get
              best international.courier services at zero subscription fees
            </p>
            <div>
              <button className="px-10 py-3 mt-5 ml-10 font-semibold text-white rounded-lg lg:mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:cursor-pointer hover:rounded-2xl hover:font-extrabold">
                Start Now
              </button>
            </div>
          </div>
          <div className="hidden md:w-35 image md:block">
            <img
              src={courierman}
              alt="couriermanimage"
              className="lg:w-[1080px] lg:h-[580px] md:w-[1080px] md:h-[380px] ml-7  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartPage;
