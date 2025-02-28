import React, { useState } from "react";
import { FaFacebookSquare, FaTwitterSquare, FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add the subscription logic here
    setSubscribed(true);
  };

  return (
    <>
      <div className="flex flex-col  p-4 bg-gray-800 rounded-lg shadow-lg ">
        <div className="sm:flex justify-evenly px-5">
          <div className="text-white flex flex-col py-3 gap-2 sm:gap-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-20 sm:w-80 max-h-25 mb-6 sm:mb-4"
            />
            <div className="text-white text-center sm:text-left flex flex-col gap-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaAddressBook className="text-yellow-400 text-xl" />
                <p className="text-sm sm:text-left">
                  Room No.301, Friends Mahal 3rd Floor,
                  <br />
                  No.20, Koodal Alagar Perumal Kovil Street,
                  <br />
                  Madurai - 625 001
                </p>
              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <FaPhoneAlt className="text-yellow-400 text-xl" />
                <a href="tel:+918825577277" className="text-sm sm:text-base text-blue-500 hover:underline">
                    +91 88255 77277
                </a>

              </div>

              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <BiLogoGmail className="text-yellow-400 text-xl" />
                <a href="mailto:brighthrmdu@gmail.com" className="text-sm sm:text-base text-blue-500 hover:underline">
                brighthrmdu@gmail.com
              </a>

              </div>

              <div className="text-white flex justify-center sm:justify-start flex-wrap gap-3 pt-3">
                <a
                  href="http://fb.com/61561338693343"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100"
                >
                  <FaFacebookSquare size={25} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100"
                >
                  <FaInstagram size={25} />
                </a>
                <a
                  href="http://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100"
                >
                  <FaYoutube size={25} />
                </a>

                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100"
                >
                  <FaSquarePinterest size={25} />
                </a>
                <a
                  href="http://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100"
                >
                  <FaTwitterSquare size={25} />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-100"
                >
                  <IoLogoLinkedin size={25} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-white flex flex-col py-3 gap-2 sm:gap-4">
            <a href="#" className="text-2xl">
              Useful Links
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/"}>Home</Link>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/about-us"}>About us</Link>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/about-us"}>Our-Services</Link>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/event"}>Events</Link>
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/blog"}>Blog</Link>
            </a> */}
            <a href="#" className="block text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/contact-us"}>Contact Us</Link>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition duration-300">
              <Link to={"/privacy"}>Privacy policy</Link>
            </a>
          </div>

          <div className="text-white flex flex-col gap-2 py-3 sm:py-4">
            <a href="#" className="text-2xl">
              Our Services
            </a>
            <li>Team Engagement</li>
            <li>Business Process Management</li>
            <li>Performance Manager</li>
            <li>Leadership Development</li>
            <li>Statutory Compliance</li>
            <li>Work Management Continuous Improvement</li>
          </div>

          <div className="py-3 flex flex-col gap-4 sm:gap-2">
            <a href="#" className="text-2xl block text-gray-100">
              Support
            </a>
            {/* Newsletter Section */}
            <div className="flex flex-col gap-3">
              <p className="text-gray-400 text-lg">Subscribe to our Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 text-black rounded-md"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && <p className="text-green-400 text-sm">Thanks for subscribing!</p>}
            </div>
          </div>
        </div>
        <hr className="text-gray-100"/><br/>
        <div className="flex justify-center text-center">
          <p className="text-gray-100">
            © 2025 Copyright Bright HR Consultancy Services. All rights reserved.
            This website developed by Mapitone
          </p>
        </div>
       
      </div>
      
    </>
  );
}

export default Footer;
