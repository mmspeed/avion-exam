import React from "react";
import Delivery from "../assets/delivery.png";
import True from "../assets/true.png";
import Purchase from "../assets/purchase.png";
import Recycle from "../assets/recycle.png";
import Image from "next/image";

const Different = () => {
  return (
    <div>
      <div className="container mx-auto px-12 mb-20">
        <h2 className="text-center text-2xl font-normal mb-10">
          What makes our brand different
        </h2>
        <div className="differentCards flex justify-between">
          <div className="differentCard w-[23%]">
            <Image className="mb-3" src={Delivery} alt="" />
            <h3 className="font-normal text-xl mb-2">Next day as standard</h3>
            <p className="font-normal text-base">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="differentCard w-[23%]">
            <Image className="mb-3" src={True} alt="" />
            <h3 className="font-normal text-xl mb-2">Made by true artisans</h3>
            <p className="font-normal text-base">
              Handmade crafted goods made with passion and craftmanship
            </p>
          </div>
          <div className="differentCard w-[23%]">
            <Image className="mb-3" src={Purchase} alt="" />
            <h3 className="font-normal text-xl mb-2">Unbeatable prices</h3>
            <p className="font-normal text-base">
              For our materials and quality you find better prices anywhere
            </p>
          </div>
          <div className="differentCard w-[23%]">
            <Image className="mb-3" src={Recycle} alt="" />
            <h3 className="font-normal text-xl mb-2">Recycled packaging</h3>
            <p className="font-normal text-base">
              We use 100% recycled packaging to our footprint is manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
