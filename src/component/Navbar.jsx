import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const calculateGrandTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.toString().replace(/[^\d.]/g, "")) || 0;
      const quantity = parseInt(item.quantity) || 0;
      return total + price * quantity;
    }, 0)
      .toFixed(2);
  };


  return (
    <>
      {/* Navbar Section */}
      <nav className="font-inter font-bold bg-[#d5d5d5] border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img
              src="https://pics.craiyon.com/2024-09-03/OzRE6U2PSb2oFlvMVSeTqA.webp"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="font-poppins text-green-600 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GoGreen
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col font-medium mt-4 md:mt-0 md:flex-row md:space-x-8">
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-green-600 rounded hover:text-green-800 md:bg-transparent md:p-0 dark:text-green-500 dark:hover:text-green-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block py-2 pl-3 pr-4 text-green-600 rounded hover:text-green-800 md:bg-transparent md:p-0 dark:text-green-500 dark:hover:text-green-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-green-600 rounded hover:text-green-800 md:bg-transparent md:p-0 dark:text-green-500 dark:hover:text-green-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={toggleCart}
                >
                  <FaShoppingCart className="text-green-600 w-6 h-6 hover:text-green-900" />
                  <span className="hidden md:inline text-green-600 rounded hover:text-green-800">
                    Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Shopping Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 font-poppins">
          <div className="bg-white w-96 h-full p-6 shadow-lg">
            <button
              className="text-red-600 font-bold mb-4"
              onClick={toggleCart}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4 text-green-600 font-poppins">
              Your Cart
            </h2>
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150?text=No+Image";
                      }}
                    />
                    <div className="flex-1 ml-4 font-poppins">
                      <h3 className="text-sm font-semibold text-gray-700">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.price} x {item.quantity}
                      </p>
                    </div>
                    <button
                      className="text-red-600 text-sm"
                      onClick={() => removeFromCart(index)}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
            {cart.length > 0 && (
              <div className="mt-6">
                {/* Grand Total Section */}
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-lg font-bold text-gray-700">Total:</span>
                  <span className="text-lg font-bold text-green-600">
                    ₹{calculateGrandTotal()}
                  </span>
                </div>
              </div>
            )}
            {cart.length > 0 && (
              <div className="mt-6">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
