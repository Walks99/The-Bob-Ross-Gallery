import React from "react";
import companyLogo from "../../assets/images/company-logo/BobRoss.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-green-200 h-24">
      <div className="flex items-center">
        <img src={companyLogo} alt="company logo" className="w-20 h-auto" />
        <p className="ml-4">The Bob Ross Gallery</p>
      </div>
      <div>
        <ul className="flex justify-between mr-10 items-center">
          <li className="mr-4">
            <a href="/">Home</a>
          </li>
          <li className="mr-4">
            <a href="/products">Products</a>
          </li>
          <li className="mr-4">
            <a href="/about">About</a>
          </li>
          <li className="mr-4 border-solid border-2 border-sky-500 rounded bg-indigo-500 text-white p-2 font-bold">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
