import React from "react";
import "../css/dashboard.css";
import "../css/card.css";
import Graph from "./Graph";
import profile from "../images/profile.png";
import { AiFillGithub } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";

export default function Dashboard() {
  const data = [
    <li>
      Greentick Weekly 19<br></br>
      <h6>December 18 2020 at 2:00 PM</h6>
    </li>,
    <li>
      Greentick Weekly 19<br></br>
      <h6>December 18 2020 at 2:00 PM</h6>
    </li>,
    <li>
      Greentick Weekly 19<br></br>
      <h6>December 18 2020 at 2:00 PM</h6>
    </li>,
    <li>
      Greentick Weekly 19<br></br>
      <h6>December 18 2020 at 2:00 PM</h6>
    </li>,
  ];

  return (
    <div className="my-grid">
    <div className="cards1">
      <div className="card2" id="card1">
        <img src={profile}></img>
        <div className="box_content">
          <h2>Sajal Gupta</h2>
          <h4>ultimate_coder</h4>
        </div>
      </div>
      <div className="card2" id="card2">
      <div className="problem_solved">
      <h6 style={{color:"#960f0f",fontWeight:"900"}}>Problem Solved</h6>
      
      <span style={{fontWeight:"700"}}>200</span>
      </div>
      <div className="level">
        <h4 style={{color:"green",fontWeight:"900"}}>Easy<br></br><h5>200</h5></h4>
        <h4 style={{color:"#ffa800",fontWeight:"900"}}>Medium<br></br><h5>200</h5></h4>
        <h4 style={{color:"red",fontWeight:"900"}}>Hard<br></br><h5>200</h5></h4>
      </div>
      
      </div>

      <div className="card2" id="card3">
        <div className="react_icons">
          <AiFillGithub
            size={30}
            color="black"
            style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
          ></AiFillGithub>
          <FaHackerrank
            size={30}
            color="black"
            style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
          ></FaHackerrank>
          <SiCodechef
            size={30}
            color="black"
            style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
          >
            {" "}
          </SiCodechef>
          <AiFillLinkedin
            size={30}
            color="black"
            style={{ marginLeft: 10, marginRight: 10, cursor: "pointer" }}
          ></AiFillLinkedin>
        </div>
      </div>

      <div className="card2" id="card4">
        <div className="table">
          <ol className="dash-custom-counter">
            <h5 className="tableHeading">Previous Contest</h5>
            {data.map(items=>{
              return items
            })}
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
}
