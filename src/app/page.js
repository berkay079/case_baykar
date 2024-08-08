import React from "react";
import Image from "next/image";
import NavsHeader from "./components/navs_header";
import HomeScreen from "./screens/home";
import Best from "./screens/best";

export default function Home() {
  return (
    <div>
      <NavsHeader />
      <main className="justify-between items-center ">
        <HomeScreen />
      </main>
    </div>
  );
}
