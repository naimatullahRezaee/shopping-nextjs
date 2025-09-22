import React from "react";

export interface IProductItemProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

export interface IProductList {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: IProductItemProps[];
}
const ProductItem = ({
  title,
  description,
  image,
  price,
}: IProductItemProps) => {
  return (
    <div>
      <div className="shadow-md p-2 h-96">
        <img src={image} alt="" />
        <div className="p-2">
          <h2 className="font-bold">{title}</h2>

          <p>
            Price : <span>{price}</span>
          </p>
          <p className="line-clamp-3">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
