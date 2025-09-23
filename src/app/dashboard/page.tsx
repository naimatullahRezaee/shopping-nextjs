"use client";
import Container from "@/components/Container";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

function Dashboard() {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleCreateProduct = () => {
    axios({
      method: "POST",
      url: "http://localhost:3001/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        title: newProduct.title,
        price: newProduct.price,
        image: newProduct.image,
        description: newProduct.description,
      },
    });
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-8">
      <Container>
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-700 mb-6 text-center">
            Add New Product
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input
                name="title"
                onChange={handleChangeProduct}
                type="text"
                placeholder="Product Title"
                className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
              <input
                name="price"
                onChange={handleChangeProduct}
                type="text"
                placeholder="Price"
                className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
              <input
                name="image"
                onChange={handleChangeProduct}
                type="text"
                placeholder="Image URL"
                className="w-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            {/* Right Side - Description */}
            <div>
              <textarea
                name="description"
                onChange={handleChangeProduct}
                className="w-full h-full border rounded-xl px-4 py-3 shadow-sm focus:ring-2 focus:ring-sky-400 focus:outline-none"
                placeholder="Product Description"
                rows={7}
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex justify-center">
            <Link href={"/store"}>
              <button
                onClick={handleCreateProduct}
                className="bg-sky-500 hover:bg-sky-600 transition text-white font-semibold py-3 px-10 rounded-xl shadow-md"
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
