"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AiOutlineSearch } from "react-icons/ai";
import { add } from "@/reducers/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  const getProducts = async () => {
    const res = await fetch(
      "https://65f6bd7641d90c1c5e0b39ed.mockapi.io/products"
    );
    const data = await res.json();
    setProducts(data);
  };

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    getProducts();
  }, []);

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
      <form className="flex items-center justify-center mt-6">
        <div className="relative">
          <input
            className="w-full p-4 rounded-full bg-slate-200"
            type="search"
            placeholder="Search..."
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-300 rounded-full">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
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
        <div className="cards">
          {products.map((product) => (
            <div
              key={product.id}
              className="card border-2 mb-5 p-3 rounded-md border-black"
            >
              <img
                className="w-[100%] h-[250px] mb-3"
                src={product.image}
                alt=""
              />
              <hr className="mb-3" />
              <h4 className="mb-2">{product.title}</h4>
              <h5 className="mb-2">{product.price}</h5>
              <button
                className="border-2 p-2 font-semibold bg-blue-950 text-white border-blue-950
                rounded-lg hover:text-blue-950 hover:bg-white duration-500"
                onClick={() => handleAdd(product)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
