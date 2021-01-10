import { render } from "@testing-library/react";
import React, { Component } from "react";
import { ARRAY } from "../database";

class Array extends Component {
  render() {
    const table = ARRAY.map((ques) => {
      return (
        <div className="container" style={{ background: "#fff" }}>
          <div className="row" style={{    marginBottom: "1em",    marginLeft: "2.6em"}}>
            <div className="col-2 ml-3">{ques.id}</div>
            <div className="col-5" style={{ color: "#2C7EDE" }}>
              {ques.name}
            </div>
            {ques.level == "Easy" ? (
              <div className="col-2" style={{ color: "#0FBB00",fontWeight:"600" }}>
                Easy
              </div>
            ) : ques.level == "Medium" ? (
              <div className="col-2" style={{ color: "#FFA800",fontWeight:"600" }}>
                Medium
              </div>
            ) : (
              <div className="col-2" style={{ color: "red" ,fontWeight:"600"}}>
                Hard
              </div>
            )}
            <div className="col-2 ml-2">
              <a href="#">solution</a>
            </div>
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
          <button
            style={{ background: "#FFFFFF", width: "11%", marginRight: "2em" }}
            type="button"
            className="btn btn-outline-dark mt-4 mb-4 mr-2"
          >
            <b style={{ color: "#000000" }}>Resources</b>
          </button>
          <button
            style={{ background: "#FFFFFF", width: "11%", marginRight: "2em" }}
            type="button"
            className="btn btn-outline-dark mt-4 mb-4 ml-2"
          >
            <b style={{ color: "#000000" }}>Practice</b>
          </button>
        </div>
        <div
          className="row mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h2 style={{ display: "flex", justifyContent: "center",fontWeight: "900" }}>Arrays</h2>
        </div>
        <div className="row mt-4 mb-2" style={{marginLeft: "3.5em"}} >
          <div className="col-6 ml-5 ">Search for a Problem</div>
          <div className="col-2 ml-5">
            <div className="dropdown"    style={{    display: "inline-block",
            left: "5.3em"}}>
              <button   
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
             
              >
                Difficulty
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Easy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Medium
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Hard
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 ml-2">
            <div className="dropdown"  style={{    display: "inline-block",
            left: "4.6em"}}>
              <button
                className="btn  dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{marginLeft: "0.8em"}}
               
              >
                Tag
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" style={{    marginTop :"2em",marginLeft: "2.6em"}} >
          <div className="col-2 ml-4 mb-2">
            <h2 style={{fontWeight:"600",fontSize:"1.2em",marginLeft: "0.4em"}}> #</h2>
          </div>
          <div className="col-5 mb-2">
            <h2 style={{fontSize: "1.2em" ,fontWeight:"600",    marginLeft: "0.4em"}}>Title</h2>
          </div>
          <div className="col-2 mb-2">
            <h2 style={{fontSize: "1.2em",fontWeight:"600",}}>Difficulty</h2>
          </div>
        </div>
        {table}
      </div>
    );
  }
}
export default Array;
