import React from "react";
import companyLogo from "../../assets/images/company-logo/BobRoss.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`relative bg-[#BDDDF4] h-20 ${
        isDropdownOpen ? "flex flex-col" : "block"
      }`}
    >
      <div className="flex md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between w-full m-0">
          <div className="flex items-center">
            <img
              src={companyLogo}
              alt="company logo"
              className="w-14 md:w-16 h-auto m-2 md:ml-4"
            />
            <p className="ml-4 font-serif text-[#892c2c]">
              The Bob Ross Gallery
            </p>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className={`md:hidden mr-8 w-7 h-auto ${
              isDropdownOpen ? "hidden" : "block"
            }`}
            style={{ color: "#C75458" }}
            onClick={toggleDropdown}
          />
          <FontAwesomeIcon
            icon={faXmark}
            className={`md:hidden mr-8 w-7 h-auto ${
              isDropdownOpen ? "block" : "hidden"
            }`}
            style={{ color: "#C75458" }}
            onClick={toggleDropdown}
          />
        </div>

        <div>
          <ul className="hidden md:flex md:justify-between md:mr-10 md:items-center md:font-serif">
            <NavLink to="/artworks" className="mr-16 hover:text-[#CD5441]">
              Artworks
            </NavLink>
            <NavLink
              to="/contact"
              className="border-none rounded bg-indigo-500 text-white p-2 font-bold md:hover:scale-109 duration-300 ease-out"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>

      <div className={`${isDropdownOpen ? "block" : "hidden"}`}>
        <DropdownMenu toggleDropdown={toggleDropdown} />
      </div>
    </div>
  );
}

export default Navbar;
