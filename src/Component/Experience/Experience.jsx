import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { IoLogoWhatsapp } from "react-icons/io";

import logo1 from "../../Asset/logo1.png";
import logo2 from "../../Asset/logo2.png";
import logo3 from "../../Asset/logo4.png";
const Experience= ()=>{

  return(
        <>
<motion.div  id="experience" className="experience-page" initial={{opacity:0 , scale:0}} whileInView={{opacity :1 , scale:1 , backgroundColor:"#FDF7F7"}} transition={{duration:0.5}}>
      
          <motion.div className="experience-heading-box" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}>
            {/*<h5>MY<span> EXPERIENCE</span></h5>*/}
            <h5>
                <span className="thin">MY</span> <span className="thick">EXPERIENCE</span>
            </h5>

            <p>what i know</p>
          </motion.div>
          
          <div className="experience-content-box">
             
             <motion.div drag 
                         dragSnapToOrigin={true} 
                         whileHover={{scale:1.03}} 
                         dragConstraints={{left: -1,right:1,top:-1,bottom:1}} 
                         className="experience-box"
                         initial={{opacity:0 , x:-60}} whileInView={{opacity :1 , x:0}} transition={{duration:1 , delay:0.5}}>
                 <div className="experience-content-heading">
                    <div className="heading-left">
                        <img src={logo1} alt="icon" className="experience-icon" />
                        {/*<IoLogoWhatsapp className="experience-icon" />*/}
                        <p>Intern at Writo Edu. Pvt. Ltd.</p>
                    </div>
                         <p className="tenure">July, 2024</p>
                 </div>
                 <div className="experience-description">
                 

                   <p>During my internship at Writo Education, I contributed as both a graphic designer and web developer. I designed engaging marketing materials, including flyers and social media content, to strengthen the company's digital presence. On the technical side, I developed the Writo Test Series platform using React.js, Node.js, and Express.js, incorporating secure authentication systems for student and admin logins,test-taking modules with real-time validation, and performance analytics. This role sharpened my skills in full-stack development, UI/UX design, and collaboration while delivering impactful solutions for student success.</p>
                 </div>
             </motion.div>

             <motion.div drag 
                         dragSnapToOrigin={true} 
                         whileHover={{scale:1.03}} 
                         dragConstraints={{left: -1,right:1,top:-1,bottom:1}} 
                         className="experience-box"
                         initial={{opacity:0 , x:60}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:1.2}}>
                 <div className="experience-content-heading">
                    <div className="heading-left">
                        <img src={logo2} alt="icon" className="experience-icon" />
                        {/*<IoLogoWhatsapp className="experience-icon" />*/}
                        <p>Intern at  NIELIT, Patna</p>
                    </div>
                         <p className="tenure">July, 2024</p>
                 </div>
                 <div className="experience-description">
                   <p>During my training and internship at the National Institute of Electronics and Information Technology (NIELIT),I gained hands-on experience in web development, mastering technologies like HTML, CSS, JavaScript, MySQL, and PHP. I worked on two significant projects: an Entry-Exit Surveillance System, designed to enhance security by tracking movements at entry and exit points, and a Complaint Redressal System for my college hostel, streamlining the grievance submission and resolution process. These projects allowed me to apply my skills, addressing real-world problems and strengthening my technical and problem-solving abilities.</p>
                 </div>
             </motion.div>

             <motion.div drag 
                         dragSnapToOrigin={true} 
                         whileHover={{scale:1.03}} 
                         dragConstraints={{left: -1,right:1,top:-1,bottom:1}} 
                         className="experience-box"
                         initial={{opacity:0 , x:-60}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:1.5}}>
                 <div className="experience-content-heading">
                    <div className="heading-left">
                        <img src={logo3} alt="icon" className="experience-icon" />
                        {/*<IoLogoWhatsapp className="experience-icon" />*/}
                        <p>Intern at VLABS IIT-Roorkee</p>
                    </div>
                         <p className="tenure">July, 2024</p>
                 </div>
                 <div className="experience-description">
                   <p>As a Virtual Developer with IIT Roorkee, I collaborated with faculty members to develop virtual simulation labs for the Electrical Engineering Department. Leveraging JS libraries like Chart.js and jsPlumb, I created interactive and educational experiments that enhanced user engagement and learning. This experience allowed me to apply my skills in creating realistic simulations. My contributions were recognized with the prestigious Silver Developer award from IIT Roorkee, reflecting my technical proficiency and dedication.</p>
                 </div>
             </motion.div>

          </div>
   
  </motion.div>
   </>
    );
};

export default Experience;
