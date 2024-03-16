import React from "react";
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
import Header from "@/components/Header";

const Products = () => {
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
      <div className="bg-gray-700 container mx-auto px-12">
        <h2 className="allP text-white font-normal text-4xl pt-8 pb-8">
          All products
        </h2>
      </div>
      <div className="necessary container mx-auto px-12 flex justify-between mt-10">
        <div className="filters">
          <div className="filtersF">
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
          </div>
          <div className="filtersS">
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
        </div>
        <div className="filtCa">
          <div className="filtCas flex justify-between items-center">
            <div className="filtCar mx-2">
              <Image src={Chair} alt="" />
              <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
              <p className="font-normal text-lg mb-6">£250</p>
            </div>
            <div className="filtCar mx-2">
              <Image src={Vase} alt="" />
              <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
              <p className="font-normal text-lg mb-6">£155</p>
            </div>
            <div className="filtCar mx-2">
              <Image src={PChair} alt="" />
              <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
              <p className="font-normal text-lg mb-6">£125</p>
            </div>
          </div>
          <div className="filtCas flex justify-between items-center">
            <div className="filtCar mx-2">
              <Image src={Vasee} alt="" />
              <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
              <p className="font-normal text-lg mb-6">£250</p>
            </div>
            <div className="filtCar mx-2">
              <Image src={Lamp} alt="" />
              <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
              <p className="font-normal text-lg mb-6">£155</p>
            </div>
            <div className="filtCar mx-2">
              <Image src={Chir} alt="" />
              <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
              <p className="font-normal text-lg mb-6">£125</p>
            </div>
          </div>
          <div className="filtCas flex justify-between items-center">
            <div className="filtCar mx-2">
              <Image src={Lamps} alt="" />
              <h3 className="font-normal text-xl my-2">The Dandy chair</h3>
              <p className="font-normal text-lg mb-6">£250</p>
            </div>
            <div className="filtCar mx-2">
              <Image src={Cup} alt="" />
              <h3 className="font-normal text-xl my-2">Rustic Vase Set</h3>
              <p className="font-normal text-lg mb-6">£155</p>
            </div>
            <div className="filtCar mx-2">
              <Image src={Stul} alt="" />
              <h3 className="font-normal text-xl my-2">The Silky Vase</h3>
              <p className="font-normal text-lg mb-6">£125</p>
            </div>
          </div>
          <div className="filtCas flex items-center justify-center">
            <button className="border p-4 mb-20">Load more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
