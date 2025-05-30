import React from "react";
import { motion } from "framer-motion";
import "./Project.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import project1 from "../../Asset/project1.jpg";
import project2 from "../../Asset/project2.jpg";
import project3 from "../../Asset/project3.jpg";
import ArrowIcon from "../../Asset/arrowIcon.png";


const Project= ()=>{
	const handleNavigation = () => {
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
    };
    
	return(
		<>
  	<div id="projects" className="project-page">
  		 <motion.div className="project-heading-box" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}>
  	     		{/*<h5><span>MY</span> PROJECTS</h5>*/}
  	     		<h5>
                  <span className="thick">MY</span> <span className="thin">PROJECTS</span>
                </h5>
                <p>what i made</p>
  	     </motion.div>
  	     	
  	     <div className="project-content-box">
             
             <motion.div className="project-box" initial={{opacity:0 , x:60}} whileInView={{opacity :1 , x:0}} transition={{duration:0.5 , delay:0.5}}>
             	<div className="project-img">
             		<img src={project1} className="project-icon" />
             	</div>
             	<div className="project-content">
             		<h1>01 </h1>
             		<h3>Ecotracks: Navigating Railways Through Voice</h3>
             		<p>This project uses speech recognition to understand what you need and respond with real-time train info.  Imagine asking for arrival times or station details - simply by speaking up! EcoTracks makes railways accessible and eco-friendly, one conversation at a time.</p>
             	    <a href="https://github.com/NISHANT-KHANNA/ecotracks" target="_blank">
                       <IoLogoGooglePlaystore  className="demo-button"/>
                    </a>
             	</div>
             </motion.div>
             
             <motion.div className="project-box" initial={{opacity:0 , x:-60}} whileInView={{opacity :1 , x:0}} transition={{duration:0.5 , delay:0.5}}>
             	<div className="project-content">
             		<h1>02</h1>
             		<h3>Writo Test Series</h3>
             		<p>This project was developed for Writo Educ. Pvt. Ltd.,an educational platform simulating competitive exams like NEET and JEE. Built with React.js, Node.js,Express.js and MongoDB, it offers user-friendly interfaces for students to attempt tests and track performance, while enabling administrators to manage content and generate reports. This platform enhances exam preparation through interactive features and efficient performance tracking.</p>
             	    <a href="https://github.com/NISHANT-KHANNA/Writo" target="_blank">
                       <IoLogoGooglePlaystore  className="demo-button"/>
                    </a>
             	</div>
             	<div className="project-img">
             		<img src={project2} className="project-icon" />
             	</div>
             </motion.div>
             
             <motion.div className="project-box" initial={{opacity:0 , x:60}} whileInView={{opacity :1 , x:0}} transition={{duration:1 , delay:0.5}}>
             	<div className="project-img">
             		<img src={project3} className="project-icon" /> 
             	</div>
             	<div className="project-content">
             		<h1>03</h1>
             		<h3>Doodle Dash</h3>
             		<p>Doodle Dash is a multiplayer game combining creativity and quick thinking, where players draw on a shared whiteboard while others guess in real time. Built using React.js for a dynamic UI, Node.js for server-side logic, and Socket.io for real-time communication, it delivers a seamless gaming experience. The project honed my full-stack development skills and expertise in real-time web applications.</p>
             	    <a href="https://github.com/NISHANT-KHANNA/major_frontend" target="_blank">
                       <IoLogoGooglePlaystore  className="demo-button"/>
                    </a>
             	</div>
             </motion.div>
  	    </div>
  	    
  	    <motion.div whileTap={{ scale: 0.9 }} className="swipePartP" onClick={handleNavigation} initial={{opacity:0 , y:30}} whileInView={{opacity :1 , y:0}} transition={{duration:1 }}>
  		     <img src={ArrowIcon}  className="Arrowicon"/>
  			 <h2>MORE PROJECTS</h2> 
  	    </motion.div>
  	</div>
    </>
     );
};

export default Project;

