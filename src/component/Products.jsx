import React from "react";

const Products = () => {
  const products = [
    {
      name: "Eco-Friendly Planter",
      description: "A stylish, sustainable planter made from recycled materials.",
      price: "₹15.99",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gSDbI2imJYLZ4yHu0CKK1gHaHa%26pid%3DApi&f=1&ipt=0c68bf3f7877a37d58ef84df44f8becf844ba5ed88ed24761dbe2aea12183199&ipo=images", // Replace with actual image URL
      link: "#",
    },
    {
      name: "Solar Powered Garden Lights",
      description: "Illuminate your garden with solar-powered, energy-efficient lights.",
      price: "₹29.99",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1MzLEbizxK1RjSspjq6AS.pXac%2F65-Leds-Solar-Light-Super-Bright-1500lm-12W-Spotlight-Wireless-Outdoor-Waterproof-Garden-Solar-Powered-Lamp.jpg&f=1&nofb=1&ipt=8cbf96da245646d868253ba312d57bdc5f30ab001736b7140f0de0967c41305f&ipo=images", // Replace with actual image URL
      link: "#",
    },
    {
      name: "Compost Bin",
      description: "Turn organic waste into nutrient-rich compost for your plants.",
      price: "₹25.99",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.homedecoratorshop.com%2Fwp-content%2Fuploads%2FRotating-Composter-1024x1024.jpg&f=1&nofb=1&ipt=2a1b974297836ee8181129cd83f1ae8d258471f7fc423507c23cd8e46be20a98&ipo=images", // Replace with actual image URL
      link: "#",
    },
    {
      name: "Reusable Grocery Bags",
      description: "Reduce plastic waste with durable, eco-friendly grocery bags.",
      price: "₹8.99",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.woolworths.media%2Fcontent%2Fwowproductimages%2Flarge%2F675287.jpg&f=1&nofb=1&ipt=9194ca4f7ca1a90c439735eeaaf2f0c14392c1a78890cd65774a8398c2f021c6&ipo=images", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-8">Our Products</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-green-600 mb-4">{product.price}</p>
              <a
                href="/products"
                className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
