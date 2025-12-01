import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { GiCursedStar } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10 px-6 border-t border-gray-200">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex gap-2 items-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-400 w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl font-bold">
            <GiCursedStar />
          </div>
            <h2 className="text-2xl font-bold text-purple-600 mb-2">SkillSwap</h2>

          </div>
          <p className="text-sm leading-relaxed">
            Empowering learners and creators through community-driven skill
            exchange. Connect, learn, and grow together.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/skills" className="hover:text-purple-600 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Connect With Us
          </h3>
          <div className="flex space-x-3 mb-3">
            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:contact@skillswap.com"
              target="_blank"
              className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-gray-600">📧 contact@skillswap.com</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm  border-t border-gray-200 pt-4 font-semibold bg-gradient-to-b from-purple-600 to-pink-400  bg-clip-text text-transparent">
        © {new Date().getFullYear()} SkillSwap — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
