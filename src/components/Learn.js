import React from "react";
import "../css/Learn.css";
import ProgressBar from "./progress-bar.component";
import {Link} from 'react-router-dom'


function Learn() {

	 var done1=2;
	 var total1=6;
	 var completed1=Math.floor( done1*100/total1);
	 
	 var done2=3;
	 var total2=6;
	 var completed2=Math.floor( done2*100/total2);
	 
	 var done3=4;
	 var total3=6;
	 var completed3=Math.floor( done3*100/total3);
	 
	 var done4=4;
	 var total4=16;
	 var completed4=Math.floor( done4*100/total4);
	 
	 var done5=6;
	 var total5=8;
	 var completed5=Math.floor( done5*100/total5);
	 
  return (
    	
    <div className="Learn">
    	<h1>Learn</h1>
    
 
    <div className="contentl">
        <div className="cardl1">
        <Link id="arrays" to='/Practice'>
          <div className="card__inside">        
          <h4 style={{color:"#000",fontWeight:"600",margin:"0.3em",fontSize:"2.8vh"}}>Arrays</h4>
          <ProgressBar bgcolor="#0FBB00" completed={`${completed1}`} subtopics={`${done1}/${total1}`}/>
           </div>
           </Link>
           </div>
      </div>
      
      <div className="contentl">
        <div className="cardl2">
        <Link id="arrays" to='/Practice'>
          <div className="card__inside">
          <h4 style={{color:"#000",fontWeight:"600",margin:"0.3em",fontSize:"2.8vh"}}>DP</h4>
          <ProgressBar bgcolor="#0FBB00" completed={`${completed2}`} subtopics={`${done2}/${total2}`}/>
           </div>
           </Link>
           </div>
      </div>
    
    <div className="contentl">
        <div className="cardl3">
        <Link id="arrays" to='/Practice'>
          <div className="card__inside">
          <h4 style={{color:"#000",fontWeight:"600",margin:"0.3em",fontSize:"2.8vh"}}>Linked Lists</h4>
          <ProgressBar bgcolor="#0FBB00" completed={`${completed3}`} subtopics={`${done3}/${total3}`}/>
           </div>
           </Link>
           </div>
      </div>
      
      <div className="contentl">
        <div className="cardl4">
        <Link id="arrays" to='/Practice'>
          <div className="card__inside">
          <h4 style={{color:"#000",fontWeight:"600",margin:"0.3em",fontSize:"2.8vh"}}>Trees</h4>
          <ProgressBar bgcolor="#0FBB00" completed={`${completed4}`} subtopics={`${done4}/${total4}`}/>
           </div>
           </Link>
           </div>
      </div>
      
      <div className="contentl">
        <div className="cardl5">
        <Link id="arrays" to='/Practice'>
          <div className="card__inside">
          <h4 style={{color:"#000",fontWeight:"600",margin:"0.3em",fontSize:"2.8vh"}}>Graphs</h4>
          <ProgressBar bgcolor="#0FBB00" completed={`${completed5}`} subtopics={`${done5}/${total5}`}/>
           </div>
           </Link>
           </div>
      </div>	
    	  	
    </div>	
   
);
}

export default Learn;
 
