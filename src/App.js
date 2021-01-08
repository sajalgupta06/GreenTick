import "./css/card.css";

import ContestPage from './components/ContestPage'
import Navbar from "./components/Navbar";
import './css/navbar.css'
import Graph from './components/Graph'
import Dashboard from './components/Dashboard';
import {BrowserRouter,Route,useHistory, Switch} from 'react-router-dom'
import Learn from "./components/Learn";
import Discussion from "./components/Discussion";
import Home from "./components/Home";
import Practice from "./components/Practice";

function App() {
 
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
    <Route exact path='/' component={Dashboard}></Route>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/contestPage' component={ContestPage}></Route>
    <Route exact path='/learn' component={Learn}></Route>
    <Route exact path='/discussion' component={Discussion}></Route>
    <Route exact path='/practice' component={Practice}></Route>
    </Switch>
    </BrowserRouter>

      </div>
    
  );
}

export default App;



// <div className="content">
// <div className="card">
//   <div className="card__side card__side--front">
//     <div className="card__cont">Upcoming Contests</div>
//   </div>
//   <div className="card__side card__side--back">
//     <div className="card__cta">
//       <span style={{ color: "#4e6ddb", marginBottom: "10px" }}>
//         Join this Week's Contest{" "}
//       </span>
//       <br></br>
//       <br></br>
//       <span className="mainHeading">GreenTick Weekly 21 </span>
//       <br></br>
//       <span style={{ color: "#4e6ddb" }}>
//         December 25 @ 2:00 pm-3:30pm{" "}
//       </span>
//       <br></br>
//       <br></br>
//       <br></br>
//       <span style={{ color: "#4e6ddb" }}>Starts in 10h 41m</span>
//     </div>
//   </div>
// </div>
// </div>

// <div className="table">
// <ol className="custom-counter">
//   <h5 className="tableHeading">Previous Contest</h5>
//  {renderlist()}
// </ol>
// </div>
