import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";
import React from "react";

interface IProductProps {
  params: Promise<{ id: string }>;
  SearchParams: Promise<{}>;
}
async function Product({ params }: IProductProps) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3001/products/${id}`);
  const data = (await result.json()) as IProductItemProps;
  return (
    <Container>
      <div className="grid grid-cols-12 mt-4 shadow-md">
        <div className="col-span-3 bg-sky-300">
          <Link href="/store">
            <img src={data.image} alt="" />
          </Link>
        </div>
        <div className="col-span-9 bg-sky-200 p-4">
          <h2 className="font-bold">{data.title} </h2>
          <p className="font-bold">
            price: <span>{data.price}</span>{" "}
          </p>
          <p className="text-gray-600">{data.description}</p>
          <div className="mt-3">
            <button className="px-4 py-1 rounded bg-sky-500 text-white">
              +
            </button>
            <span className="mx-2">20</span>
            <button className="px-4 py-1 rounded bg-sky-500 text-white">
              -
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
