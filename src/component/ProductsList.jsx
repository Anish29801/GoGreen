import React, { useState, useEffect } from 'react';
const sampleProducts = [
  {
    name: "Eco-Friendly Planter",
    description: "A stylish, sustainable planter made from recycled materials.",
    price: "₹15.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gSDbI2imJYLZ4yHu0CKK1gHaHa%26pid%3DApi&f=1&ipt=0c68bf3f7877a37d58ef84df44f8becf844ba5ed88ed24761dbe2aea12183199&ipo=images",

  },
  {
    name: "Solar Powered Garden Lights",
    description: "Illuminate your garden with solar-powered, energy-efficient lights.",
    price: "₹29.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1MzLEbizxK1RjSspjq6AS.pXac%2F65-Leds-Solar-Light-Super-Bright-1500lm-12W-Spotlight-Wireless-Outdoor-Waterproof-Garden-Solar-Powered-Lamp.jpg&f=1&nofb=1&ipt=8cbf96da245646d868253ba312d57bdc5f30ab001736b7140f0de0967c41305f&ipo=images",

  },
  {
    name: "Compost Bin",
    description: "Turn organic waste into nutrient-rich compost for your plants.",
    price: "₹25.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.homedecoratorshop.com%2Fwp-content%2Fuploads%2FRotating-Composter-1024x1024.jpg&f=1&nofb=1&ipt=2a1b974297836ee8181129cd83f1ae8d258471f7fc423507c23cd8e46be20a98&ipo=images",

  },
  {
    name: "Reusable Grocery Bags",
    description: "Reduce plastic waste with durable, eco-friendly grocery bags.",
    price: "₹8.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.woolworths.media%2Fcontent%2Fwowproductimages%2Flarge%2F675287.jpg&f=1&nofb=1&ipt=9194ca4f7ca1a90c439735eeaaf2f0c14392c1a78890cd65774a8398c2f021c6&ipo=images",

  },
  {
    name: "Biodegradable Straws",
    description: "Eco-friendly straws made from biodegradable materials.",
    price: "₹6.50",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.kingdommachine.com%2FUploadFiles%2FSolid-Flexible-Drinking-Straw(1).jpg&f=1&nofb=1&ipt=371273597d24238ff89fdfcad1d94b0b4b5b30760dd92270f24700d696e66a68&ipo=images",

  },
  {
    name: "Herbal Seed Kit",
    description: "Grow your own herbs at home with this all-in-one seed kit.",
    price: "₹12.49",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.urbangardensweb.com%2Fwp-content%2Fuploads%2F2012%2F08%2Fplant-seed-kit-box1.jpg&f=1&nofb=1&ipt=782442ae9c92cd1cf07fb635d91b8a86c9e040b94c8a1819edacc7882c87457d&ipo=images",

  },
  {
    name: "Bamboo Toothbrushes",
    description: "Eco-friendly bamboo toothbrushes for a sustainable oral care routine.",
    price: "₹10.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1IiRJOXXXXXXIaFXXq6xXFXXXn%2F100-Pieces-Beige-Extra-White-Bamboo-Toothbrush-Wood-toothbrush-Novelty-Bamboo-soft-bristle-Capitellum-Bamboo-Fibre.jpg&f=1&nofb=1&ipt=cb5598305e96d4253185073e09930b70234d6a5dcdad45d15e3bfcfd22fa6dca&ipo=images",

  },
  {
    name: "Recycled Paper Journals",
    description: "Handcrafted journals made from 100% recycled paper.",
    price: "₹14.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.qualitylogoproducts.com%2Fjournals%2Fkraft-paper-journal-with-flatfinish-hq.jpg&f=1&nofb=1&ipt=00df183d79cd0609ec8f76c724e370500adf927b4b06e6ee9ceb213a8b33a50a&ipo=images",

  },
  {
    name: "Energy-Saving Light Bulbs",
    description: "Reduce energy consumption with these efficient light bulbs.",
    price: "₹7.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fenergizerconnect.com%2Fwp-content%2Fuploads%2F2016%2F01%2FEAC2-1002-2.jpg&f=1&nofb=1&ipt=35a05a78bc8053e1900e95880e949c6ecb6d258642b973e1c34aeeb75ac61b93&ipo=images",

  },
  {
    name: "Reusable Coffee Cups",
    description: "Durable and stylish reusable coffee cups for your daily brew.",
    price: "₹18.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.listingmirror.com%2F554%2Fc92a9f38-a35f-5e2e-8c79-131ab74c63f2%2Ffull.jpg&f=1&nofb=1&ipt=33521ec3ffb8e98b98fefee574d90d324e221637b0600a13a0f3df70d2e75eef&ipo=images",

  },
  {
    name: "Eco-Friendly Picnic Set",
    description: "A complete picnic set made from sustainable materials.",
    price: "₹34.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F88%2F99%2F7b%2F88997ba3e6a2e664bba6095273ab39ca.jpg&f=1&nofb=1&ipt=3761c006c5ff9a867ff5e4a03c4dc3faacfcbc45aded3336faae25477226d510&ipo=images",

  },
  {
    name: "Water-Saving Shower Head",
    description: "Save water and energy with this efficient shower head.",
    price: "₹19.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m68L1f1JX_b39GcOaMxAngHaHa%26pid%3DApi&f=1&ipt=22cb381154cb2dd5345f5d0c88bda3d84e35f489fbb6753b2ada04b279229ebb&ipo=images",

  },
  {
    name: "Organic Cotton Tote Bag",
    description: "Stylish and durable tote bag made from organic cotton.",
    price: "₹11.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dsmcdn.com%2Fty1004%2Fproduct%2Fmedia%2Fimages%2Fprod%2FSPM%2FPIM%2F20230924%2F19%2Faa2ffb1b-0368-3f97-b499-7d91b259d738%2F1_org_zoom.jpg&f=1&nofb=1&ipt=d470b4170f04255733a6ded23728b09c404446ae7b38e69c8ab749f27779605f&ipo=images",

  },
  {
    name: "Glass Water Bottle Combo",
    description: "Reusable glass water bottle for eco-conscious hydration.",
    price: "₹22.49",
    image: "https://cdn.shopify.com/s/files/1/0012/6418/9487/products/81hlfXPKP2L._SL1500_2048x.jpg?v=1558636361",

  },
  {
    name: "Organic Cotton Napkins",
    description: "Soft and reusable napkins made from organic cotton.",
    price: "₹9.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shutterstock.com%2Fshutterstock%2Fphotos%2F1991689523%2Fdisplay_1500%2Fstock-vector-gingham-tablecloths-and-white-kitchen-towels-top-view-vector-realistic-set-of-d-folded-table-1991689523.jpg&f=1&nofb=1&ipt=01a51f3ae7c38f0a9dc374912f3463e607e442cba9ee88cccdb73e7ceb52ccee&ipo=images",

  },
  {
    name: "Solar Backpack Charger",
    description: "Charge your devices on the go with this solar-powered backpack.",
    price: "₹49.99",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F41FVFuaVjrL.jpg&f=1&nofb=1&ipt=1859b78dcb8518e1d3dcf9cb8ec38922a8d5a6ecda5aadac35d82ce2c39c45db&ipo=images",
  },
];

const ProductsList = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage on initialization
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart || [];
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingProduct = updatedCart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredProducts(
      sampleProducts.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="container mx-auto p-8 font-poppins">
      {/* Search Bar */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => {
                  e.target.src =
                    'https://via.placeholder.com/150?text=No+Image';
                }}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>

              {/* Buttons Section */}
              <div className="mt-4 flex justify-between">
                <button
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            No products match your search.
          </p>
        )}
      </div>
    </div> 
  );
};

export default ProductsList;