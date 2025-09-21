import AddToCart from "@/components/AddToCart";
import Container from "@/components/Container";
import { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";
import React from "react";

interface IProductProps {
  params: Promise<{ id: string }>;
  SearchParams: Promise<{ "": string }>;
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
          <AddToCart id={id} />
        </div>
      </div>
    </Container>
  );
}

export default Product;
