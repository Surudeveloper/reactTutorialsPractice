"use client";
import React from "react";
import Styles from "./Home.module.css";
import Accordion from "react-bootstrap/Accordion";
import AccordianComp from '@/Common/Components/AccordianComp/AccordianComp'
import AccorJson from "./includes/accordian.json";

const Home = () => {
  return (
    <div>
      <h3 className="text-center my-3">This is Home</h3>
      <AccordianComp data={AccorJson}/>
    </div>
  );
};

export default Home;
