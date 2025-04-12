import React ,{ useEffect, useRef } from "react";
import Typed from 'typed.js';
import ArrowIcon from "../../Asset/arrowIcon.png";
import HomeIcon from "../../Asset/homeIcon.jpg";
import GithubIcon from "../../Asset/github.png";
import LinkedinIcon from "../../Asset/linkedin.png";
// import "@fontsource/poppins";
import { Link } from "react-scroll";
import "@fontsource/sora";
import { motion } from "framer-motion";

import "./Home.css";
const Home = ()=>{
  const el = useRef(null); // Create a reference to store the DOM element for animation
   useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Developer', 'Designer'],
            typeSpeed: 150, // Typing speed
            backSpeed: 100, // Erasing speed
            backDelay: 1000, // Delay before starting to erase
            startDelay: 500, // Delay before starting typing
            loop: true, // Loop the animation
            showCursor: true, // Show the blinking cursor
            cursorChar: '|', // Customize the cursor character
        });

        // Cleanup the Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []);

     const handleClick = (url) => {
      window.open(`https://${url}`, "_blank", "noopener,noreferrer");
    }; 
	return(
      <>
       <div id="home" className="hero-page">
         <div className="hero-upperPart" >
  		    <motion.div className="hero-content-box" initial={{opacity:0 , x:-40}} whileInView={{opacity :1 , x:0}} transition={{duration:1}}>
              <div className="wrapper">
  			    <div class="hero-content">
  				    <p>Hey, I'm <span id="grad1">Nishant</span></p>
  				    <h1><span id="grad2">Web </span><span id="grad3" ref={el}> </span></h1>
  				    <p>Based in <span id="grad4">India.</span></p>
  			    </div>

  			    <div className="hero-icon">
  				     <img src={GithubIcon} className="icon" onClick={() => handleClick("github.com/NISHANT-KHANNA/")}/>
  				     <img src={LinkedinIcon} className="icon" onClick={() => handleClick("www.linkedin.com/in/nishantkhanna21/")}/>
  			    </div>
              </div>
  		    </motion.div>

  		    <motion.div className="hero-image-box" initial={{opacity:0 , x:40}} whileInView={{opacity :1 , x:0}} transition={{duration:1}}>
  	             <img src={HomeIcon} alt="home" className="hero" />
  		    </motion.div>

  		</div>

        <Link to="about" smooth={true} duration={500}>
        <motion.div className="hero-lowerPart" initial={{opacity:0 , y:30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}> 
  		  <motion.div whileTap={{ scale: 0.9 }} className="swipePart">
  		     <img src={ArrowIcon} className="Arrowicon"/>
  			 <h2>ABOUT ME</h2> 
  	    </motion.div>
  	    </motion.div>
        </Link>
  	</div>
      </>
		);
};

export default Home;