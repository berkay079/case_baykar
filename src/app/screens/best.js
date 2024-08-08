import React from "react";

const Card = ({ image, title, description }) => (
  <div
    className="bg-blue-gray-900 rounded-lg overflow-hidden relative 
    transition-all duration-300 hover:shadow-2xl hover:scale-105
    "
    style={{ boxShadow: "0 8px 30px rgba(255, 255, 255, 0.3)" }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  </div>
);

const Best = () => (
  <div className="bg-[#0F172A] text-white py-16 px-4 w-full">
    {/* </div><div className="bg-white text-white py-16 px-4"> */}
    <div className="container mx-auto">
      <div
        className="flex mb-8  justify-between items-center
      "
      >
        <h2 className="text-4xl font-bold ">The best of the best</h2>
        <button className="bg-transparent text-white border-2 border-white py-2 px-6 rounded-lg hover:bg-white hover:text-black">
          Sign up now
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          image="/images/shoes.png"
          title="Title"
          description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        />
        <Card
          image="/images/shoes2.png"
          title="Title"
          description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        />
        <Card
          image="/images/shoes3.png"
          title="Title"
          description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        />
      </div>
    </div>
  </div>
);

export default Best;
