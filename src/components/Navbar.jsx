import React, { useEffect } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-scroll";

import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isStick, setIsStick] = React.useState(false);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsStick(true);
      } else {
        setIsStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Doctors",
      link: "#doctors",
    },
    {
      name: "Appointments",
      link: "#appointments",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header className="w-full bg-black opacity-70 bg-opacity-100 fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isStick
            ? "sticky top-0 left-0 right-0 border-b bg-black duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href=""
            className="text-2xl font font-semibold items-center space-x-3"
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-white">MATHRULK</span>
          </a>

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ name, link }) => (
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-100}
                key={link}
                className="block text-base text-white hover:text-pink-700 first:font-medium"
              >
                {name}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-white
                    hover:text-pink-700"
            >
              LogIn
            </a>
            <button
              className="bg-pink-700 text-white py-2 px-4 transition-all duration-300 
                    rounded hover:bg-green-700"
            >
              Sign Up
            </button>
          </div>
          {/* Mobile */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-500 transition duration-300 ease-in-out"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-pink-700" />
              ) : (
                <FaBars className="h-6 w-6 text-pink-700" />
              )}
            </button>
          </div>
        </div>
        {/*navitems mobile*/}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-black overflow-hidden transition duration-300 ease-in-out transform  ${
            isMenuOpen ? "block fixed top-0 right-0 left-0  " : "hidden"
          }`}
        >
          {navItems.map(({ name, link }) => (
            <Link
              to={link}
              spy={true}
              smooth={true}
              offset={-100}
              key={link}
              className="block text-base text-white hover:text-pink-900 first:font-medium transition duration-300 ease-in-out transform origin-top pb-4"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
