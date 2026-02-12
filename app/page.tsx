import Image from "next/image";
import "./index.css"

import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About/About";
import Reviews from "./components/sections/Reviews/Reviews";

import RightSidePanel from "./components/RightSidePanel/RightSidePanel";
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <>
      <div className="layout__container">
        <div className="navbar">
          <Navbar />
        </div>
        <main className="main__container">
          <About />
          <Reviews />
        </main>
        <div className="footer">
          <Footer />
        </div>
        <RightSidePanel />
      </div>
    </>
  );
}
