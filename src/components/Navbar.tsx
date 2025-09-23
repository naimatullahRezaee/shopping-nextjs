"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

const Navbar = () => {
  const pathname = usePathname();
  const { cartTotalQty } = useShoppingCartContext();
  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
    {
      href: "/dashboard",
      title: "Dashboard",
    },
    {
      href: "/loging",
      title: "Loging",
    },
  ];
  return (
    <nav className="shadow p-4 bg-slate-700 ">
      <Container>
        <div className="flex justify-between">
          <div>
            {navLinks.map((itme) => (
              <Link
                className={`mr-4 text-white ${
                  pathname === itme.href ? "border-b-2 border-sky-500" : ""
                }  `}
                key={itme.href}
                href={itme.href}
              >
                {itme.title}
              </Link>
            ))}
          </div>
          <div className="">
            <Link href="/cart">
              <span className="text-white">Shopping</span>
            </Link>
            <span className="text-white px-2 py-1 bg-red-500 rounded-full text-sm">
              {cartTotalQty}
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
