import React, { useState } from "react";
import "../css/navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
export default function Navbar() {

  const [classname, setClassName] = useState(true);
  return (
    <div>
      <nav>
        <div className="container">
          <i
            className="fas fa-bars"
            onClick={() => {
              setClassName(!classname);
            }}
          ></i>

          <ul className= {classname?"nav-ul":"nav-ul visible"}>
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Practice
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Learn
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contests
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Discussion
              </a>
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
