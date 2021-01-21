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
import Resource from "./components/Resources";
import LoginPage from "./components/LoginPage";

function App() {
 
  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Switch>
    <Route exact path='/profile' component={Dashboard}></Route>
    <Route exact path='/home' component={Home}></Route>
    <Route exact path='/contestPage' component={ContestPage}></Route>
    <Route exact path='/learn' component={Learn}></Route>
    <Route exact path='/discussion' component={Resource}></Route>
    <Route exact path='/practice' component={Practice}></Route>
    <Route exact path='/login' component={LoginPage}></Route>
    </Switch>
    </BrowserRouter>

      </div>
    
  );
}

export default App;

