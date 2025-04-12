import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import profilePic from "../../Asset/profilePic.jpg";

const About = ()=>{

  const handleResume = ()=>{
    window.open(`https://drive.google.com/file/d/16eJEuPoIhSe9FIT5Dkee-o4PtM5ZEdFk/view`, "_blank", "noopener,noreferrer");
  }
	return(
      <>
        <div id="about" className="about-page">
  	      <motion.div className="about-heading-box" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}>
  	     		{/*<h5>ABOUT <span>ME</span></h5>*/}
  	     		<h5>
                <span className="thin">ABOUT</span> <span className="thick">ME</span>
            </h5>

            <p>who i am</p>
  	     	</motion.div>
  	     	<div className="about-content-box">
  	     		<motion.div className="about-img" initial={{opacity:0 , x:-40}} whileInView={{opacity :1 , x:0}} transition={{duration:1}}>
  	     			<img src={profilePic} className="profilePic" />
  	     		</motion.div>
  	     		<motion.div className="about-content" initial={{opacity:0 , x:40}} whileInView={{opacity :1 , x:0}} transition={{duration:0.5}}>
  	     		    	<p className="heading-line">Nishant Khanna: The Happy Coder!</p>

  	     			
  	     				<p>I am <span>Nishant Khanna</span>, a Patna-based web developer with a passion for breathing life into ideas and I'm totally into building websites. Actually, I love everything about them, from the fancy design (front-end) to the brainy stuff that makes them work (back-end). School was a great start (scoring a whopping 92% in matriculation and 90% in 12th at Don Bosco Academy!), but for me, the coolest learning comes when I'm working on websites, deep in the code! So, are you ready to take your vision from concept to reality?  Let's chat and turn those sparks into stunning websites.  Together, we can bring your ideas to life, pixel-by-pixel and line-by-line.</p>

  	     			
  	     				<motion.button type="button" whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.05 }} onClick={handleResume}>RESUME</motion.button>

  	     		</motion.div>
  	     	</div>
  	     </div>	
  	
      </>

      );
};

export default About;