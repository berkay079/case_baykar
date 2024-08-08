import React from "react";
import Image from "next/image";

export default function Sectoin1() {
  return (
    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center p-6">
      <div className="md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl md:text-6xl font-bold text-black mb-4 md:mb-6">
          Collectible Sneakers
        </h2>
        <p className="text-gray-700 mb-6 md:mb-8">
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
          suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
          amet.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
          <button className="border-2 border-brown-600 text-brown-600 px-6 py-3 rounded-lg">
            Sign up now
          </button>
          <button className="flex items-center text-brown-600">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-5.197-.47 1.585-3.805 5.197.47-1.585 3.805zM11 14l-4 6h16l-4-6m-4 0V6"
              ></path>
            </svg>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-64 h-64 relative">
          <Image
            src="/images/Col.png"
            alt="Sneaker"
            className="relative z-10"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
