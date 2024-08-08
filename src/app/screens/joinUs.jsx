import React from "react";
import Image from "next/image";

export default function JoinUs() {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-16 max-w-5xl mx-auto flex flex-col lg:flex-row items-center">
      {/* İçerik */}
      <div className="relative z-10 w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold text-black mb-4">Why join us</h2>
        <ul className="mb-6 text-gray-700">
          <li className="flex items-center mb-2">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Est et in pharetra magna adipiscing ornare aliquam.
          </li>
          <li className="flex items-center mb-2">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Tellus arcu sed consequat ac velit ut eu blandit.
          </li>
          <li className="flex items-center mb-2">
            <svg
              className="w-6 h-6 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            Ullamcorper ornare in et egestas dolor orci.
          </li>
        </ul>
        <button className="border-2 border-brown-600 text-brown-600 px-6 py-3 rounded-lg">
          Sign up now
        </button>
      </div>

      {/* Görsel */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full max-w-md">
          <Image
            src="/images/colll.png"
            alt="Why Join Us"
            layout="responsive"
            width={640}
            height={360}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white p-2 rounded-full">
              <svg
                className="w-12 h-12 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Arka Plan Şekilleri */}
      <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-8">
        <div className="w-24 h-24 bg-yellow-200 rotate-12 absolute rounded"></div>
        <div className="w-8 h-8 bg-blue-600 rounded-full absolute top-0 right-0"></div>
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-6 translate-y-8">
        <div className="w-16 h-16 bg-purple-300 rounded-lg absolute"></div>
        <div className="w-10 h-10 bg-pink-600 rounded-full absolute bottom-0 right-0"></div>
      </div>
      <div className="absolute top-1/4 right-1/4">
        <div className="w-12 h-12 bg-green-600 rounded-full"></div>
      </div>
      <div className="absolute top-1/4 left-1/4">
        <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
      </div>
    </div>
  );
}
