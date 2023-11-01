import React from "react";
import companyLogo from "../../assets/images/company-logo/BobRoss.png";

function Navbar() {
  return (
    <div className="flex md:flex md:flex-row md:items-center md:justify-between bg-[#BDDDF4] h-20">
      <div className="flex items-center">
        <img src={companyLogo} alt="company logo" className="w-16 h-auto ml-4" />
        <p className="ml-4 font-serif">The Bob Ross Gallery</p>
      </div>
      <div>
        <ul className="hidden md:flex md:justify-between md:mr-10 md:items-center md:font-serif">
          <li className="mr-4">
            <a href="/">Home</a>
          </li>
          <li className="mr-4">
            <a href="/products">Products</a>
          </li>
          <li className="mr-4">
            <a href="/about">About</a>
          </li>
          <li className="mr-4 border-none rounded bg-indigo-500 text-white p-2 font-bold">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
