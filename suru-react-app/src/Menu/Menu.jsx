import React, { useState } from "react";
import "./Menu.css";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import { Link, HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

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
  const location=useLocation();
  const {pathname}=location
  const [item,setItem]=useState(pathname)
  
  const handleClick=(txt)=>{
    setItem(txt)
  }
  return (
    <>
      <div className="menu">
        {/* <Home/>
      <Contact/>
      <About/> */}
        {/* <a href="/home">Home</a>
      <a href="/contact">Contact</a>
      <a href="/about">About</a> */}
        {menuItems?.map(({ link, text }, idx) => {
          return (
            <Link to={link} key={`li_${idx}`} onClick={()=>handleClick(link)} className={item==link?'active':''}>
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
