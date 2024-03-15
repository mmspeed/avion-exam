import React from "react";
import Header from "@/components/Header";
import JoinInput from "@/components/JoinInput";
import Different from "@/components/Different";
import Image from "next/image";
import ListChair from "../../assets/listchair.png";
import Chair from "../../assets/chair.png";
import Vase from "../../assets/vase.png";
import Vasee from "../../assets/vasee.png";
import Lamp from "../../assets/lamp.png";

const ProductsListing = () => {
  return (
    <div>
      <Header />
      <div className="soloInfo container mx-auto px-12 flex items-center">
        <Image className="soloImg w-[100%]" src={ListChair} alt="" />
        <div className="info ml-20">
          <h1 className="text-4xl font-normal mb-2">The Dandy Chair</h1>
          <h3 className="text-2xl font-normal mb-8">£250</h3>
          <h4 className="text-base font-normal mb-3">Description</h4>
          <p className="text-base font-normal text-gray-500 mb-2">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul className="text-gray-500 mb-10">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
          <h4 className="text-base font-normal mb-3">Dimensions</h4>
          <div className="raz flex items-center">
            <div className="mr-8">
              <p className="mb-1">Height</p>
              <p>110cm</p>
            </div>
            <div className="mr-8">
              <p className="mb-1">Width</p>
              <p>75cm</p>
            </div>
            <div>
              <p className="mb-1">Depth</p>
              <p>50cm</p>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <div className="flex items-center">
              <h4 className="text-base font-normal mr-3">Amount:</h4>
              <button className="px-3 border">-</button>
              <p className="mx-2">1</p>
              <button className="px-3 border">+</button>
            </div>
            <button className="py-3 cursor-pointer px-5 bg-blue-950 text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12 mt-10">
        <h1 className="ceraText font-normal text-2xl mb-10">
          You might also like
        </h1>
        <div className="ceraCards flex justify-between items-center">
          <div className="ceraCard mr-2">
            <Image src={Chair} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
          <div className="ceraCard mr-2">
            <Image src={Vase} alt="" />
            <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
            <p className="font-normal text-lg mb-6">£155</p>
          </div>
          <div className="ceraCard mr-2">
            <Image src={Vasee} alt="" />
            <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
            <p className="font-normal text-lg mb-6">£125</p>
          </div>
          <div className="ceraCard mr-2">
            <Image src={Lamp} alt="" />
            <h3 className="font-normal text-xl my-2">The Lucy Lamp</h3>
            <p className="font-normal text-lg mb-6">£399</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border p-4 mb-20">View collection</button>
        </div>
      </div>
      <Different />
      <JoinInput />
    </div>
  );
};

export default ProductsListing;
