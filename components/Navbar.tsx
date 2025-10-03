"use client"; // This is a client component
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

// Updated Navigation Items for Matcha Bowl Business
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Shop",
    page: "shop",
  },
  {
    label: "Learn",
    page: "learn",
  },
  {
    label: "Our Story",
    page: "our-story",
  },
  {
    label: "Contact Us",
    page: "contact-us",
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);
  const [mounted, setMounted] = useState(false); // Track if the component is mounted

  // Set dark mode as the default theme after mounting
  useEffect(() => {
    setMounted(true); // Mark the component as mounted
    setTheme("white"); // Set the theme to dark
  }, [setTheme]);

  // Prevent rendering until the component is mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-gray-900 dark:border-b dark:border-gray-700">
      <div className="flex justify-between items-center py-3 md:py-5">
        {/* Logo - Circular Container */}
        <div className="relative">
          <Link to="home" className="cursor-pointer block" aria-label="Home">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#386c00] bg-[#e3edc9] shadow-md hover:shadow-lg transition-all duration-300">
              <Image
                src="/01_KORNG_REI_BRAND_IDENTITY_PREMARY-removebg-preview.png"
                alt="Matcha Bowl Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation Links (Desktop View) */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="text-neutral-900 hover:text-[#386c00] dark:text-neutral-100 cursor-pointer transition duration-300 font-medium text-sm sm:text-base"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.label}
            </Link>
          ))}
          {/* Theme Toggle Button */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-[#e3edc9] p-2 rounded-xl shadow hover:scale-105 transition duration-300"
              suppressHydrationWarning={true}
              aria-label="Switch to Light Mode"
            >
              <RiSunLine size={25} color="#386c00" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-[#e3edc9] p-2 rounded-xl shadow hover:scale-105 transition duration-300"
              suppressHydrationWarning={true}
              aria-label="Switch to Dark Mode"
            >
              <RiMoonFill size={25} color="#386c00" />
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-[#386c00] rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle Menu"
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div
          className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center space-y-8 ${
            navbar ? "block" : "hidden"
          }`}
        >
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="text-neutral-900 hover:text-[#386c00] dark:text-neutral-100 cursor-pointer transition duration-300 text-lg font-medium"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
          {/* Theme Toggle Button */}
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="bg-[#e3edc9] p-2 rounded-xl shadow hover:scale-105 transition duration-300"
              suppressHydrationWarning={true}
              aria-label="Switch to Light Mode"
            >
              <RiSunLine size={25} color="#386c00" />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="bg-[#e3edc9] p-2 rounded-xl shadow hover:scale-105 transition duration-300"
              suppressHydrationWarning={true}
              aria-label="Switch to Dark Mode"
            >
              <RiMoonFill size={25} color="#386c00" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}