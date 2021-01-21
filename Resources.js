import React, { Component } from "react";
import { RESOURCES, VIDEOS } from "../database";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const SomeComponent = withRouter(props => <Resource {...props}/>);

class Resource extends Component {
  constructor(props){
    super(props);
    this.state={
      current:0
    }
  }

  render() {
    const {pathname} = this.props.location;
    var set1=false;
    var set2=false;
    var vari;
    if(pathname=='/practice'){
       set1= true;
    }
    else if(pathname=='/resources'){
          set2=true;
    }
    const table = RESOURCES.map((res) => {
      return (
        <b>
        <li><span style={{marginRight:"1em"}}> &#9679;</span> {res}</li>
      </b>
      );
    });
    const Videos = VIDEOS.map((vid) => {
      if(vid.name=="Video1"){
        vari=true;
        }
      return (
        <div
         className={vari?"carousel-item active":"carousel-item"}
          style={{ width: "25vw", height: "30vh", background: "#F1F1F1",marginLeft:"5em" }}
        >
          <img src="..." class="card-img-top" alt={vid.name}></img>
        </div>
      );
    });
    console.log(Videos);
    return (
      <div class="container">
        <div
          className="row mt-5 "
          style={{ justifyContent: "center", background: "#F1F1F1" }}
        >
          <Link to='resources'
            style={{  background: set2?"#000000":"#FFFFFF", width: "11%", marginRight: "2em",borderRadius:"0.5em" }}
            type="button"
            className="btn btn-outline-dark mt-4 mb-4 mr-2">
            <b style={{ color: set2?"#FFFFFF":"#000000" }}>Resources</b>
          </Link>
          <Link to='practice'
            style={{  background: set1?"#000000":"#FFFFFF", width: "11%", marginRight: "2em",borderRadius:"0.5em" }}
            type="button"
            className="btn btn-outline-dark mt-4 mb-4 ml-2"
          >
            <b style={{ color: set1?"#FFFFFF":"#000000" }}>Practice</b>
        </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:"1fr 1fr",
            justifyItems:"center",
          }}
        >
          <div style={{background:"#FFFFFF",padding:"2em",
            borderRadius:"2em",width:"35vw",textAlign:"left"}}>
              <h2 style={{fontWeight:"900",textAlign:"center",marginBottom:"1em"}}>Arrays</h2>
              <div style={{paddingLeft:"3em"}}>{table}</div></div>
          <div style={{background:"#FFFFFF",
            borderRadius:"2em",width:"35vw",paddingTop:"6em",height:"35vw"}}>
              <h2 style={{textAlign:"center",fontWeight:"700"}}>Title</h2>
              <div>
              <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            {Videos}
        </div>
      </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                 </div>
              </div>
    </div>
      </div>
    );
  }
}
export default Resource;
