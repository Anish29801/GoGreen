import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Green",
      feedback:
        "GoGreen has transformed the way I approach sustainability. Their guidance and products are amazing!",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      title: "Environmental Enthusiast",
      rating: 5,
    },
    {
      name: "John Smith",
      feedback:
        "I love how GoGreen helps me contribute to a greener planet. Their team is incredibly supportive.",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
      title: "Eco-Warrior",
      rating: 4,
    },
    {
      name: "Emma Brown",
      feedback:
        "Thanks to GoGreen, my garden is thriving! I highly recommend their services to everyone.",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Gardener",
      rating: 5,
    },
    {
      name: "Michael Lee",
      feedback:
        "Their eco-friendly solutions are game changers. I've never felt more connected to nature.",
      image:
        "https://randomuser.me/api/portraits/men/40.jpg",
      title: "Nature Lover",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8">
          What Our Customers Say
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
          >
            &larr;
          </button>

          <div className="flex overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-₹{currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center w-1/4"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-700">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonial.title}
                  </p>
                  <p className="text-gray-600 italic mb-4">
                    {testimonial.feedback}
                  </p>
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, idx) => (
                        <span key={idx} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 bg-green-600 text-white rounded-full p-2 hover:bg-green-700"
          >
            &rarr;
          </button>
        </div>

        {/* Indicators */}
        <div className="mt-6 flex justify-center space-x-2">
          {Array(testimonials.length - 3)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ₹{
                  index === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
