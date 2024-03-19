"use client";
import React, { useState } from "react";
import Image from "next/image";
import Cart from "../assets/cart.png";
import User from "../assets/user.png";
import FastDelivery from "./FastDelivery";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isCLick, setIsClick] = useState();
  const toggleNavbar = () => {
    setIsClick(!isCLick);
  };
  const item = useSelector((state) => state.cart);
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <FastDelivery />
      <div className="head flex items-center p-5 justify-between container mx-auto px-12">
        <h1 className="font-normal text-2xl">Avion</h1>
        <div className="hidden md:block">
          <div className="flex items-center">
            <a
              href="/about"
              className="font-normal text-base text-gray-500 mr-4"
            >
              About us
            </a>
            <a
              href="/products"
              className="font-normal text-base text-gray-500 mr-4"
            >
              Products
            </a>
            <a href="/" className="font-normal text-base text-gray-500 mr-10">
              Blog
            </a>
            <div className="flex items-center">
              <Link className="flex items-center justify-center" href="/cart">
                <Image className="mr-1" src={Cart} alt="" />
                <span className="mr-3">{item.length}</span>
              </Link>
              <Link href="/login">
                <Image className="mr-3" src={User} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          >
            {isCLick ? (
              <svg
                className="h-6 w-6"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isCLick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex items-center justify-center mb-2">
              <a
                href="/about"
                className="font-normal text-base text-gray-500 mr-4"
              >
                About us
              </a>
              <a href="/" className="font-normal text-base text-gray-500 mr-4">
                Contact
              </a>
              <a href="/" className="font-normal text-base text-gray-500 mr-10">
                Blog
              </a>
              <div className="flex items-center">
                <Link className="flex items-center justify-center" href="/cart">
                  <Image className="mr-1" src={Cart} alt="" />
                  <span className="mr-3">{item.length}</span>
                </Link>
                <Link href="/login">
                  <Image className="mr-3" src={User} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Header;
