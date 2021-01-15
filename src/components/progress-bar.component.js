import React from "react";

const ProgressBar = (props) => {
  const {bgcolor, completed,subtopics } = props;
  

  const containerStyles = {
    position: 'absolute',
    height: 20,
    width: '70%',
    backgroundColor:"#fff", /*"#e0e0de",*/
    borderRadius: 0,
    margin: 20,
    textAlign: 'left'
    
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 0,//'inherit',
    textAlign: 'right'
    
  }
  
  const fillerText={
    padding: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    left: "0.1 rem",/*500,*/
    right: 0,
    top: -6,
    bottom: 0
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  
  const subTitles={
    padding: 5,
    color: 'black',
    margin: 5,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 20,
    bottom: 0
    	
    
  }

  return (
  
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
       <span style={fillerText}>{`${100-completed}%`}</span>
      <span style={subTitles}>{`${subtopics} Completed`}</span>
      
    </div>
  );
};

export default ProgressBar;
