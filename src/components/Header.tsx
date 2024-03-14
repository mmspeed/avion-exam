import React from "react";
import Image from "next/image";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";
import User from "../assets/user.png";
import FastDelivery from "./FastDelivery";

const Header = () => {
  return (
    <>
      <FastDelivery />
      <div className="flex items-center p-5 justify-between container mx-auto px-12">
        <h1 className="font-normal text-2xl">Avion</h1>
        <div className="flex items-center">
          <h3 className="font-normal text-base text-gray-500 mr-4">About us</h3>
          <h3 className="font-normal text-base text-gray-500 mr-4">Contact</h3>
          <h3 className="font-normal text-base text-gray-500 mr-10">Blog</h3>
          <div className="flex">
            <Image className="mr-3" src={Search} alt="" />
            <Image className="mr-3" src={Cart} alt="" />
            <Image className="mr-3" src={User} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
