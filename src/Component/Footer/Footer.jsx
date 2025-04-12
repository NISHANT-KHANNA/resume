import React, { useState,useEffect } from "react";
import "./Footer.css";
import { Link } from "react-scroll";

import footerpic from "../../Asset/footerpic.png";
import { FaJetFighterUp } from "react-icons/fa6";
import { motion } from "framer-motion";

// Variants for the hidden div animation
const divVariants = {
  show: { height: "100vh", opacity: 1 },
  hide: { height: "0px", opacity: 0 },
};

// Variants for the airplane animation
const planeVariants = {
  show: { y: -200, opacity: 1 },
  hide: { y: 0, opacity: 1 },
};

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(true);
  // };
const handleClick = () => {
    setIsClicked(true);
     
     // Reset after animation completes
  };
  console.log(isClicked);
  // useEffect(()=>{
  //   setTimeout(() => setIsClicked(false), 1000);
  // },[isClicked]);
useEffect(() => {
  setTimeout(() => {
      setIsClicked(false);
    }, 60000); 
  console.log(`isClicked state changed: ${isClicked}`);
}, [isClicked]);
  

  return (
    <div className="footer-page">
      <img src={footerpic} alt="pic" className="footer-icon" />
      <div className="footer-content-box">
        <div className="footer-left-box">
          <h4>NK</h4>
          <p>PORTFOLIO</p>
        </div>
        <div className="footer-right-box">
          <div className="footer-info">
            <p>@ 2024-Copyright</p>
            <p>Designed by Nishant with ❤️</p>
          </div>

          {/* Airplane animation */}
          <motion.div
            className="airplane"
            initial="hide"
            animate={isClicked ? "show" : "hide"}
            variants={planeVariants}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setIsClicked(false)} // Reset animation after completion
          >
          <Link to="home" smooth={true} duration={500}>
            <FaJetFighterUp className="arrow-icon" onClick={handleClick} />
          </Link>
          </motion.div>
        </div>
      </div>

      {/* Hidden div animation */}
      <motion.div
        className="animate-div"
        initial="hide"
        animate={isClicked ? "show" : "hide"}
        variants={divVariants}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setIsClicked(false)}
      ></motion.div>
    </div>
  );
};

export default Footer;
