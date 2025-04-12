import React from "react";
import "./Skill.css";
import { motion } from "framer-motion";

import cplusplus from "../../Asset/c++.png";
import c from "../../Asset/c.png";
import css from "../../Asset/css.png";
import html from "../../Asset/html.png";
import java from "../../Asset/java.png";
import javascript from "../../Asset/javascript.png";
import python from "../../Asset/python.png";
import php from "../../Asset/php.png";
import phpadmin from "../../Asset/phpadmin.png";
import sql from "../../Asset/sql.png";
import  reactjs from "../../Asset/reactjs.png";
import  nodejs from "../../Asset/node-js.png";
import  mongo from "../../Asset/mongo.png";
import  expressg from "../../Asset/expressg.png";
import  expressw from "../../Asset/expressw.png";
import  socket from "../../Asset/socket.png";
import  framer from "../../Asset/framer.png";
import  git from "../../Asset/git.png";
import  github from "../../Asset/github.png";
import  npm from "../../Asset/npm.png";



import Marquee from "react-fast-marquee";

const Skill = ()=>{
	return(
		<>
        <div id="skills" className="skill-page">
  	      <motion.div className="skill-heading-box" initial={{opacity:0 }} whileInView={{opacity :1 }} transition={{duration:1}}>
  	     		{/*<h5><span>MY </span>SKILLS</h5>*/}
  	     		<h5>
              <span className="thick">MY</span> <span className="thin">SKILLS</span>
            </h5>
            <p>what i know</p>
  	     	</motion.div>
  	     	
  	     	<div className="skill-content-box">
  	     	
  	     	  <motion.div className="skill-content" initial={{opacity:0 }} whileInView={{opacity :1 }} transition={{duration:1}}>
               	<p>Websites are my playground, and I speak the languages that make them tick!  I know essentials like HTML, CSS, and JavaScript, but my skills go way further.  Databases (MySQL), creating web applications (PHP, Java), and even the deeper stuff (C++, Python) - I can handle it all.</p>
            </motion.div>
              

              <Marquee direction="right" gradient="true" gradientColor="black" speed={100} className="skill-marque">
              <motion.div className="skill-img-box" initial={{opacity:0 }} whileInView={{opacity :1 }} transition={{duration:1.5, delay:0.5}}>
              
              	<div className="skillbox">
               		<img src={html} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={java} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={javascript} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={python} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={cplusplus} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={css} className="skill-icon" />
               	</div>
                <div className="skillbox">
                  <img src={php} className="skill-icon" />
                </div>
                <div className="skillbox">
                  <img src={phpadmin} className="skill-icon" />
                </div>
                <div className="skillbox">
                  <img src={socket} className="skill-icon" />
                </div>
                <div className="skillbox">
                  <img src={sql} className="skill-icon" />
                </div>
              </motion.div>
              </Marquee>

              <Marquee direction="left" gradient="true" gradientColor="black"  speed={100} className="skill-marque">
              <motion.div className="skill-img-box" initial={{opacity:0 }} whileInView={{opacity :1 }} transition={{duration:1.5 ,delay:1}}>
              
              	<div className="skillbox">
               		<img src={reactjs} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={mongo} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={expressg} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={nodejs} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={npm} className="skill-icon" />
               	</div>
                <div className="skillbox">
               		<img src={c} className="skill-icon" />
               	</div>                
                <div className="skillbox">
                  <img src={framer} className="skill-icon" />
                </div>
                <div className="skillbox">
                  <img src={git} className="skill-icon" />
                </div>
                <div className="skillbox">
                  <img src={github} className="skill-icon" />
                </div>
              </motion.div>
              </Marquee>
            </div>
        </div>
        </>
     );
};

export default Skill;