"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
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
          <div>
            <Link href="/cart">
              <span className="text-white">Shopping</span>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
