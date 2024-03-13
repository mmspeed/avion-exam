import Image from "next/image";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";
import User from "../assets/user.png";
import Chair from "../assets/chair.png";
import Delivery from "../assets/delivery.png";
import True from "../assets/true.png";
import Purchase from "../assets/purchase.png";
import Recycle from "../assets/recycle.png";
import Vase from "../assets/vase.png";
import Vasee from "../assets/vasee.png";
import Lamp from "../assets/lamp.png";
import Chir from "../assets/chir.png";
import Large from "../assets/large.png";
import Furn from "../assets/furn.png";

export default function Home() {
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
      <div className="text-gray-500 flex items-center justify-center my-4 mx-4">
        <h3 className="mx-4">Plant pots</h3>
        <h3 className="mx-4">Ceramics</h3>
        <h3 className="mx-4">Tables</h3>
        <h3 className="mx-4">Chairs</h3>
        <h3 className="mx-4">Crockery</h3>
        <h3 className="mx-4">Tableware</h3>
        <h3 className="mx-4">Cutlery</h3>
      </div>
      <div className="my-16 text-white flex container mx-auto px-12">
        <div className="bg-gray-600 px-9 py-3">
          <h1 className="w-[460px] text-3xl my-6 font-normal">
            The furniture brand for the future, with timeless designs
          </h1>
          <button className="bg-gray-500 py-4 px-4">View collection</button>
          <p className="mt-40 font-normal text-lg">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>
        <Image className="w-[540px]" src={Chair} alt="" />
      </div>
      <div className="container mx-auto px-12 mb-20">
        <h2 className="text-center text-2xl font-normal mb-10">
          What makes our brand different
        </h2>
        <div className="flex justify-between">
          <div className="w-[23%]">
            <Image className="mb-3" src={Delivery} alt="" />
            <h3 className="font-normal text-xl mb-2">Next day as standard</h3>
            <p className="font-normal text-base">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="w-[23%]">
            <Image className="mb-3" src={True} alt="" />
            <h3 className="font-normal text-xl mb-2">Made by true artisans</h3>
            <p className="font-normal text-base">
              Handmade crafted goods made with passion and craftmanship
            </p>
          </div>
          <div className="w-[23%]">
            <Image className="mb-3" src={Purchase} alt="" />
            <h3 className="font-normal text-xl mb-2">Unbeatable prices</h3>
            <p className="font-normal text-base">
              For our materials and quality you find better prices anywhere
            </p>
          </div>
          <div className="w-[23%]">
            <Image className="mb-3" src={Recycle} alt="" />
            <h3 className="font-normal text-xl mb-2">Recycled packaging</h3>
            <p className="font-normal text-base">
              We use 100% recycled packaging to our footprint is manageable
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h1 className="font-normal text-2xl mb-10">New ceramics</h1>
        <div className="flex justify-between items-center">
          <div>
            <Image src={Chair} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
          <div>
            <Image src={Vase} alt="" />
            <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
            <p className="font-normal text-lg mb-6">£155</p>
          </div>
          <div>
            <Image src={Vasee} alt="" />
            <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
            <p className="font-normal text-lg mb-6">£125</p>
          </div>
          <div>
            <Image src={Lamp} alt="" />
            <h3 className="font-normal text-xl my-2">The Lucy Lamp</h3>
            <p className="font-normal text-lg mb-6">£399</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border p-4 mb-20">View collection</button>
        </div>
      </div>
      <div className="container mx-auto px-12">
        <h1 className="font-normal text-2xl mb-8">Our popular products</h1>
        <div className="flex items-center justify-between">
          <div>
            <Image src={Large} alt="" />
            <h3 className="font-normal text-xl my-2">The Poplar suede sofa</h3>
            <p className="font-normal text-lg mb-6">£980</p>
          </div>
          <div>
            <Image src={Chair} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
          <div>
            <Image src={Chir} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border p-4 mb-20">View collection</button>
        </div>
      </div>
      <div className="text-center bg-slate-200">
        <h1 className="font-normal text-4xl pt-10 pb-2">
          Join the club and get the benefits
        </h1>
        <p className="font-normal text-base mb-10">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <input
          className="border py-3 pl-3"
          type="text"
          placeholder="your@email.com"
        />
        <input
          className="mb-10 py-3 cursor-pointer px-5 bg-teal-900 text-white"
          type="submit"
          value="Sign Up"
        />
      </div>
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
}
