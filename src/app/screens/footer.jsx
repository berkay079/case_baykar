// "use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Product Section */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4 text-white">Product</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-2">
                <a href="#">Overview</a>
              </li>
              <li className="mb-2">
                <a href="#">Browse</a>
              </li>
              <li className="mb-2">
                <a href="#">Accessibility</a>
              </li>
              <li className="mb-2">
                <a href="#">Five</a>
              </li>
            </ul>
          </div>

          {/* Solutions Section */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4 text-white">Solutions</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Brainstorming</a>
              </li>
              <li className="mb-2">
                <a href="#">Ideation</a>
              </li>
              <li className="mb-2">
                <a href="#">Wireframing</a>
              </li>
              <li className="mb-2">
                <a href="#">Research</a>
              </li>
              <li className="mb-2">
                <a href="#">Design</a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4 text-white">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Developers</a>
              </li>
              <li className="mb-2">
                <a href="#">Documentation</a>
              </li>
              <li className="mb-2">
                <a href="#">Integrations</a>
              </li>
              <li className="mb-2">
                <a href="#">Reports</a>
              </li>
            </ul>
          </div>

          {/* Get the App Section */}
          <div className="w-1/2 md:w-1/4 mb-6">
            <h3 className="text-lg font-bold mb-4 text-white">Get the App</h3>
            <div className="flex space-x-4">
              <a href="#">
                <Image
                  src="/images/apple.png"
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </a>
              <a href="#">
                <Image
                  src="/images/google.png"
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </a>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center md:text-left md:flex md:justify-between">
          <p>&copy; 2023 Collers. All rights reserved.</p>
          <div className="flex space-x-4 justify-center md:justify-start mt-4 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
            <a href="#">
              EN <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
