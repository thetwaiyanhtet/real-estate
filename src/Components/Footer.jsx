import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <p className=" md:text-base text-sm w-[88%] mx-auto my-20 tracking-wider leading-6">
        <a href="#" className="link">
          RentAll.com
        </a>{" "}
        is the leading Singapore Property website - the best place to start your
        real estate search whether you are an investor, buying for own use, or
        looking for a place to rent. In PropertyGuru, you can find thousands of
        properties for sale and rent with detailed information about each
        property, including maps and photos. We bring you the most comprehensive
        selection in the market - the most popular{" "}
        <a href="" className=" link">
          condominiums
        </a>
        ,{" "}
        <a href="" className=" link">
          apartments
        </a>
        ,{" "}
        <a href="" className=" link">
          HDB flats
        </a>
        ,{" "}
        <a href="" className=" link">
          Executive Condominiums
        </a>
        ,{" "}
        <a href="" className=" link">
          houses 
        </a>
        and{" "}
        <a href="" className=" link">
          commercial properties
        </a>
        . Read more
      </p>
      <div className=" capitalize flex flex-col mt-10 py-7 bg-gray-200">
        <div className=" flex justify-around flex-wrap gap-4">
          <ul className=" footer-nav-menu">
            <li className="menu-header">RentAll Group</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
          <ul className=" footer-nav-menu">
            <li className="menu-header">Navigation</li>
            <li>Home</li>
            <li>Developers</li>
            <li>Agencies</li>
            <li>Search on map</li>
            <li>FAQs</li>
            <li>News</li>
          </ul>
          <ul className=" footer-nav-menu">
            <li className="menu-header">Real Estate</li>
            <li>New Development</li>
            <li>Apartments</li>
            <li>HDB</li>
            <li>Commercial</li>
            <li>Townhouse</li>
            <li>Hotel Apartment</li>
            <li>Office</li>
            <li>Shop</li>
          </ul>
          <ul className=" footer-nav-menu">
            <li className="menu-header">Discover</li>
            <li>Mortage Loan</li>
            <li>Mortage Calculator</li>
            <li>Properties Tools</li>
            <li>Advertise with us</li>
          </ul>
          <ul className=" footer-nav-menu">
            <li className="menu-header">Social</li>
            <ul className=" flex space-x-3">
              <li className=" cursor-pointer">
                <BsFacebook className=" size-8" />
              </li>
              <li className=" cursor-pointer">
                <AiOutlineInstagram className=" size-8" />
              </li>
              <li className=" cursor-pointer">
                <AiFillTwitterCircle className=" size-8" />
              </li>
              <li className=" cursor-pointer">
                <ImLinkedin className=" rounded-full size-8" />
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <p className=" bg-gray-800 text-white text-center p-4 text-xs md:text-sm">
        All right are reserved. Business registration number #1234
      </p>
    </div>
  );
};

export default Footer;
