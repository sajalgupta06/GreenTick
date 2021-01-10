import React from "react";

const ProgressBar = (props) => {
  const {bgcolor, completed,subtopics } = props;
  

  const containerStyles = {
    position: 'absolute',
    height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
    
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
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
        
      </div>
      <span style={subTitles}>{`${subtopics} Subtopics`}</span>
    </div>
  
  );
};

export default ProgressBar;
