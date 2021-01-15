import React from "react";
import "../css/dashboard.css";
import "../css/card.css";
import Graph from "./Graph";
import profile from "../images/profile.png";
import { AiFillGithub } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";

class Dashboard extends React.Component{
   data = [
      {
        name:"Greentick Weekly 19",
        date:"December 18 2020 at 2:00 PM"
      },
      {
        name:"Greentick Weekly 19",
        date:"December 18 2020 at 2:00 PM"
      },
      {
        name:"Greentick Weekly 19",
        date:"December 18 2020 at 2:00 PM"
      },
      {
        name:"Greentick Weekly 19",
        date:"December 18 2020 at 2:00 PM"
      },
      {
        name:"Greentick Weekly 19",
        date:"December 18 2020 at 2:00 PM"
      },
      {
        name:"Greentick Weekly 19",
        date:"December 18 2020 at 2:00 PM"
      },

      

      
  ];
  componentDidMount() {
   const  graphPercentage=74;
    var canvas = this.refs.canvas;
    canvas = this.refs.canvas
    const context = canvas.getContext('2d');  
    var al=0;
var start=4.72;
var cw=context.canvas.width/2;
var ch=context.canvas.height/2;
var diff;
const progressBar=()=>{
diff=(al/100)*Math.PI*2;
context.clearRect(0,0,400,200);
context.beginPath();
context.arc(cw,ch,50,0,2*Math.PI,false);
context.fillStyle='#FFF';
context.fill();
context.strokeStyle='#e7f2ba';
context.stroke();
context.fillStyle='#000';
context.strokeStyle='#008000';
context.textAlign='center';
context.lineWidth=15;
context.font = '10pt Verdana';
context.beginPath();
context.arc(cw,ch,50,start,diff+start,false);
context.stroke();
context.fillText(al+'%',cw+2,ch+6);
if(al>=graphPercentage){
clearTimeout(bar);
}
 
al++;
}
const bar=setInterval(progressBar,15);
} 
   render(){
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
      <div className="problem_solved" style={{display:"flex"}}>
      <h6 style={{color:"#960f0f",fontWeight:"900"}}>Problem Solved<br></br><span style={{fontWeight:"700",color:"black"}}>200</span></h6>
      
      
      <div className="canvas">

      <canvas ref="canvas" width={250} height={200} style={{    display: "inline-block",
        top: "-42px",
        position: "relative",
      
        left: "155px"}}/>
      
      </div>

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
            {this.data.map(items=>{
              return <li>
                {items.name}<br></br>
                <h6 style={{    right: "0.6em"}}>{items.date}</h6>
              </li>
            })}
          </ol>
        </div>
      </div>
    </div>
    </div>
  );
          }
}

export default Dashboard