import "./css/card.css";
import Navbar from "./components/Navbar";
function App() {
  const renderlist = () => {
    return [
      <li>
        Greentick Weekly 19<br></br>
        <h6>December 18 2020 at 2:00 PM</h6>
      </li>,
      <li>
        Greentick Weekly 19<br></br>
        <h6>December 18 2020 at 2:00 PM</h6>
      </li>,
      <li>
        Greentick Weekly 19<br></br>
        <h6>December 18 2020 at 2:00 PM</h6>
      </li>,
      <li>
        Greentick Weekly 19<br></br>
        <h6>December 18 2020 at 2:00 PM</h6>
      </li>,
    ];
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="content">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__cont">Upcoming Contests</div>
          </div>
          <div className="card__side card__side--back">
            <div className="card__cta">
              <span style={{ color: "#4e6ddb", marginBottom: "10px" }}>
                Join this Week's Contest{" "}
              </span>
              <br></br>
              <br></br>
              <span className="mainHeading">GreenTick Weekly 21 </span>
              <br></br>
              <span style={{ color: "#4e6ddb" }}>
                December 25 @ 2:00 pm-3:30pm{" "}
              </span>
              <br></br>
              <br></br>
              <br></br>
              <span style={{ color: "#4e6ddb" }}>Starts in 10h 41m</span>
            </div>
          </div>
        </div>
      </div>

      <div className="table">
        <ol className="custom-counter">
          <h5 className="tableHeading">Previous Contest</h5>
         {renderlist()}
        </ol>
      </div>
    </div>
  );
}

export default App;
