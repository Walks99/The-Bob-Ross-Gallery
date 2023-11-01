import React from "react";
import Navbar from "../../common-components/navbar/navbar";
import Header from "./components/Header";
import Listings from "./components/Listings";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Header />
        <Listings />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
