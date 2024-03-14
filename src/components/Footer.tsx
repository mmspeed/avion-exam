import React from "react";
import Image from "next/image";
import Links from "../assets/links.png";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 container mx-auto px-12 text-white flex justify-between pb-10 pt-10">
        <div className="flex">
          <div className="mr-24">
            <h3 className="mb-3">Menu</h3>
            <h3 className="mb-3">New arrivals</h3>
            <h3 className="mb-3">Best seller</h3>
            <h3 className="mb-3">Recently viewed</h3>
            <h3 className="mb-3">Popular this week</h3>
            <h3>All products</h3>
          </div>
          <div className="mr-24">
            <h3 className="mb-3">Categories</h3>
            <h3 className="mb-3">Crockery</h3>
            <h3 className="mb-3">Furniture</h3>
            <h3 className="mb-3">Homeware</h3>
            <h3 className="mb-3">Plant pots</h3>
            <h3>Chairs</h3>
          </div>
          <div className="">
            <h3 className="mb-3">Our company</h3>
            <h3 className="mb-3">About us</h3>
            <h3 className="mb-3">Vacancies</h3>
            <h3 className="mb-3">Contact us</h3>
            <h3 className="mb-3">Privacy</h3>
            <h3>Returns policy</h3>
          </div>
        </div>
        <div className="">
          <h2 className="font-normal text-base mb-3">Join our mailing list</h2>
          <input
            className="bg-blue-900 p-3 pr-80 font-normal text-base"
            type="text"
            placeholder="your@email.com"
          />
          <input
            className="p-3 border border-white cursor-pointer"
            type="submit"
            value="Sign up"
          />
        </div>
      </div>
      <hr />
      <div className="bg-blue-950 container mx-auto px-12 text-white flex justify-between pb-5 pt-5">
        <h2>Copyright 2022 Avion LTD</h2>
        <Image src={Links} alt="Social Links" />
      </div>
    </>
  );
};

export default Footer;
