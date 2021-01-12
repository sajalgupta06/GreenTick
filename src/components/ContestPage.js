import "../css/card.css";
import {Link} from 'react-router-dom'
import {IndexLink} from 'react-router'

function ContestPage() {
 const data = [
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
  
    const contestLink = "https://www.hackerrank.com/greenticks-weekly-11"
  return (
    <div>
      

      <div className="content">
        <div className="card">
        <a href={contestLink}>
        
          <div className="card__side card__side--front">
          <div className="card__cta">
          <span style={{ color: "#fff", marginBottom: "10px" }}>
            Join this Week's Contest{" "}
          </span>
          <br></br>
          <br></br>
          <span className="mainHeading">GreenTick Weekly 21 </span>
          <br></br>
          <span style={{ color: "#fff" }}>
            December 25 @ 2:00 pm-3:30pm{" "}
          </span>
          <br></br>
          <br></br>
         
          <span style={{ color: "#fff" }}>Starts in 10h 41m</span>
        </div>
            
          </div>
          </a>
            </div>
      </div>
        
      <div className="table">
        <ol className="custom-counter">
          <h5 className="tableHeading">Previous Contest</h5>
         {data.map(items=>{
           return items
         })}
        </ol>
      </div>
    </div>
  );
}

export default ContestPage;