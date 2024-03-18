"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { remove } from "@/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <Header />
      <div className="categoriesMain text-gray-500 bg-gray-100 flex items-center justify-center py-4 px-4 mt-[120px]">
        <h3 className="mx-4">Plant pots</h3>
        <h3 className="mx-4">Ceramics</h3>
        <h3 className="mx-4">Tables</h3>
        <h3 className="mx-4">Chairs</h3>
        <h3 className="mx-4">Crockery</h3>
        <h3 className="mx-4">Tableware</h3>
        <h3 className="mx-4">Cutlery</h3>
      </div>
      <h1 className="mt-14 text-4xl font-normal mb-20 container mx-auto px-20">
        Your shopping cart
      </h1>
      <div className="container mx-auto px-20">
        {cartItems.map((item) => (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center">
                <img className="w-[200px] mr-20" src={item.image} alt="" />
                <div>
                  <h5 className="font-bold text-xl mb-2">{item.title}</h5>
                  <h4 className="mb-2">{item.description}</h4>
                  <h5 className="font-normal text-md">{item.price}</h5>
                </div>
              </div>
              <button
                className="p-4 px-8 bg-red-700 text-white border-2 rounded-lg"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
            <hr className="mb-10" />
          </div>
        ))}
      </div>
      <div className="container mx-auto px-40 mb-10">
        <h2 className="flex items-end justify-end font-normal text-2xl mb-2">
          Subtotal: 210
        </h2>
        <p className="flex items-end justify-end font-normal text-sm mb-4">
          Taxes and shipping are calculated at checkout
        </p>
        <div className="flex items-end justify-end">
          <button className="py-3 cursor-pointer px-5 bg-blue-950 text-white rounded-lg">
            Go to checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
