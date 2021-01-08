import React, { useState } from "react";
import "../css/navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

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
            <Link to='/home' className="nav-link" >Home</Link>
            </li>
            <li>
            <Link to='/Practice' className="nav-link" >Practice</Link>
            </li>
            <li>
            <Link to='/learn' className="nav-link" >Learn</Link>
            </li>
            <li>
            <Link to='/contestPage' className="nav-link" >Contest</Link>
            </li>
            <li>
            <Link to='/discussion' className="nav-link" >Discussion</Link>
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
