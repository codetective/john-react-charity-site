import React from "react";
import "./board.css";
import founder from "../img/founder.jpeg";
import joseph from "../img/joseph.jpeg";
import pumoren from "../img/pumoren2.jpeg";
import avatar from "../img/avatar-placeholder.png";

function Board() {
  return (
    <div id="board">
      <main className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-sm-6 my-2">
                <div className="card" style={{ margin: "auto" }}>
                  <img className="card-img-top" src={founder} alt="founder" />
                  <div className="card-body">
                    <h5 className="card-title">Mr. Michael Udoekong</h5>
                    <small className="font-weight-bold">Founder</small>
                    <a href="/founderbio" className="">
                      (view biography)
                    </a>
                    <br />
                    <small>anthony.udoekong@yahoo.com</small>
                    <br />
                    <small>0803 402 3476</small>
                  </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-sm-6 my-2">
              <div className="">
                <div className="card" style={{ margin: "auto" }}>
                  <img className="card-img-top" src={pumoren} alt="peter umoren" />
                  <div className="card-body">
                    <h5 className="card-title">Comr. John Peter Umoren</h5>
                    <small className="font-weight-bold">Gen. Secretary</small>
                    <br />
                    <small>gigijollypa1@gmail.com</small>
                    <br />
                    <small>0803 402 3476</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 my-2">
              <div className="">
                <div className="card" style={{ margin: "auto" }}>
                  <img className="card-img-top" src={joseph} alt="joseph akpan" />
                  <div className="card-body">
                    <h5 className="card-title">Mr. Joseph Akpan</h5>
                    <small className="font-weight-bold">Chairman</small>
                    <br />
                    <small>user@gmail.com</small>
                    <br />
                    <small>0802 091 4508</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 my-2">
              <div className="">
                <div className="card" style={{ margin: "auto" }}>
                  <img className="card-img-top" src={avatar} alt="emilia umoh" />
                  <div className="card-body">
                    <h5 className="card-title">Snr. Mgr. Emilia Umoh</h5>
                    <small className="font-weight-bold">Treasurer</small>
                    <br />
                    <small>user@gmail.com</small>
                    <br />
                    <small>0802 290 6555</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 my-2">
              <div className="">
                <div className="card" style={{ margin: "auto" }}>
                  <img className="card-img-top" src={avatar} alt="emilia umoh" />
                  <div className="card-body">
                    <h5 className="card-title">Rtd. Sgt. Akpan Jonah Udoh</h5>
                    <small className="font-weight-bold">Member</small>
                    <br />
                    <small>user@gmail.com</small>
                    <br />
                    <small>0802 290 6555</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 my-2">
              <div className="">
                <div className="card" style={{ margin: "auto" }}>
                  <img className="card-img-top" src={avatar} alt="emilia umoh" />
                  <div className="card-body">
                    <h5 className="card-title">Mrs. Eno Lanky A. Simeon</h5>
                    <small className="font-weight-bold">Member</small>
                    <br />
                    <small>user@gmail.com</small>
                    <br />
                    <small>0802 290 6555</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Board;
