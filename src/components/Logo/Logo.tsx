import React from "react";
import logo from "../../assets/logo.png";
const Logo = () => {
  return (
    <>
      <div className="absolute mt-3 ml-7">
        <div className="flex ">
          <div className="items-center">
            <img src={logo} alt="DELIVERY" className="w-72" />
          </div>
          <div className="absolute mt-6 ml-10 font-serif">
            <p className="text-3xl font-extrabold text-white">Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
