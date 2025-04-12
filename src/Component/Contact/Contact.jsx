import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
// import Footer from "../Footer/Footer";


const Contact= ()=>{
    const handleClick = (url) => {
      window.open(`https://${url}`, "_blank", "noopener,noreferrer");
    };
   
    const handleEmailClick = () => {
      const email = "nishantkhanna5008@gmail.com";
      const subject = encodeURIComponent("Let's Connect!");
      const body = encodeURIComponent("Hello, I would like to discuss...");
      const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
      window.open(mailtoURL, "_blank", "noopener,noreferrer");
    };

    return(
        <>
         <motion.div id="contact" className="contact-page" >
  		   
           <motion.div className="contact-heading-box" initial={{opacity:0 , y:-30}} whileInView={{opacity :1 , y:0}} transition={{duration:1}}>
  	     		{/*<h5><span>CONTACT </span>ME</h5>*/}
            <h5>
              <span className="thick">CONTACT</span> <span className="thin">ME</span>
            </h5>
  	     		<p>get in touch</p>
  	     	</motion.div>

  	     	<div className="contact-content-box">
              
             <div className="contact-content">
                 <motion.div className="contact-description" initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1}}>
              	   <h1>Let's <span>talk</span> for</h1>
              	   <h1>Something special</h1>
              	   <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                 </motion.div>
              
                 <motion.div className="contact-information" initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:0.3}}>
              	   <h2>nishantkhanna5008@gmail.com</h2>
              	   <h2>96081XXXXX</h2>
                 </motion.div>
              
                 <div className="contact-sites">
              	   <motion.button onClick={handleEmailClick} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:0.5}}>Get In Touch</motion.button>
                   <motion.button onClick={() => handleClick("github.com/NISHANT-KHANNA/")} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:0.8}}><FaGithub /></motion.button>
                   <motion.button onClick={() => handleClick("www.linkedin.com/in/nishantkhanna21/")} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:1.2}}><IoLogoLinkedin /></motion.button>
                   <motion.button onClick={() => handleClick("wa.me/919608104544?text=Hello%20there!")} initial={{opacity:0 , x:-30}} whileInView={{opacity :1 , x:0}} transition={{duration:1,delay:1.5}}><IoLogoWhatsapp /></motion.button>
                 </div>
               </div>
  	     	</div>
  	     </motion.div>
         {/*<Footer />*/}
        </>
    );
};

export default Contact;
