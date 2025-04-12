import React from "react";
import Home from "./Component/Home/Home";
import Sidebar from "./Component/Sidebar/Sidebar";
import About from "./Component/About/About";
import Skill from "./Component/Skills/Skill";
import Certificate from "./Component/Certificate/Certificate";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/Footer/Footer";
import Blob from "./Component/Blob/Blob";

const Main= ()=>{

	return(
        <>
         <div style={{backgroundColor:"black"}}>
         <Blob />
         <Sidebar />
         <Home />
         <About />
         <Skill />
         <Experience />
         <Project />
         <Certificate />
         <Contact />
         <Footer />
         </div>
        </>

		);
};

export default Main;