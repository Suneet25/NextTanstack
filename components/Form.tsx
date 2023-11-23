"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { QueryClient } from '@tanstack/react-query'

const FormCard = () => {
    let queryClient=new QueryClient();
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");

  const mutation = useMutation({
    mutationFn: (newProd) => {
      return axios.post(
        "https://products-srtc.onrender.com/products",

        newProd.title,
        newProd.price
      );
      
    },
    onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries({queryKey:["products"]})
      },
  });


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="file"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product title
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter name of the product"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a title.
            </p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Product price
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price of the product"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a price.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                mutation.mutate<any>({
                  id: new Date(),
                  title: { title },
                  price: { price },
                });
              }}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCard;
