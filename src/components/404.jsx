import React from 'react'
import {Link} from 'react-router-dom'


function FouroFour() {
  return (
    <div>
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <div className="col-md-8 m-auto">
            <small className="text-center d-block display-5 text-danger">
              OOPS!
            </small>
            <h1 className="display-3 text-center">PAGE UNDER CONSTRUCTION</h1>
            <small className="text-center d-block">
              Please return to these available pages:
            </small>

            <div className="d-flex container justify-content-center">
              <li className="m-2">
                <Link to="/">Home</Link>
              </li>
              <li className="m-2">
                <Link to="/history">Our History</Link>
              </li>
             
              <li className="m-2">
                <Link to="/statements">Mission & Vision</Link>
              </li>
            </div>
                        <div className="d-flex container justify-content-center">

              <li className="m-2">
                <Link to="/founderbio">Founder's Bio</Link>
              </li>
              <li className="m-2">
              <Link to="/board">Board Members</Link>

              </li>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FouroFour
