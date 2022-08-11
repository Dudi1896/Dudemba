import "./index.scss";
import React from "react";
import Navbar from "../Navbar";
import Body from "../Body";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default Layout;
