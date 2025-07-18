"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import CustomButton from "../shared/CustomButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const refHead = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigations = [
    { to: "home", title: "Startseite" },
    { to: "about", title: "Über mich" },
    { to: "experience", title: "Erfahrungen" },
    { to: "projects", title: "Schnupperlehren" },
    { to: "contact", title: "Kontakt" },
  ];

  const cv_file_url = "/pdf/ErenAydinLebenslauf.pdf";

  const downloadFile = (url: string) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName ?? "Resume.pdf");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <nav
      ref={refHead}
      className={`bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-70 backdrop-blur-md fixed top-0 left-0 w-full z-50 shadow-lg transition duration-300  ease-in-out pt-2 ${
        isScrolled ? "navbar-fixed" : " "
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="flex cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl font-extrabold py-5 md:py-6 items-center"
        >
          Erens Navigation.
        </Link>
        <div className="hidden lg:flex ml-auto items-center space-x-8">
          <ul className="flex space-x-8">
            {navigations.map((navigation) => (
              <li key={navigation.to} className="group">
                <Link
                  to={navigation.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer text-primary text-lg py-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-600 transition-all duration-300"
                >
                  {navigation.title}
                </Link>
              </li>
            ))}
          </ul>
          <CustomButton
            btnType="submit"
            title="Lebenslauf"
            containerStyles="ml-5 border border-borderColor bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500  hover:to-red-500 text-white py-[8x] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-lg"
            textStyles="text-white"
            onClick={() => downloadFile(cv_file_url)}
          />
        </div>

        {/* Mobil hamburger menü */}
        <div className="lg:hidden flex items-center">
          <button
            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-1 w-8 rounded bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 rounded bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-8 rounded bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-tertiary shadow-lg rounded-lg lg-hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              {navigations.map((navigation) => (
                <li key={navigation.to} className="group">
                  <Link
                    to={navigation.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={closeMenu}
                    className="text-white text-lg hover:text-pink-400 cursor-pointer"
                  >
                    {navigation.title}
                  </Link>
                </li>
              ))}
              <CustomButton
                btnType="submit"
                title="Resume"
                containerStyles="border border-borderColor bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500  hover:to-red-500 text-white py-[8x] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                textStyles="text-white"
                onClick={() => downloadFile(cv_file_url)}
              />
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};