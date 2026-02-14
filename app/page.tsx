import "./index.css"

import Navbar from "./components/layout/Navbar/Navbar";
import About from "./components/sections/HomePageSections/About/About";
import Reviews from "./components/sections/HomePageSections/Reviews/Reviews";
import Work from "./components/sections/HomePageSections/Work/Work"
import Marketing from "./components/sections/HomePageSections/Marketing/Marketing";
import RightSidePanel from "./components/helpers/RightSidePanel/RightSidePanel";
import Footer from "./components/layout/Footer/Footer"

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
          <Work />
          <Marketing />
        </main>
        <div className="footer">
          <Footer />
        </div>
        <RightSidePanel />
      </div>
    </>
  );
}
