import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./entrypage.css";
import { motion, AnimatePresence } from "framer-motion";

const EntryPage = () => {
  const [isVisible, setIsVisible] = useState(true); // Tracks whether the text is visible
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false); // Trigger the exit animation
    }, 2500);

    setTimeout(() => {
      navigate("/main"); // helps in navigating to the next page automatically
    }, 6000);

  }, [navigate]);

  return (
    <div className="main">
      <motion.div
        className="inner"
        animate={{
          scaleX: [0, 0.8, 1, 1.2, 70], 
          scaleY: [0, 0.4, 1.2, 1.2, 70],
          rotate: [0, 0, 0, 180, 180],
          borderRadius: ["0%", "5%", "5%", "50%", "50%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      ></motion.div>

      {/* Use AnimatePresence for smooth exit */}
      <AnimatePresence>
        {isVisible && (
          <motion.h1
            className="hello-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0, }} // Exit animation
            transition={{
               duration: 1, delay: 2, ease: "easeInOut" ,
            }}
          >
            Hello!
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EntryPage;
