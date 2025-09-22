import Container from "@/components/Container";
import Pagenation from "@/components/Pagenation";
import ProductItem, { IProductList } from "@/components/ProductItem";
import Link from "next/link";
import React from "react";

interface IStoreProps {
  params: Promise<{ "": string }>;
  searchParams: Promise<{ page: string; per_page: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const perPage = (await searchParams).per_page ?? "4";
  const result = await fetch(
    `http://localhost:3001/products?_page=${page}&_per_page=${perPage}`
  );
  const data = (await result.json()) as IProductList;
  return (
    <Container>
      <h1 className="py-4">Home</h1>
      <div className="grid grid-cols-3 gap-4">
        {data.data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagenation pageCount={data.pages} />
    </Container>
  );
}

export default Store;
