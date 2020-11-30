import React from "react";
import "./board.css";
import founder from "../img/founder_no_bg.png";
import joseph from "../img/joseph_no_bg.png";
import emilia from "../img/emilia_no_bg.png";
import edet from "../img/edetudofia_no_bg.png";
import pumoren from "../img/pumoren2_no_bg.png";
//eslint-disable-next-line
import avatar from "../img/avatar-placeholder.png";
import enolanky from "../img/Mrs. Eno Lanky A. Simeon.png"
import akpanJonah from "../img/Chief Akpan Jonah Udoh.png"
import BoardCard from "./BoardCard";

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
                  <h5 className="card-title">Obong (Engr.) Anthony Udoekong</h5>
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
            <BoardCard
              name="Mr. Joseph Akpan Ina"
              title="Chairman"
              phone="0802 091 4508"
              image={joseph}
            />
            <BoardCard
              name="Comr. John Peter Umoren"
              title="Gen. Secretary"
              phone="0802 450 8219"
              image={pumoren}
              email="gigijollypa1@gmail.com"
            />


            <BoardCard
              name="Mr. Edet V. Udofia"
              title="Pioneer Secretary"
              phone="0802 281 7577"
              image={edet}
            />



            <BoardCard
              name="Snr. Mgr. Emilia Umoh"
              title=" Treasurer"
              phone="0802 290 6555"
              image={emilia}
            />


            <BoardCard
              name="Rtd. Sgt. Akpan Jonah Udoh"
              title=" Member"
              image={akpanJonah}
            />


            <BoardCard
              name="Mrs. Eno Lanky A. Simeon"
              title=" Member"
              image={enolanky}
            />

          </div>
        </div>
      </main>
    </div>
  );
}

export default Board;
