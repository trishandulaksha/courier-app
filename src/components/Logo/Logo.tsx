import React from "react";
import logo from "../../assets/imges/logo.png";
const Logo = () => {
  return (
    <>
      <div className="mt-3 ml-2 lg:ml-7">
        <div className="flex ">
          <div className="items-center">
            <img src={logo} alt="DELIVERY" className="md:w-52 w-44 lg:w-72" />
          </div>
          <div className="absolute mt-3 ml-5 md:mt-6 md:ml-10 ">
            <p className="font-extrabold text-white sm:text-xl lg:text-3xl font-kode-mono">
              Delivery
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
