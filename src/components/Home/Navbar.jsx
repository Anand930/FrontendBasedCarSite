import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import menuIcon from '../../assets/menu.png'
import crossIcon from '../../assets/close.png'

const Navbar = ({ NavbarClassName }) => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [aboutWindowOpen, setAboutWindowOpen] = useState(false)
  const [menuIconClicked, setMenuIconClicked] = useState(false)
  const location = useLocation().pathname === '/'

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
      className={` bg-white z-50  w-full ${navbarFixed
          ? "fixed top-0 bg-white opacity-100 shadow-lg"
          : location ? "absolute top-0 lg:opacity-55 lg:bg-navbar-bg" : "bg-white opacity-100 shadow-lg"
        }`}
    >
      <nav className="flex items-center justify-between lg:max-w-[80%] w-5/6 mx-auto h-20 ">
        <div>
          <p
            className={`md:text-[2rem] text-xl font-[1000]  ${navbarFixed ? "text-custom-black " : location ? "lg:text-white text-black text" : "text-black"
              }`}
          >
            CAR DEALER <span className="text-custom1">WEBSITE</span>
          </p>

        </div>
        <div className="md:w-8 sm:w-4 w-4 h-4 lg:hidden ">
          <img className="w-full h-full object-contain cursor-pointer select-nones" src={menuIconClicked ? crossIcon : menuIcon} onClick={() => setMenuIconClicked(!menuIconClicked)} alt="menu icon" />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-10">
            <Link to={'/'}>
              <li
                className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${navbarFixed ? "text-black" : location ? "text-white" : "text-black"
                  }`}
              >
                HOME
              </li>
            </Link>

            <Link to={'/car'}>
              <li
                className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${navbarFixed ? "text-black" : location ? "text-white" : "text-black"
                  }`}
              >
                CARS
              </li>
            </Link>

            <li
              className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${navbarFixed ? "text-black" : location ? "text-white" : "text-black"
                }`} onClick={() => setAboutWindowOpen(!aboutWindowOpen)}
            >
              ABOUT <IoMdArrowDropdown className="inline-block" size={15} />
            </li>
            <Link to={'/contact'}>
            <li
              className={`text-sm font-semibold hover:text-custom1 hover:cursor-pointer ${navbarFixed ? "text-black" : location ? "text-white" : "text-black"
                }`}
            >
              CONTACT
            </li>
            </Link>
          </ul>
        </div>
        <div className={menuIconClicked ? "flex lg:hidden"  : "hidden"}>
          <ul className="flex items-center justify-center flex-col absolute right-5 top-16 gap-4 border-2 border-gray-300 bg-custom1 py-2 px-3 rounded-xl text-white z-20 ">
            <Link to={'/'}><li className="hover:text-custom1 hover:bg-white hover:cursor-pointer w-full text-center px-2 py-1 rounded-xl flex items-center justify-center">HOME</li></Link>
            <Link to={"/car"}><li className="hover:text-custom1 hover:bg-white hover:cursor-pointer w-full text-center px-2 py-1 rounded-xl flex items-center justify-center">CARS</li></Link>
            <Link><li className="hover:text-custom1 hover:bg-white hover:cursor-pointer w-full text-center px-2 py-1 rounded-xl flex items-center justify-center">ABOUT</li></Link>
            <Link><li className="hover:text-custom1 hover:bg-white hover:cursor-pointer w-full text-center px-2 py-1 rounded-xl flex items-center justify-center">CONTACT</li></Link>
          </ul>
        </div>
        <div className="flex lg:hidden">


        </div>
        <div>
          <ul className="flex flex-col absolute top-16 bg-black opacity-50 border-2 border-black py-3 px-5 gap-3  shadow-lg z-10 right-1/3 translate-x-1/2 text-white" style={{ display: aboutWindowOpen ? 'flex' : 'none' }}>
            <Link to={"/aboutus"}><li className="text-sm font-semibold hover:text-custom1 hover:cursor-pointer">ABOUT US</li></Link>
            <Link to={"/blog"}><li className="text-sm font-semibold hover:text-custom1 hover:cursor-pointer">BLOG</li></Link>
            <Link to={"/team"}><li className="text-sm font-semibold hover:text-custom1 hover:cursor-pointer">TEAM</li></Link>
            <Link to={"/testimonials"}><li className="text-sm font-semibold hover:text-custom1 hover:cursor-pointer">TESTIMONIALS</li></Link>
            <Link to={"/faq"}><li className="text-sm font-semibold hover:text-custom1 hover:cursor-pointer">FAQ</li></Link>
            <Link to={"/terms"}><li className="text-sm font-semibold hover:text-custom1 hover:cursor-pointer">TERMS</li></Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
