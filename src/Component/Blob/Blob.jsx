// // import React,{useState} from "react";
// // import "./Blob.css";

// // const Blob = ()=>{
// //     const [position , setPosition] = useState({x:0 , y:0});

// // 	const handleMouseMove =(e)=>{
// // 		setPosition({
// // 			x : e.clientX - 50,
// // 			y : e.clientY - 50,
// // 		});
	
        
// // 	};
	
// // 	return(
// //       <>
// //         <div className="blob" onMouseMove={handleMouseMove} style={{transform: `translate3d(${position.x}px, ${position.y}px, 0)`}}></div>
// //       </>
// //       );
// // };
// // export default Blob;


// import React, { useState, useEffect } from "react";
// import "./Blob.css";

// const Blob = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({
//         x: e.clientX - 150, // Offset to center the blob
//         y: e.clientY - 150,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       className="blob"
//       style={{
//         transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
//       }}
//     ></div>
//   );
// };

// export default Blob;


import React, { useState, useEffect } from "react";
import "./Blob.css";

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX - window.innerWidth * 0.1,  // Dynamic offset
        y: e.clientY - window.innerHeight * 0.1, // Dynamic offset
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="blob"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    ></div>
  );
};

export default Blob;
