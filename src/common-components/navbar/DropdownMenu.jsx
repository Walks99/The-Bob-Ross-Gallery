// import React from "react";
// import { NavLink } from "react-router-dom";

// function DropdownMenu({ toggleDropdown }) {
//   return (
//     <div className="absolute top-20 right-0 w-full md:w-auto md:flex bg-white md:bg-transparent">
//       <ul className="flex flex-col items-center justify-around">
//         <NavLink to="/artworks" onClick={toggleDropdown}>
//           Artworks
//         </NavLink>
//         <NavLink to="/contact" onClick={toggleDropdown}>
//           Contact
//         </NavLink>
//       </ul>
//     </div>
//   );
// }

// export default DropdownMenu;

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

import React from "react";
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  return (
    <div className="absolute top-18 right-0 w-full md:w-auto md:flex bg-white opacity-90 h-20 md:bg-transparent">
      <ul className="flex items-center justify-around h-full text-2xl tracking-widest italic font-serif text-[#7E3C49]">
        <NavLink to="/artworks">
          Artworks
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </ul>
    </div>
  );
}

export default DropdownMenu;
