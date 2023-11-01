import React from 'react'
import HeaderImage from '../../../assets/images/company-logo/BobRoss.png'

function Header() {
  return (
    <div className='bg-teal-600 h-96 flex flex-col justify-around'>
        <div>
            <h1>"There are no mistakes, only happy accidents" - Bob Ross</h1>
        </div>

        <div className='flex flex-col items-center w-screen'>
            <img src={HeaderImage} alt="company logo" className="w-40 h-auto m-4" />
            <form action="" className='w-full flex justify-center'>
                <input type="text" placeholder='Search products' className='mr-6 w-2/6 h-12 rounded-xl'/><button>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Header