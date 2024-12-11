import React, { useEffect, useState } from "react";
import "../App.css";

const Hero = () => {
  const images = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fyoung-plant-green-seedling-soil-isolated-white-backgrou-background-concept-growing-organic-plants-80173129.jpg&f=1&nofb=1&ipt=a1c313c4eeac67ced86bf3f5397b0a83c677d91e36d7c4b21c42d81a328b964b&ipo=images",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fphoto-young-green-plant-soil-ecology-concept-generative-ai_742418-3796.jpg&f=1&nofb=1&ipt=b99f30ed15af17b80f8919106d4b84926a2301fd78745230d7de420792ba0578&ipo=images",
    "https://img.freepik.com/premium-photo/plant-green-soil_1043470-47108.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-[#d5d5d5] py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Embrace the Beauty of Nature
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Experience the journey of growth, sustainability, and green living.
            Discover how you can make a difference with nature.
          </p>
          <a
            href="/about"
            className="inline-block bg-green-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-green-800 transition"
          >
            Learn More
          </a>
        </div>

        {/* Slideshow Section */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover flex-shrink-0 rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? "bg-green-600"
                    : "bg-gray-300 hover:bg-green-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
