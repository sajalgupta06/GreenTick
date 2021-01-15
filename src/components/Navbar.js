import React, { useState } from "react";
import "../css/navbar.css";

import { Link ,NavLink} from "react-router-dom";

export default function Navbar() {
  const [classname, setClassName] = useState(true);
  return (
    <div>
      <nav>
        <div className="nav-container">
          <i
            className="fas fa-bars"
            onClick={() => {
              setClassName(!classname);
            }}
          ></i>

          <ul className={classname ? "nav-ul" : "nav-ul visible"}>
            <li>
              <NavLink
                to="/home"
                className="nav-link"
                onClick={() => {
                  setClassName(!classname);
                }}
                activeStyle={{
                  
                  color: "#4e6ddb"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Practice"
                className="nav-link"
                onClick={() => {
                  setClassName(!classname);
                }}
                activeStyle={{
                  
                  color: "#4e6ddb"
                }}
              >
                Practice
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/learn"
                className="nav-link"
                onClick={() => {
                  setClassName(!classname);
                }}
                activeStyle={{
                  
                  color: "#4e6ddb"
                }}
              >
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contestPage"
                className="nav-link"
                onClick={() => {
                  setClassName(!classname);
                }}
                activeStyle={{
                  
                  color: "#4e6ddb"
                }}
              >
                Contest
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/discussion"
                className="nav-link"
                onClick={() => {
                  setClassName(!classname);
                }}
                activeStyle={{
                  
                  color: "#4e6ddb"
                }}
              >
                Discussion
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className="nav-link"
                onClick={() => {
                  setClassName(!classname);
                }}
                activeStyle={{
                  
                  color: "#4e6ddb"
                }}
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

// <div className="icons">
//         <FaRegUserCircle></FaRegUserCircle>
//         <IoNotificationsOutline></IoNotificationsOutline>
//         </div>
