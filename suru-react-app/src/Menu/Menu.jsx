import React, { useEffect, useState } from "react";
import "./Menu.css";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import {
  Link,
  // HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

const menuItems = [
  {
    link: "/home",
    text: "Home",
  },
  {
    link: "/contact",
    text: "Contact",
  },
  {
    link: "/about",
    text: "About",
  },
];

const Menu = () => {
  const location = useLocation();
  var { pathname } = location;

  pathname = pathname === "/" ? "/home" : pathname;
  const [item, setItem] = useState(pathname);
  const [left, setLeft] = useState(-150);
  // const [isMobileMenu, setIsMobileMenu] = useState(true );
  const [isMobileMenu, setIsMobileMenu] = useState(
    document.body.clientWidth > 800 ? false : true
  );

  const handleClick = (txt) => {
    setItem(txt);
    setLeft(-150);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    var width = document.body.clientWidth;
    setIsMobileMenu(width > 800 ? false : true);
  };

  const handleMenuBtn = () => {
    setLeft(left === 0 ? -150 : 0);
    // left==(-150)?setLeft(0):setLeft(-150)
  };
  return (
    <>
      {/* <div className="menu"> */}
      {isMobileMenu && (
        <button className="menuBtn" onClick={handleMenuBtn}>
          {" "}
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      <div
        style={{ left: left }}
        className={isMobileMenu ? "mobileMenu" : "menu"}
      >
        {menuItems?.map(({ link, text }, idx) => {
          return (
            <Link
              to={link}
              key={`li_${idx}`}
              onClick={() => handleClick(link)}
              className={item === link ? "active" : ""}
            >
              {text}
            </Link>
          );
        })}
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Navigate to="home" />} />
      </Routes>
    </>
  );
};

export default Menu;
