// import React from "react";

// export default function NavsHeader() {
//   return (
//     <header className="flex justify-between items-center p-6 bg-gradient-to-r from-[#FFFBE8] to-[#FFFFFF]">
//       <h1 className="text-3xl font-bold text-brown-600">Collers</h1>
//       <nav>
//         <ul className="flex space-x-8">
//           <li className="text-brown-600">Products</li>
//           <li className="text-brown-600">Solutions</li>
//           <li className="text-brown-600">Pricing</li>
//           <li className="text-brown-600">Resources</li>
//           <li className="text-brown-600">Log In</li>
//           <li>
//             <button className="border-2 border-brown-600 text-brown-600 px-4 py-2 rounded-lg">
//               Sign up now
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
"use client";

import React, { useState } from "react";

export default function NavsHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r from-[#FFFBE8] to-[#FFFFFF]">
      <h1 className="text-3xl font-bold text-brown-600">Collers</h1>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-brown-600 focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        className={`lg:flex ${
          isOpen ? "block" : "hidden"
        } flex-grow lg:flex-grow-0`}
      >
        <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center">
          <li className="text-brown-600 py-2 lg:py-0">Products</li>
          <li className="text-brown-600 py-2 lg:py-0">Solutions</li>
          <li className="text-brown-600 py-2 lg:py-0">Pricing</li>
          <li className="text-brown-600 py-2 lg:py-0">Resources</li>
          <li className="text-brown-600 py-2 lg:py-0">Log In</li>
          <li className="py-2 lg:py-0">
            <button className="border-2 border-brown-600 text-brown-600 px-4 py-2 rounded-lg">
              Sign up now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
