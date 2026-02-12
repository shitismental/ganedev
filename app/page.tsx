import Image from "next/image";
import "./index.css"

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About"

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
        </main>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
