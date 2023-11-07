import React from 'react'
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  return (
    <div className="w-full m-0 h-screen bg-yellow-400 opacity-70">
        <ul className='flex flex-col items-center justify-around'>
            <NavLink>Artworks</NavLink>
            <NavLink>Contact</NavLink>
        </ul>
    </div>
  )
}

export default DropdownMenu