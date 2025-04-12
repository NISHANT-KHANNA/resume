import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./Component/Home/Home";
import Blob from "./Component/Blob/Blob";
import About from "./Component/About/About";
import Skill from "./Component/Skills/Skill";
import Certificate from "./Component/Certificate/Certificate";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/Footer/Footer";
import Sidebar from "./Component/Sidebar/Sidebar";
import EntryPage from "./Component/EntryPage/EntryPage";
import Main from "./Main";


function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
           {<Route path="/" element={<EntryPage/>} />}
           <Route path="/portfolio" element={<Main/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/skill" element={<Skill/>} />
           <Route path="/certificate" element={<Certificate/>} />
           <Route path="/project" element={<Project/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/experience" element={<Experience/>} />
           <Route path="/footer" element={<Footer/>} />
           <Route path="/sidebar" element={<Sidebar/>} />
           <Route path="/entrypage" element={<EntryPage/>} />
           <Route path="/blob" element={<Blob/>} />
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
