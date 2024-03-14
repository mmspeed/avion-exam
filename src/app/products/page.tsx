import React from "react";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import Chair from "../../assets/chair.png";
import Vase from "../../assets/vase.png";
import Vasee from "../../assets/vasee.png";
import Lamp from "../../assets/lamp.png";
import Chir from "../../assets/chir.png";
import PChair from "../../assets/pchair.png";
import Lamps from "../../assets/lamps.png";
import Cup from "../../assets/cup.png";
import Stul from "../../assets/stul.png";

const Products = () => {
  return (
    <div>
      <HomeHeader />
      <div className="bg-gray-700 container mx-auto px-12">
        <h2 className="text-white font-normal text-4xl pt-8 pb-8">
          All products
        </h2>
      </div>
      <div className="container mx-auto px-12 flex justify-between mt-10">
        <div className="">
          <h3 className="font-normal text-base mb-2">Product type</h3>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              Furniture
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              Homeware
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              Sofas
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              Homeware
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              Light fittings
            </label>
          </div>
          <div className="mb-8">
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              Accesories
            </label>
          </div>
          <h3 className="font-normal text-base mb-2">Price</h3>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              0 - 100
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              101 - 250
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label className="ml-2 mb-10" htmlFor="">
              250 +
            </label>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <div className="mx-2">
              <Image src={Chair} alt="" />
              <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
              <p className="font-normal text-lg mb-6">£250</p>
            </div>
            <div className="mx-2">
              <Image src={Vase} alt="" />
              <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
              <p className="font-normal text-lg mb-6">£155</p>
            </div>
            <div className="mx-2">
              <Image src={PChair} alt="" />
              <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
              <p className="font-normal text-lg mb-6">£125</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mx-2">
              <Image src={Vasee} alt="" />
              <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
              <p className="font-normal text-lg mb-6">£250</p>
            </div>
            <div className="mx-2">
              <Image src={Lamp} alt="" />
              <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
              <p className="font-normal text-lg mb-6">£155</p>
            </div>
            <div className="mx-2">
              <Image src={Chir} alt="" />
              <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
              <p className="font-normal text-lg mb-6">£125</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="mx-2">
              <Image src={Lamps} alt="" />
              <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
              <p className="font-normal text-lg mb-6">£250</p>
            </div>
            <div className="mx-2">
              <Image src={Cup} alt="" />
              <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
              <p className="font-normal text-lg mb-6">£155</p>
            </div>
            <div className="mx-2">
              <Image src={Stul} alt="" />
              <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
              <p className="font-normal text-lg mb-6">£125</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="border p-4 mb-20">Load more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
