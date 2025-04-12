import React from "react";
import { motion } from "framer-motion";
import "./Certificate.css";

import Certificate1 from "../../Asset/Certificate1.png";
import Certificate2 from "../../Asset/Certificate2.png";
import Certificate3 from "../../Asset/Certificate3.png";
import Certificate4 from "../../Asset/Certificate4.png";
import Certificate5 from "../../Asset/Certificate5.png";
import Certificate6 from "../../Asset/Certificate6.png";
import Certificate7 from "../../Asset/Certificate7.png";
import Certificate8 from "../../Asset/Certificate8.png";
import Certificate9 from "../../Asset/Certificate9.png";
import Certificate10 from "../../Asset/Certificate10.png";

import Marquee from "react-fast-marquee";

const Certificate = ()=>{
	return(
		<>
        <div id="certificate" className="certificate-page">
  	       	<motion.div className="certificate-heading-box" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}>
  	     		{/*<h5>MY<span> CERTIFICATES</span></h5>*/}
  	     		<h5>
                <span className="thin">MY</span> <span className="thick">CERTIFICATES</span>
            </h5>

            <p>what i have achieved</p>
  	     	</motion.div>
  	     	
  	     	<div className="certificate-content-box">
  	     	
  	     	  <motion.div className="certificate-content" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1,delay:0.5}}>
                <p>My certificates showcase a commitment to lifelong learning in web development. The Ideaz Participation Certificate highlights my problem-solving skills, while the Web Development Training & Internship Certificate demonstrates practical experience.  The Silver Developer Recognition from IIT Roorkee underlines my ability to apply these skills in a broader tech environment.</p>              
            </motion.div>
              
              <Marquee direction="right" gradient="true" gradientColor="black" speed={100} className="marque">
              
              <motion.div className="certificate-img-box" initial={{opacity:0 }} whileInView={{opacity :1 }} transition={{duration:1 ,delay:0.8}}>
              
              	<div className="certificatebox">
               		<img src={Certificate1} className="certificate-icon" />
               	</div>
                <div className="certificatebox">
               		<img src={Certificate2} className="certificate-icon" />
               	</div>
                <div className="certificatebox">
               		<img src={Certificate3} className="certificate-icon" />
               	</div>
                <div className="certificatebox">
               		<img src={Certificate4} className="certificate-icon" />
               	</div>
                <div className="certificatebox">
               		<img src={Certificate5} className="certificate-icon" />
               	</div>
                <div className="certificatebox">
               		<img src={Certificate6} className="certificate-icon" />
               	</div>
                <div className="certificatebox">
                  <img src={Certificate7} className="certificate-icon" />
                </div>
                <div className="certificatebox">
                  <img src={Certificate8} className="certificate-icon" />
                </div>
                <div className="certificatebox">
                  <img src={Certificate9} className="certificate-icon" />
                </div>
                <div className="certificatebox">
                  <img src={Certificate10} className="certificate-icon" />
                </div>
 
              </motion.div>
              </Marquee>

              
            </div>
        </div>
        </>
     );
};

export default Certificate;