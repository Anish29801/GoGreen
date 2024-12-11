import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#f0fdf4] font-poppins">
      {/* Banner Section */}
      <section className="relative">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.library.pima.gov%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F07%2Fgreen-sprouts-in-the-rain-670x447.jpg&f=1&nofb=1&ipt=795164bd7cc92d015690ee9ce2135fd787c3cdbfe3d195a17298c835869b43ff&ipo=images" // Replace with your banner image URL
          alt="GoGreen Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        </div>
      </section>

      <div className="p-8 md:p-16">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-green-600 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            GoGreen is not just about planting trees. It's about cultivating a deeper connection to the planet. 
            We believe that by educating people on the importance of sustainability and offering hands-on experiences, 
            we can create a world where every person plays a part in nurturing the environment.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-3xl font-semibold text-green-600 mb-6">Our Mission</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            {[
              "Teach people how to plant and care for trees",
              "Encourage a sustainable, green future",
              "Support the growth of local ecosystems",
              "Empower communities through environmental education",
            ].map((point, index) => (
              <li key={index} className="flex items-center">
                <FaMapMarkerAlt className="text-green-600 mr-3" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Information Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <FaPhoneAlt className="text-green-600 text-4xl mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Call Us</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <FaEnvelope className="text-green-600 text-4xl mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Email Us</h4>
            <p className="text-gray-600">support@gogreen.com</p>
          </div>
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-green-600 text-4xl mb-4" />
            <h4 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h4>
            <p className="text-gray-600">123 Green Way, Eco City, Earth 12345</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-3xl font-semibold text-green-600 mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-6 max-w-2xl mx-auto">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              onClick={() => window.open("https://www.buymeacoffee.com/yourusername", "_blank")}
           >
              Send Donation
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
