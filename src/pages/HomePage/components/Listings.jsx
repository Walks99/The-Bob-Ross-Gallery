import React from "react";
import { NavLink } from "react-router-dom";
// import Artwork1 from "../../../assets/images/artworks/Artwork1.jpeg";
import Artwork5 from "../../../assets/images/artworks/Artwork5.jpeg";
import Artwork3 from "../../../assets/images/artworks/Artwork3.jpeg";
import Artwork4 from "../../../assets/images/artworks/Artwork4.jpeg";

function Listings() {
  return (
    <div className="flex flex-col mt-6 md:mt-0 md:flex md:flex-row justify-around items-center h-max md:h-1/2 bg-[#E8F3F3] font-serif">
        <div className="mt-2 md:hidden">
            <p className="italic text-[#892c2c]">Some of Bob's most memorable pieces</p>
        </div>
      <div className="h-auto md:w-1/4 3xl:w-1/5 w-full mt-4 md:mt-o md:hover:scale-103 duration-300 ease-out">
        <NavLink to="/timepassing">
          <p className="ml-2 text-[#8a712c] md:hidden">Time passing - 1986</p>
          <img src={Artwork5} alt="" />
          <p className="ml-2 md:ml-0 hidden md:block text-[#8a712c]">Time passing - 1986</p>
        </NavLink>
      </div>

      <div className="h-auto md:w-1/4 3xl:w-1/5 w-full mt-4 md:mt-o md:hover:scale-103 duration-300 ease-out">
        <NavLink to="/">
          <p className="ml-2 text-[#8a712c] md:hidden">Montana Spring - 1989</p>
          <img src={Artwork4} alt="" />
          <p className="ml-2 md:ml-0 hidden md:block text-[#8a712c]" >Montana Spring - 1989</p>
        </NavLink>
      </div>

      <div className="h-auto md:w-1/4 3xl:w-1/5 w-full mt-4 md:mt-o md:hover:scale-103 duration-300 ease-out">
        <NavLink to="/">
          <p className="ml-2 text-[#8a712c] md:hidden">River in Maine - 1991</p>
          <img src={Artwork3} alt="" />
          <p className="ml-2 md:ml-0 hidden md:block text-[#8a712c]">River in Maine - 1991</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Listings;
