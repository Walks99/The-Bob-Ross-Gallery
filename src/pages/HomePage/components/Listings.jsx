import React from "react";
import { NavLink } from "react-router-dom";
// import Artwork1 from "../../../assets/images/artworks/Artwork1.jpeg";
import Artwork5 from "../../../assets/images/artworks/Artwork5.jpeg";
import Artwork3 from "../../../assets/images/artworks/Artwork3.jpeg";
import Artwork4 from "../../../assets/images/artworks/Artwork4.jpeg";

function Listings() {
  return (
    <div className="flex justify-around items-center h-1/2 bg-[#E8F3F3] font-serif">
      <div className="h-auto w-1/4 hover:scale-103 duration-300 ease-out">
        <NavLink to="/">
          <img src={Artwork5} alt="" />
          <p>Time passing - 1986</p>
        </NavLink>
      </div>

      <div className="h-auto w-1/4 hover:scale-103 duration-300 ease-out">
        <NavLink to="/">
          <img src={Artwork4} alt="" />
          <p>Montana Spring - 1989</p>
        </NavLink>
      </div>

      <div className="h-auto w-1/4 hover:scale-103 duration-300 ease-out">
        <NavLink to="/">
          <img src={Artwork3} alt="" />
          <p>River in Maine - 1991</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Listings;
