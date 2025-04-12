import React, { useState,useRef } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Sidebar.css";
import { motion } from "framer-motion";
// import ReactTooltip from "react-tooltip";
// import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { FaHome, FaUser, FaProjectDiagram } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import { GrContact } from "react-icons/gr";
import { IoCaretUpCircle } from "react-icons/io5";
import { IoMdMusicalNote } from "react-icons/io";
import bgMusic from "../../Asset/bgMusic.mp3";

const Variant1 = {
  open: { rotate: 0 },
  close: { rotate: 180 },
};

const Variant2 = {
  show: {
    opacity: 1,
    x: 0,
    pointerEvents: "auto",
    transition: {
      type: "spring",
      stiffness: 200, // Semi-tight spring
      bounce: 0.6,    // Moderate bounce
    },
  },
  hide: {
    opacity: 0,
    x: -50,
    pointerEvents: "none",
  },
};

const Variant3 = {
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const Sidebar = () => {
  const [isShowBar, setIsShowBar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(bgMusic)); // Store the audio object in a ref

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <motion.div className="sidebar-content-box">
        <motion.div
          className="pop-icon-box"
          onClick={() => setIsShowBar(!isShowBar)}
          whileTap={{ scale: 0.7 }}
          animate={isShowBar ? "open" : "close"}
          variants={Variant1}
        >
          <IoCaretUpCircle className="pop-icon" />
        </motion.div>

        <motion.div
          className="sidebar-content"
          initial="hide"
          animate={isShowBar ? "show" : "hide"}
          variants={Variant3}
        >
          {/* Each icon is wrapped in a motion.div for Variant2 */}
          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="home" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="Home" data-tooltip-variant="light">
              <FaHome />
            </Link>
          </motion.div>

          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="about" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="About" data-tooltip-variant="light">
              <FaUser />
            </Link>
          </motion.div>

          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="skills" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="Skill" data-tooltip-variant="light">
              <GiBrain />
            </Link>
          </motion.div>

          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="experience" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="Experience" data-tooltip-variant="light">
              <MdLeaderboard />
            </Link>
          </motion.div>

          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="projects" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="Project" data-tooltip-variant="light">
              <FaProjectDiagram />
            </Link>
          </motion.div>

          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="certificate" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="Certificate" data-tooltip-variant="light">
              <PiCertificateFill />
            </Link>
          </motion.div>

          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
            <Link to="contact" smooth={true} duration={500} data-tooltip-id="sidebar-tooltip" data-tooltip-content="Contact" data-tooltip-variant="light">
              <GrContact />
            </Link>
          </motion.div>
          <motion.div variants={Variant2} whileHover={{scale:1.2}}>
             <IoMdMusicalNote onClick={toggleMusic} />
          </motion.div>
        </motion.div>
      </motion.div>
      <ReactTooltip id="sidebar-tooltip" place="right" />
    </>
  );
};

export default Sidebar;
