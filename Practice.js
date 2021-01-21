import { render } from "@testing-library/react";
//https://www.figma.com/file/lfJtUexjj5Aywf1f2f2aqG/Greenticks?node-id=0%3A1
import React, { Component } from "react";
import { ARRAY } from "../database";
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { SiHackerrank,SiCodechef,SiLeetcode,SiCodeforces } from "react-icons/si";
import {GrCopy} from "react-icons/gr";

const SomeComponent = withRouter(props => <Array {...props}/>);

class Array extends Component {
  constructor(props){
    super(props);
    this.changeText = this.changeText.bind(this);

    this.state={
      ds:ARRAY
    };
  }

   changeText(id){
        const newIds = this.state.ds.slice() //copy the array
        newIds[id-1].completed = !(newIds[id-1].completed) //execute the manipulations
        this.setState({ds: newIds}) //set the new state
        console.log(this.state)
  }
  render() {
    const {pathname} = this.props.location;
    var set1=false;
    var set2=false;
    if(pathname=='/practice'){
       set1= true;
    }
    else if(pathname=='/resource'){
          set2=true;
    }
    const table = ARRAY.map((ques) => {
      return (
        <div  style={{ background: "#fff" }}>
          <div className="row" style={{  background:ques.id%2==0?"#DFF0FD":"#FFFFFF",    margin: "auto"}}>
            <div className="col-1 " style={{textAlign:"center",fontWeight:"600",paddingTop:"0.65em"}}>{ques.id}</div>
            <div className="col-3" style={{ color: "#000000",textAlign:"center",fontWeight:"600",paddingTop:"0.65em",wordWrap:"break-word" }}>
              {ques.name}
            </div>
            <a className="col-3" href="#" style={{fontSize:"130%",color:"#FFA800",paddingLeft:"4.5em",paddingTop:"0.3em"}}>&#9734;</a>
            {ques.level == "Easy" ? (
              <div className="col-1" style={{paddingTop:"0.5em",paddingBottom:"0.5em"}}>
                  <div  style={{ background: "#0FBB00",height:"5vh",borderRadius:"2em",textAlign:"center", padding:"0.5em",color:"#FFFFFF" }}>
                Easy
              </div>
              </div>
            ) : ques.level == "Medium" ? (
              <div className="col-1" style={{paddingTop:"0.5em",paddingBottom:"0.5em"}}>
                <div  style={{ background: "#FFA800",height:"5vh",borderRadius:"2em",textAlign:"center",padding:"0.5em",color:"#FFFFFF"  }}>
                Medium
              </div>
              </div>
            ) : (
              <div  className="col-1" style={{paddingTop:"0.5em",paddingBottom:"0.5em"}}> <div  style={{ background: "red" ,height:"5vh",borderRadius:"2em",textAlign:"center",padding:"0.5em",color:"#FFFFFF" }}>
              Hard
            </div>
            </div>
            )}
            <div  className="col-1" style={{paddingTop:"0.8em",textAlign:"center"}}> <input style={{fontSize:"200%"}}
             onChange={()=>{this.changeText(ques.id)}} type="checkbox"></input></div>
  
            <div className="col-1" style={{textAlign:"center",paddingTop:"0.5em"}} ><GrCopy size={20}/></div>
            {
              ques.site =="Hackerrank"?(
                <div className="col-1" style={{paddingTop:"0.5em"}}><SiHackerrank size={20}/></div>
              ): ques.site =="Codechef"?(
                <div className="col-1"  style={{paddingTop:"0.5em"}}><SiCodechef size={20}/></div>
                ):ques.site=="LeetCode"?(<div className="col-1"  style={{paddingTop:"0.5em"}}><SiLeetcode size={20}/></div>):(<div className="col-1"  style={{paddingTop:"0.5em"}}><SiCodeforces size={20}/></div>)
            }
          </div>
        </div>
      );
    });
    return (
      <div className="container" style={{ background: "#fff" ,    height: "38em"
    }}>
        <div
          className="row mt-5 "
          style={{ justifyContent: "center", background: "#F1F1F1" }}
        >
          <Link to='resources'
            style={{ background: set2?"#000000":"#FFFFFF", width: "11%", marginRight: "2em",borderRadius:"0.5em" }}
            type="button"
            className="btn btn-outline-dark mt-4 mb-4 mr-2">
            <b style={{ color: set2?"#FFFFFF":"#000000"  }}>Resources</b>
          </Link>
          <button
            style={{ 
              background: set1?"#000000":"#FFFFFF", width: "11%", marginRight: "2em",borderRadius:"0.5em" }}
            type="button"
            className="btn btn-outline-dark mt-4 mb-4 ml-2"
          >
            <b style={{ color: set1?"#FFFFFF":"#000000"  }}>Practice</b>
          </button>
        </div>
        <div
          className="row mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2 style={{ display: "flex", justifyContent: "center",fontWeight: "900" }}>Arrays</h2>
        </div>
        <div className="row" style={{marginBottom:"1em",marginTop:"0.5em"}}>
          <div className="col-10" >
          <div class="dropdown" style={{float:"right"}}>
  <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"  style={{background:"#F1F1F1",fontWeight:"500",color:"#000000",borderRadius:"0.4em",padding:"0.4em"}}>
    Difficulty
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
          </div>
          <div className="col"><div class="dropdown">
  <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"  style={{background:"#F1F1F1",fontWeight:"500",color:"#000000",borderRadius:"0.4em",padding:"0.4em"}}>
    Tag
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div></div>
        </div>
  
        <div className="row" style={{ background:"#636262",color:"#FFFFFF",paddingTop:"0.7em", verticalAlign:"middle", margin: "auto",justifyItems:"center"}} >
          <div className="col-1 ml-4" style={{textAlign:"center"}}>
            <h2 style={{fontWeight:"600",fontSize:"1.2em",marginLeft: "0.4em"}}> #</h2>
          </div>
          <div className="col-2" style={{textAlign:"center"}}>
            <h2 style={{fontSize: "1.2em" ,fontWeight:"600",marginLeft:"1em",paddingLeft:"4em"}}>Title</h2>
          </div>
          <div className="col-3" style={{textAlign:"center"}}>
            <h2 style={{fontSize: "1.2em",fontWeight:"600",marginLeft:"5em"}}>Saved</h2>
          </div>
          <div className="col-1" style={{textAlign:"center"}}>
            <h2 style={{fontSize: "1.2em",fontWeight:"600",marginLeft:"5.5em"}}>Difficulty</h2>
          </div>
          <div className="col-1" style={{textAlign:"center"}}>
            <h2 style={{fontSize: "1.2em",fontWeight:"600",marginLeft:"6.5em"}}>Done</h2>
          </div>
          <div className="col-1" style={{textAlign:"center"}}>
            <h2 style={{fontSize: "1.2em",fontWeight:"600",marginLeft:"5.5em"}}>Editorial</h2>
          </div>
          <div className="col-1" style={{textAlign:"center"}}>
            <h2 style={{fontSize: "1.2em",fontWeight:"600",marginLeft:"5em"}}>Tag</h2>
          </div>
        </div>
        {table}
      </div>
    );
  }
}
export default Array;
