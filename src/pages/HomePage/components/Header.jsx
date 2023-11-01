import React from "react";
// import HeaderImage from "../../../assets/images/company-logo/BobRoss.png";
import PaintPalette from "../../../assets/images/additional-png/paint-palette.png";

function Header() {
  return (
    <div className="bg-[#C75458] h-1/2 flex flex-col justify-center">
      <div className="flex justify-center md:justify-start">
        <h1 className="italic text-white font-bold md:ml-32">
          <span className="text-xl text-amber-100 font-serif">
            "There are no mistakes, <br /> &nbsp; only happy accidents"
          </span>{" "}
          <span className="text-amber-200">- Bob Ross</span>
        </h1>
      </div>

      <div className="flex flex-col items-center w-screen">
        <img src={PaintPalette} alt="company logo" className="w-40 h-auto m-4" />
        <form action="" className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search artworks"
            className="ml-24 mr-4 w-2/6 h-12 rounded-xl text-center italic bg-amber-100 focus:bg-amber-200 focus:outline-none focus:placeholder-transparent font-serif"
          />
          <button className="bg-amber-200 rounded-xl px-4 hover:bg-amber-300 hover:scale-105 duration-300 ease-out font-serif">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
