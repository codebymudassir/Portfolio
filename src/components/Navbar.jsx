import React, { useState } from "react";
import react from '../../public/react.png'
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { RxCross1 } from "react-icons/rx";
import { Sun, Moon } from 'lucide-react';
import DigitalTimer from './DigitalTimer';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home", target: "home" },
    { id: 2, text: "About", target: "about" },
    { id: 8, text: "Services", target: "services" },
    { id: 3, text: "Projects", target: "projects" },
    { id: 6, text: "Skills", target: "skills" },
    { id: 7, text: "Experience", target: "experience" },
    { id: 5, text: "Contact", target: "contact" },
  ];

  const [theme, setTheme] = useTheme();

  function handleChange() {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <div
        // REMOVED: id={theme} (This was overriding your transparency)
        // ADDED: Conditional text color based on theme
        className={`max-w-screen-2xl backdrop-blur-lg container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50
          ${theme === 'light' ? 'bg-white/70 text-black' : 'bg-black/70 text-white'}`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img
              src={react}
              style={{ animationDuration: '2s' }}
              className="h-12 w-12 animate-spin cursor-pointer hover:animate-none hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.6)] object-cover mt-1 rounded-full"
              alt=""
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mudassi<span className="text-green-500 text-2xl">r</span>
              <p className="text-sm">Soft<span className="text-red-500 text-sm">w</span>are Develo<span className="text-sm text-lime-400">p</span>er</p>
            </h1>
          </div>

          {/* Timer and Theme Toggle */}
          <div className="flex items-center gap-3 md:gap-6 md:ml-auto ml-2 mr-4 mt-1 md:mt-0">
            <div className="hidden sm:flex">
              <DigitalTimer />
            </div>
            <div onClick={handleChange} className='cursor-pointer hover:scale-110 transition-transform duration-200'>
              {theme === 'light' ? (
                <Sun size={24} className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200" />
              ) : (
                <Moon size={24} className="text-blue-400 hover:text-blue-300 transition-colors duration-200" />
              )}
            </div>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, target }) => (
                <li
                  className="hover:scale-105 hover:underline transition-all duration-300 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={target}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <RxCross1 className="mt-1" size={30} /> : <span className="w-20 h-20 text-5xl">&#8801;</span>}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div
            // REMOVED: id={theme}
            className={`shadow-md h-screen w-full md:hidden fixed top-16 left-0
              ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            <div className="flex flex-col items-center justify-start pt-10 h-full">
              <div className="mb-12">
                <DigitalTimer />
              </div>
              <ul className="flex flex-col items-center justify-center space-y-8 h-[60vh] text-2xl">
                {navItems.map(({ id, text, target }) => (
                  <li
                    className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                    key={id}
                  >
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={target}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;