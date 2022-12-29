import React, { useState } from "react";
import "./program.css";
const Program = () => {
  let [show,setShow] = useState("mentors")
  return (
    <div id="programContainter">
      <h2>Expore what we provide...</h2>
      <div className="buttonContainer">
        <button onClick={()=>setShow("mentors")} style={{backgroundColor:show==="mentors"?"white":"black", color:show==="mentors"?"black":"white", border:"none"}}>Mentors</button>
        <button onClick={()=>setShow("facilities")} style={{backgroundColor:show==="facilities"?"white":"black", color:show==="facilities"?"black":"white", border:"none"}}>Facilities</button>
      </div>
      <div className="cardContainer">
        
        <div className="card">
          <img
            // style={{width:"304px",height:"300px"}}
            className="cardImage"
            src={show==="mentors"?"assets/mentor1.jpg":"assets/facilities1.jpg"}
            alt=" workout"
          />
          <div className="cardDetails">
          {show==="mentors"?"Henry wills":"Best of the best traing facilities."}
          </div>
        </div>
        <div className="card">
          <img
            // style={{width:"304px",height:"300px"}}
            className="cardImage"
            src={show==="mentors"?"assets/mentor2.jpg":"assets/facilities3.jpg"}
            alt=" workout"
          />
          <div className="cardDetails">
            {show==="mentors"?"Rosan Patel":"Best of the best trainers"}
          </div>
        </div>
        <div className="card">
          <img
            // style={{width:"304px",height:"300px"}}
            className="cardImage"
            src={show==="mentors"?"assets/mentor3.jpg":"assets/facilities2.jpg"}
            alt=" workout"
          />
          <div className="cardDetails">
          {show==="mentors"?"Julia Mires":"Best of the best equipments."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
