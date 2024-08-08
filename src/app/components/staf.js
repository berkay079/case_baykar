import React from "react";
import Image from "next/image";

function staf() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-transparent p-10 flex flex-col md:flex-row justify-around items-center text-white">
      {/* İlk Blok */}
      <div className="md:text-left mb-6 flex flex-col items-center md:items-start">
        <div className="relative w-16 h-16 mb-4">
          <div
            className="absolute top-[-5px] left-[25px] w-8 h-8 bg-green-500 z-10"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              borderRadius: "10%",
            }}
          ></div>
          <Image
            src="/images/kupa.png"
            alt="Kupa Icon"
            width={48}
            height={48}
            className="absolute top-2 left-2 z-20"
          />
        </div>
        <h2 className="text-black text-xl font-bold mb-4">Nibh viverra</h2>
        <p className="text-black max-w-xs md:text-left">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>

      {/* İkinci Blok */}
      <div className="md:text-left mb-6 flex flex-col items-center md:items-start">
        <div className="relative w-16 h-16 mb-4">
          <div
            className="absolute top-[-5px] left-[25px] w-8 h-8 bg-green-500 z-10"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              borderRadius: "10%",
            }}
          ></div>
          <Image
            src="/images/staf.png"
            alt="Staff Icon"
            width={48}
            height={48}
            className="absolute top-2 left-2 z-20"
          />
        </div>
        <h2 className="text-black text-xl font-bold mb-4">Cursus amet</h2>
        <p className="text-black max-w-xs md:text-left">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>

      {/* Üçüncü Blok */}
      <div className="md:text-left mb-6 flex flex-col items-center md:items-start">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute top-[-1px] left-[30px] w-10 h-10 bg-purple-300 rounded-full z-0"></div>
          <Image
            src="/images/tv.png"
            alt="TV Icon"
            width={48}
            height={48}
            className="absolute top-2 left-2 z-20"
          />
        </div>
        <h2 className="text-black text-xl font-bold mb-4">Ipsum fermentum</h2>
        <p className="text-black max-w-xs md:text-left">
          Sit bibendum donec dolor fames neque vulputate non sit aliquam.
          Consequat turpis natoque leo, massa.
        </p>
      </div>
    </div>
  );
}

export default staf;
