import React, { useState, useEffect } from "react";
import { FaTree, FaSeedling, FaBook, FaHandsHelping } from "react-icons/fa";

const About = () => {
  const [ceoData, setCeoData] = useState(null);

  // Simulate fetching CEO data
  useEffect(() => {
    setCeoData({
      name: "Kyle Riley",
      imageUrl: "https://randomuser.me/api/portraits/men/96.jpg",
      degree: "PhD Climate Science and Meteorology"
    });
  }, []);

  return (
    <div className="bg-[#f0fdf4] p-8 md:p-16">
      {/* About Section */}
      <section className="font-poppins text-center mb-12">
        <h2 className="text-4xl font-semibold text-green-600 mb-4">About GoGreen</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At GoGreen, we are committed to empowering individuals and communities to grow their
          own plants, with a particular focus on trees. Our mission is to create a more sustainable
          world by teaching our customers how to plant trees and helping them fall in love with
          nature.
        </p>
      </section>


      {/* Image Grid with Blur Effect */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            image:
              "https://blog.jungseed.com/wp-content/uploads/2021/01/iStock-1205298588-2048x1365.jpg",
            text: "Growing Green",
          },
          {
            image:
              "https://img.freepik.com/premium-photo/photo-young-green-plant-soil-ecology-concept-generative-ai_742418-3796.jpg",
            text: "Rooting for Change",
          },
          {
            image:
              "https://img.freepik.com/premium-photo/nurturing-nature-free-closeup-photo-hand-watering-sapling-touch-care-growth_930407-730.jpg",
            text: "Nurturing Nature",
          },
          {
            image:
              "https://www.northwestern.edu/sustainability/images/news/2018/sustainable-development.png",
            text: "Sustainable Growth",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative hover:cursor-pointer group rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={card.image}
              alt={card.text}
              className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition duration-300 ease-in-out group-hover:bg-opacity-0 group-hover:backdrop-blur-0"
            ></div>
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-xl z-10">
              {card.text}
            </p>
          </div>
        ))}
      </section>

      {/* CEO & Founder Section */}
      {ceoData && (
        <section className="bg-white p-8 rounded-lg shadow-md mt-12 text-center">
          <h3 className="text-3xl font-semibold text-green-600 mb-4">Our CEO & Founder</h3>
          <div className="flex flex-col items-center">
            <img
              src={ceoData.imageUrl}
              alt={ceoData.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="text-xl font-bold text-gray-800">
              {ceoData.name},
              <span className="text-lg font-semibold text-gray-600 ml-1">{ceoData.degree}</span>
            </p>
          </div>
        </section>
      )}
      {/* Icon Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {[
          {
            icon: <FaTree className="text-green-700 text-5xl mb-4" />,
            title: "Tree Planting",
            description: "Helping communities plant and nurture trees for a greener tomorrow.",
          },
          {
            icon: <FaSeedling className="text-green-700 text-5xl mb-4" />,
            title: "Sustainable Living",
            description: "Encouraging eco-friendly habits and a love for nature.",
          },
          {
            icon: <FaBook className="text-green-700 text-5xl mb-4" />,
            title: "Education",
            description: "Providing resources and guidance for environmental awareness.",
          },
          {
            icon: <FaHandsHelping className="text-green-700 text-5xl mb-4" />,
            title: "Community Support",
            description: "Empowering communities through collaboration and support.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </section>
      {/* Mission Section */}
      <section className="bg-white p-8 rounded-lg shadow-md mt-12 text-center">
        <h3 className="text-3xl font-semibold text-green-600 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-700 mb-6">
          GoGreen is not just about planting trees. It's about cultivating a deeper connection to
          the planet. We believe that by educating people on the importance of sustainability and
          offering hands-on experiences, we can create a world where every person plays a part in
          nurturing the environment.
        </p>
        <ul className="list-none text-lg text-gray-700 mx-auto space-y-2 max-w-prose">
          {[
            "Teach people how to plant and care for trees",
            "Encourage a sustainable, green future",
            "Support the growth of local ecosystems",
            "Empower communities through environmental education",
          ].map((mission, index) => (
            <li key={index} className="flex items-center">
              <FaSeedling className="text-green-600 mr-3" />
              {mission}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default About;
