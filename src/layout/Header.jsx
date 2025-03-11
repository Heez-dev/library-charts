import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between items-end gap-20 mb-12">
      <h1 className="text-2xl font-bold whitespace-nowrap">
        Testing Charts Library
      </h1>
      <Navbar />
    </header>
  );
};

export default Header;
