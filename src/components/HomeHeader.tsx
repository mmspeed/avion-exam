import React from "react";
import Image from "next/image";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";
import User from "../assets/user.png";

const HomeHeader = () => {
  return (
    <div>
      <div className="container mx-auto px-12 flex items-center justify-between min-h-14">
        <Image className="w-5" src={Search} alt="" />
        <h2 className="font-medium text-2xl">Avion</h2>
        <div className="flex items-center">
          <Image className="mx-2 w-5" src={Cart} alt="" />
          <Image className="mx-2 w-5" src={User} alt="" />
        </div>
      </div>
      <hr />
      <div className="categoriesMain text-gray-500 flex items-center justify-center my-4 mx-4">
        <h3 className="mx-4">Plant pots</h3>
        <h3 className="mx-4">Ceramics</h3>
        <h3 className="mx-4">Tables</h3>
        <h3 className="mx-4">Chairs</h3>
        <h3 className="mx-4">Crockery</h3>
        <h3 className="mx-4">Tableware</h3>
        <h3 className="mx-4">Cutlery</h3>
      </div>
    </div>
  );
};

export default HomeHeader;
