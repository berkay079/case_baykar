"use client";
import React from "react";
import Image from "next/image";

const ShoesCollectedSection = () => {
  return (
    <section className="relative bg-brown-800  py-20 flex justify-center items-center">
      {/* World Map Background */}
      <div className="absolute inset-0 flex justify-center items-center  bg-brown-800">
        <div className="w-full h-full md:w-4/5 lg:w-3/5 xl:w-2/3">
          <Image
            src="/images/chart.png"
            alt="World Map"
            layout="responsive"
            width={1600} // Oranlı bir genişlik
            height={900} // Oranlı bir yükseklik (16:9 oranı)
            objectFit="contain" // Resmin orantılı şekilde küçülmesini sağlar
            className="opacity-50"
          />
        </div>
      </div>
      {/* Overlaying Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-bold mb-4">11,658,467</h2>
        <p className="text-2xl">Shoes Collected</p>
      </div>
      {/* Green Circles on the Map */}
      {/* <div className="absolute z-10">
        <span className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-500 rounded-full"></span>
        <span className="absolute top-1/3 right-1/3 w-4 h-4 bg-green-500 rounded-full"></span>
        <span className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-green-500 rounded-full"></span>
      </div> */}
      {/* Info Card */}
      //
      <div className="absolute z-20 top-16 left-16 w-48 h-48">
        <Image
          src="/images/col1.png"
          alt="Collected Shoes"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default ShoesCollectedSection;
