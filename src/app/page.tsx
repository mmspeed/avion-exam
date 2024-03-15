import Image from "next/image";
import Search from "../assets/search.png";
import Cart from "../assets/cart.png";
import User from "../assets/user.png";
import Chair from "../assets/chair.png";
import Vase from "../assets/vase.png";
import Vasee from "../assets/vasee.png";
import Lamp from "../assets/lamp.png";
import Chir from "../assets/chir.png";
import Large from "../assets/large.png";
import JoinInput from "@/components/JoinInput";
import Different from "@/components/Different";
import ChangeCountry from "@/components/ChangeCountry";

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
      <div className="furnitures my-16 text-white flex container mx-auto px-12">
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
        <Image className="furnituresImg w-[540px]" src={Chair} alt="" />
      </div>
      <Different />
      <div className="container mx-auto px-12">
        <h1 className="ceraText font-normal text-2xl mb-10">New ceramics</h1>
        <div className="ceraCards flex justify-between items-center">
          <div className="ceraCard">
            <Image src={Chair} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
          <div className="ceraCard">
            <Image src={Vase} alt="" />
            <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
            <p className="font-normal text-lg mb-6">£155</p>
          </div>
          <div className="ceraCard">
            <Image src={Vasee} alt="" />
            <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
            <p className="font-normal text-lg mb-6">£125</p>
          </div>
          <div className="ceraCard">
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
        <h1 className="popText font-normal text-2xl mb-8">
          Our popular products
        </h1>
        <div className="popCards flex items-center justify-between">
          <div className="popCard">
            <Image src={Large} alt="" />
            <h3 className="font-normal text-xl my-2">The Poplar suede sofa</h3>
            <p className="font-normal text-lg mb-6">£980</p>
          </div>
          <div className="popCard">
            <Image src={Chair} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
          <div className="popCard">
            <Image src={Chir} alt="" />
            <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
            <p className="font-normal text-lg mb-6">£250</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="border p-4 mb-20">View collection</button>
        </div>
      </div>
      <JoinInput />
      <ChangeCountry />
    </div>
  );
}
