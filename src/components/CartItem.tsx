import React from "react";

function CartItem() {
  return (
    <div>
      <div className="grid grid-cols-12 shadow-md m-4 h-50 rounded p-2 bg-gray-200">
        <img
          className="col-span-3 h-44"
          src="https://i.marketingprofs.com/assets/images/articles/lg/150518-Digital-Dictionary-Blog-lg.jpg"
          alt=""
        />
        <div className="col-span-9 px-4">
          <h2 className="font-bold">Product Name: </h2>
          <p className="font-bold">
            {" "}
            Quantity: <span>8</span>{" "}
          </p>
          <p className="font-bold">
            {" "}
            price: <span>80$</span>{" "}
          </p>
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
    </div>
  );
}

export default CartItem;
