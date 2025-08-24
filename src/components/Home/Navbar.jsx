import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuIcon from '../../assets/menu.png'
import crossIcon from '../../assets/close.png'

const Navbar = ({NavbarClassName}) => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [menuIconClicked, setMenuIconClicked] = useState(false)
  const location = useLocation().pathname==='/'

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight - 100;
      if (window.scrollY > triggerHeight) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
      // console.log(window.innerHeight-100)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` bg-white z-50  w-full ${
        navbarFixed
          ? "fixed top-0 bg-white opacity-100 shadow-lg"
          : location ?"absolute top-0 lg:opacity-55 lg:bg-navbar-bg":"bg-white opacity-100 shadow-lg"
      }`}
    >
      <nav className="flex items-center justify-between max-w-[80%] mx-auto h-20 ">
        <div>
          <p
            className={`md:text-[2rem] text-xl font-[1000]  ${
              navbarFixed ? "text-custom-black " :location? "text-white":"text-black"
            }`}
          >
            CAR DEALER <span className="text-custom1">WEBSITE</span>
          </p>

        </div>
        <div className="md:w-8 sm:w-4 lg:hidden">
          <img src={menuIconClicked?crossIcon:menuIcon} onClick={()=>setMenuIconClicked(!menuIconClicked)} alt="menu icon" />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-10">
            <Link to={'/'}>
            <li
              className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${
                navbarFixed ? "text-black" :location?"text-white":"text-black"
              }`}
            >
              HOME
            </li>
            </Link>
            
            <Link to={'/car'}>
            <li
              className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${
                navbarFixed ? "text-black" : location?"text-white":"text-black"
              }`}
            >
              CARS
            </li>
            </Link>
            
            <li
              className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${
                navbarFixed ? "text-black" : location?"text-white":"text-black"
              }`}
            >
              ABOUT
            </li>
            <li
              className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${
                navbarFixed ? "text-black" : location?"text-white":"text-black"
              }`}
            >
              CONTACT
            </li>
          </ul>
        </div>
        <div className="hidden">
          <ul className="flex items-center justify-center flex-col">
            <li>HOME</li>
            <li>CARS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="flex lg:hidden">

          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
