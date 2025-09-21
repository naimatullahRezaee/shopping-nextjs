import React from "react";
import Navbar from "./Navbar";
interface ILayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
