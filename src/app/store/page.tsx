import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";
import React from "react";

async function Store() {
  const result = await fetch("http://localhost:3001/products");
  const data = (await result.json()) as IProductItemProps[];
  return (
    <Container>
      <h1 className="py-4">Home</h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
