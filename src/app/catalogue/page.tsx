"use client";

import React, { useState } from 'react';

export default function Catalogue() {
  // State to manage the active button
  const [activeButton, setActiveButton] = useState('');

  // Function to handle button click and set active state
  const handleButtonClick = (category: string) => {
    setActiveButton(category);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center tracking-wide text-lg">
      {/* Catalogue Header Section */}
      <section className="w-full py-6 text-timeless-black relative flex justify-center items-center">
        {/* Catalogue Title Styled Like Auction Title */}
        <h1 className="text-[70px] font-bold mx-auto">
          CATAL<span className="italic font-serif font-medium">O</span>GUE
        </h1>
      </section>

      {/* Main Section */}
      <main className="w-full bg-white">
        {/* Catalogue Search Section */}
        <section className="w-full py-10 text-center text-timeless-black relative flex flex-col items-center">
          {/* Buttons for Categories */}
          <div className="flex justify-center space-x-4 mt-4">
            {[
              'Home Decor & Houseware',
              'Beauty and Wellness',
              'Festive and Seasonal Decor',
              'Fashion',
              'Furniture',
              'Gifts',
              'Lamps and Lighting',
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(item)}
                className={`px-4 py-2 border border-secondary-1 text-secondary-1 hover:bg-secondary-1 hover:text-timeless-white rounded transition-colors duration-200`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="relative mt-8">
            <img
              src="/assets/catalogue/background.png"
              alt="Catalogue"
              className="w-full h-[95vh] object-cover"
            />

            {/* Search Bar */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] flex items-center bg-white/80 shadow-md rounded-md">
              <input
                type="text"
                className="w-full py-3 pl-4 text-gray-700 border-none outline-none bg-transparent placeholder-gray-500"
                placeholder="Search for a brand, product, or material"
              />
              {/* Search Icon */}
              <img
                src="/assets/catalogue/search.png"
                alt="Search Icon"
                className="w-10 h-10 mr-4"
              />
            </div>
          </div>
        </section>

        {/* New Products Section */}
        <section className="w-full py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-row gap-2 justify-start items-center text-primary-2">
              <p>Browse Products</p>
              <hr className="w-16 border border-primary-2" />
            </div>
            <h1 className="text-17xl font-semibold text-primary-2">
              AV<span className="font-serif italic font-medium">A</span>ILABLE F
              <span className="font-serif italic font-medium">O</span>R IMMEDIATE
              <span className="font-serif font-medium"> P</span>URCHASE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Repeat for all products */}
              {[
                {
                  title: 'Red Oval Paper Clay Storage',
                  brand: 'Indigenous',
                  image: 'product1-url-here',
                },
                {
                  title: 'Napa Chest Table',
                  brand: 'PILIPINAS SHELL',
                  image: 'product2-url-here',
                },
                {
                  title: 'Fiore Lamp',
                  brand: 'Final Furniture',
                  image: 'product3-url-here',
                },
              ].map((product, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspiration Section */}
        <section className="w-full py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-timeless-black">
              INSPIRATION
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Repeat for all inspiration cards */}
              {[
                {
                  title: 'Pretty As Peach Fuzz',
                  description:
                    'FAME+ Finds featuring the Pantone Color of the Year 2024',
                  image: 'inspiration1-url-here',
                },
                {
                  title: 'Light Of The Home',
                  description:
                    'What better way to present your lighting collection than in your own house?',
                  image: 'inspiration2-url-here',
                },
              ].map((inspiration, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-md">
                  <img
                    src={inspiration.image}
                    alt={inspiration.title}
                    className="w-full h-32 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold">{inspiration.title}</h3>
                  <p className="text-sm text-gray-500">
                    {inspiration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="w-full py-16 bg-gray-800 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">
              Can’t get enough of Fame+?
            </h2>
            <p className="mb-6">
              Our free email newsletter is bursting at the seams with the latest
              in high-quality design-oriented home, fashion, holiday, and
              interior products.
            </p>
            <div className="flex justify-center space-x-4">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md w-1/3 text-gray-700"
              />
              <button className="bg-secondary-1 px-4 py-2 rounded-md text-timeless-white">
                SUBMIT
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-primary-2">
              What Our Customers Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Repeat for all testimonials */}
              {[
                {
                  name: 'Pedro Ibanez',
                  comment: 'Our team has been wearing ...',
                  image: 'testimonial1-url-here',
                },
                {
                  name: 'Raymond Thuul',
                  comment: 'The high-end internet ...',
                  image: 'testimonial2-url-here',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-white p-6 rounded-md shadow-md"
                >
                  <p className="text-sm">{testimonial.comment}</p>
                  <h4 className="font-bold mt-4">{testimonial.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
