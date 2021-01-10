import React from "react";
import "../css/progressbar.css";
import ProgressBar from "./progress-bar.component";

const backCard1={
    position: 'left',
    height: 150,
    width: '35%',
    backgroundColor: "#fff",
    borderRadius:10,
    margin: 50,
    position: 'absolute',
    left: 100,
    right: 0,
    top: 100,
    bottom: 0,
    padding:10	
    
  }
  const backCard5={
    alignSelf: 'flex-end',
    height: 150,
    width: '35%',
    backgroundColor: "#fff",
    borderRadius:10,
    marginLeft: 900,
   position: 'absolute',
    left: -400,
    right:100,
    top: 400,
    bottom: 0,
    padding:10		   
  }
  const backCard4={
    position: 'left',
    height: 150,
    width: '35%',
    backgroundColor: "#fff",
    borderRadius:10,
    margin: 50,
    position: 'absolute',
    left: 100,
    right: 0,
    top: 600,
    bottom: 0,
    padding:10	
    
  }
const backCard2={
    alignSelf: 'flex-end',
    height: 150,
    width: '35%',
    backgroundColor: "#fff",
    borderRadius:10,
    marginLeft: 900,
   position: 'absolute',
    left: 100,
    right: 0,
    top: 150,
    bottom: 0,
    padding:10		   
  }
  
  const backCard3={
   
    alignSelf: 'flex-end',
    height: 150,
    width: '35%',
    backgroundColor: "#fff",
    borderRadius:10,
    marginLeft: 900,
    position: 'absolute',
    left: 100,
    right: 0,
    top: 650,
    bottom: 0,
    padding:10	
    
  }
  
  
  
  
function Learn() {
  return (
  	
    <div className="Learn">
    	<h1>Learn</h1>
    
    
    <div style={backCard1}>
    	<h4 style={{color:"#000",fontWeight:"600"}}>Arrays<br></br></h4>
    	<ProgressBar bgcolor="#6a1b9a" completed="60" subtopics="6"/>
    	</div>
    	
    	<div style={backCard2}>
    	<h4 style={{color:"#000",fontWeight:"600"}}>Linked Lists<br></br></h4>
    	<ProgressBar bgcolor="#6a1b9a" completed="60" subtopics="5"/>
    	</div>
    	
    	<div style={backCard3}>
    	 <h4 style={{color:"#000",fontWeight:"600"}}>DP<br></br></h4>
    	<ProgressBar bgcolor="#6a1b9a" completed="60" subtopics="2"/>
    	</div>
    	
    	<div style={backCard4}>
    	 <h4 style={{color:"#000",fontWeight:"600"}}>Trees<br></br></h4>
    	<ProgressBar bgcolor="#6a1b9a" completed="60" subtopics="2"/>
    	</div>
    	
    	<div style={backCard5}>
    	 <h4 style={{color:"#000",fontWeight:"600"}}>Graphs<br></br></h4>
    	<ProgressBar bgcolor="#6a1b9a" completed="60" subtopics="2"/>
    	</div>
    	
    	
    	
    </div>	
    	
    	
    
);
}

export default Learn;
