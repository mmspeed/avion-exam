import React from "react";
import Image from "next/image";
import ChangeCountry from "@/components/ChangeCountry";
import Header from "@/components/Header";
import EFurn from "../../assets/EFurn.png";
import Correct from "../../assets/correct.png";
import Different from "@/components/Different";
import Footer from "@/components/Footer";

const About = () => {
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
      <h1 className="ozi text-center my-10 text-4xl font-normal">
        A brand built on the love of craftmanship, outstanding customer service
      </h1>
      <ChangeCountry />
      <div className="travel container mx-auto px-12 flex justify-between mb-16">
        <Image className="travelImg" src={EFurn} alt="" />
        <div className="travelText mt-20">
          <h1 className="font-normal text-2xl mb-6">
            Our service isn't just personal, it's actually hyper personally
            exquisite
          </h1>
          <p className="mb-6">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="travelDesc mb-40">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
          <button className="border p-4">Get in touch</button>
        </div>
      </div>
      <Different />
      <div className="bg-orange-500 text-white text-center">
        <h1 className="font-normal text-4xl pt-10 pb-2">
          Join the club and get the benefits
        </h1>
        <p className="font-normal text-base mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <div className="mb-8 flex items-center justify-center">
          <Image src={Correct} alt="" />
          <p className="mr-8 text-base font-normal ml-2">Exclusive offers</p>
          <Image src={Correct} alt="" />
          <p className="mr-8 text-base font-normal ml-2">Free events</p>
          <Image src={Correct} alt="" />
          <p className="text-base font-normal ml-2">Large discounts</p>
        </div>
        <input
          className="border py-3 pl-5 text-black"
          type="text"
          placeholder="your@email.com"
        />
        <input
          className="mb-10 py-3 cursor-pointer px-5 bg-blue-950 text-white"
          type="submit"
          value="Sign Up"
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
