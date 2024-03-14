import React from "react";
import Image from "next/image";
import Furn from "../assets/furn.png";

const ChangeCountry = () => {
  return (
    <div>
      <div className="container mx-auto px-12 mt-20 flex justify-between">
        <div className="mt-20 w-[45%]">
          <h1 className="font-normal text-2xl mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="mb-6">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="mb-40">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <button className="border p-4">Get in touch</button>
        </div>
        <Image src={Furn} alt="" />
      </div>
    </div>
  );
};

export default ChangeCountry;
