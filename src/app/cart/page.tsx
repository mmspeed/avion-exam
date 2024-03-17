import React from "react";
import Image from "next/image";
import CartPro from "../../assets/cartpro.png";
import VasePro from "../../assets/vasepro.png";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  return (
    <div>
      <Header />
      <div className="categoriesMain text-gray-500 bg-gray-100 flex items-center justify-center py-4 px-4">
        <h3 className="mx-4">Plant pots</h3>
        <h3 className="mx-4">Ceramics</h3>
        <h3 className="mx-4">Tables</h3>
        <h3 className="mx-4">Chairs</h3>
        <h3 className="mx-4">Crockery</h3>
        <h3 className="mx-4">Tableware</h3>
        <h3 className="mx-4">Cutlery</h3>
      </div>
      <div className="cartEl container mx-auto px-40 mb-10">
        <h1 className="mt-14 text-4xl font-normal mb-10">Your shopping cart</h1>
        <div className="infCart flex justify-between mb-4">
          <h3>Product</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        <hr />
        <div className="thx mt-5 flex justify-between items-center">
          <div className="cartCard flex items-center">
            <Image src={CartPro} alt="" />
            <div className="ml-5">
              <h2 className="textCart mb-2 text-2xl font-normal">
                Graystone vase
              </h2>
              <p className="mb-2 text-sm font-normal">
                A timeless ceramic vase with a color grey.
              </p>
              <h3 className="text-base font-normal">£85</h3>
            </div>
            <div className="flex">
              <button className="mr-3">-</button>
              <h2 className="clss">1</h2>
              <button className="ml-3">+</button>
            </div>
          </div>
          <h3 className="cl">£85</h3>
        </div>
        <div className="thx mt-5 flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Image src={VasePro} alt="" />
            <div className="ml-5">
              <h2 className="textCart mb-2 text-2xl font-normal">
                Basic white vase
              </h2>
              <p className="mb-2 text-sm font-normal">
                Beautiful and simple this is the classics om.
              </p>
              <h3 className="text-base font-normal">£125</h3>
            </div>
            <div className="flex">
              <button className="mr-3">-</button>
              <h2 className="clss">1</h2>
              <button className="ml-3">+</button>
            </div>
          </div>
          <h3 className="cl">£125</h3>
        </div>
        <hr />
      </div>
      <div className="container mx-auto px-40 mb-10">
        <h2 className="flex items-end justify-end font-normal text-2xl mb-2">
          Subtotal £210
        </h2>
        <p className="flex items-end justify-end font-normal text-sm mb-4">
          Taxes and shipping are calculated at checkout
        </p>
        <div className="flex items-end justify-end">
          <button className="py-3 cursor-pointer px-5 bg-blue-950 text-white">
            Go to checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
