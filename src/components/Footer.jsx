import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { colors } from '../utils/color.js';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: colors.background }} className="text-white py-12">
         <div style={{ borderColor: colors.border }} className="border-t mt-8 pt-8 text-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h2 style={{ color: colors.primary }} className="text-2xl font-bold mb-4">
              Company Name
            </h2>
            <p style={{ color: colors.text }}>
              Revolutionizing technology with innovative solutions for a better future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 style={{ color: colors.primary }} className="text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  style={{ color: colors.text }}
                  className="hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  style={{ color: colors.text }}
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  style={{ color: colors.text }}
                  className="hover:text-white transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ color: colors.text }}
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-8 md:mb-0">
            <h3 style={{ color: colors.primary }} className="text-xl font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
                className="hover:text-white transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
                className="hover:text-white transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
                className="hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.text }}
                className="hover:text-white transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 style={{ color: colors.primary }} className="text-xl font-semibold mb-4">
              Subscribe
            </h3>
            <p style={{ color: colors.text }} className="mb-4">
              Stay updated with our latest news and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                style={{ backgroundColor: colors.text, color: colors.background }}
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                style={{ backgroundColor: colors.accent }}
                className="text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Notice */}
        <div style={{ borderColor: colors.border }} className="border-t mt-8 pt-8 text-center">
          <p style={{ color: colors.text }}>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;