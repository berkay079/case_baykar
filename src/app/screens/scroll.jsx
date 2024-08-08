"use client";

import React, { useRef } from "react";
import testimonials from "../utils/dummyDataCart";

const TestimonialCard = ({ logo, feedback, name, title, image }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between max-w-xs flex-shrink-0 w-70 mx-10">
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <img src={logo} alt="Logo" className="w-24 h-6 mr-2" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-gray-700">{feedback}</p>
    </div>
    <div className="flex items-center mt-4">
      <img
        src={image}
        alt={name}
        className="w-10 h-10 rounded-full mr-2 object-cover"
      />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </div>
  </div>
);

const ScrollComponent = () => {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll hızını kontrol edebilirsiniz
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleWheel = (e) => {
    e.preventDefault();
    containerRef.current.scrollLeft += e.deltaY; // Yatay kaydırma
  };

  const scrollLeftButton = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  const scrollRightButton = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.offsetWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="p-8 relative"
      style={{ backgroundColor: "rgba(255, 251, 232, 0.8)" }} // Transparan arka plan
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBE8] to-[#FFFFFF]"></div>

      <h1 className="relative text-4xl font-bold mb-6 z-20 text-black text-left">
        Because they love us
      </h1>

      <div
        className="overflow-hidden relative"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
      >
        <div className="flex">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              logo={testimonial.logo}
              feedback={testimonial.feedback}
              name={testimonial.name}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
      <button
        onClick={scrollLeftButton}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={scrollRightButton}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        ›
      </button>
    </div>
  );
};

export default ScrollComponent;
