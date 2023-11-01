import React from 'react'
import Navbar from '../../common-components/navbar/Navbar'
import Header from './components/Header'
import Listings from './components/Listings'

function HomePage() {
  return (
    <div className='h-screen'>
        <Navbar />
        <Header />
        <Listings />
    </div>
  )
}

export default HomePage