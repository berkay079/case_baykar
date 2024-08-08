import React from "react";
import Section1 from "./section1";
import Staf from "../components/staf";
import Best from "./best";
import Join from "./joinUs";
import Scroll from "./scroll";
import Section from "./section4";
import Section5 from "./section5";
import Footer from "./footer";

export default function HomeScreen() {
  return (
    <div className="relative bg-gradient-to-r from-[#FFFBE8] to-[#FFFFFF] min-h-screen">
      <div className="relative z-10  mx-12 ">
        <Section1 />
      </div>

      {/* Alt Kısım - İkonlu Bilgilendirme */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center px-6 py-12 my-12">
        <Staf />
      </div>

      {/* Best Bileşeni */}
      <div className="relative z-30 text-white flex flex-col lg:flex-row items-center  py-12 my-12 lg:justify-around">
        <Best />
      </div>

      <div className="relative z-40 flex flex-col lg:flex-row items-center px-6 py-12 my-12">
        <Join />
      </div>

      <div className="relative z-50 text-white px-6 py-12 my-12">
        <Scroll />
      </div>

      <div className="relative z-60 text-white px-6 py-12 my-12">
        <Section />
      </div>

      <div className="relative z-70  px-6 py-12 my12">
        <Section5 />
      </div>

      <div className="relative z-80 text-white my-2 ">
        <Footer />
      </div>
    </div>
  );
}
