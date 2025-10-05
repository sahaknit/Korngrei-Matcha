// components/Footer.tsx
import React from "react";
import Link from 'next/link'; // <-- FIX 1: Import the Link component
import { FaFacebook, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      {/* Horizontal Line */}
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0 dark:bg-stone-700" />

      {/* Footer Content */}
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 dark:text-neutral-100 md:flex-row md:justify-between">
        {/* Copyright Text */}
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-400 mb-4 md:mb-0">
          {/* FIX 2: Use the Link component for the homepage link and wrap the text */}
          <Link href="/" className="hover:underline">
            © 2025 Matcha Bowl
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row items-center justify-center space-x-4">
          {/* Facebook Icon */}
          {/* FIX 3: Changed the incorrect <link> tag to a proper <a> tag */}
          <a
            href="https://www.facebook.com/your-facebook-page"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on Facebook"
          >
            <FaFacebook
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]"
              size={28}
            />
          </a>

          {/* TikTok Icon */}
          <a
            href="https://www.tiktok.com/@your-tiktok-handle"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on TikTok"
          >
            <FaTiktok
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]"
              size={28}
            />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/your-instagram-handle"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on Instagram"
          >
            <FaInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]"
              size={28}
            />
          </a>

          {/* Twitter/X Icon */}
          <a
            href="https://twitter.com/your-x-handle"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Follow us on Twitter/X"
          >
            <FaXTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 hover:text-[#386c00] dark:text-neutral-400 dark:hover:text-[#e3edc9]"
              size={28}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;