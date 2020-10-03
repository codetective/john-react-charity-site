import React from 'react'
import logo from '../img/logo.png'

function Donate() {
  return (
    <div className="donate mt-4">
      <main className="mb-3">
        <div className="container">
          <div className="row" style={{ minHeight: "70vh" }}>
            <div
              className="col-md-9 m-auto card pb-5 px-0"
              style={{ width: "100%", minHeight: "300px" }}
            >
              <div className="card-header">
                <h3>Community Sponsorship Campaign</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 col-sm-4 col-lg-3 donate-img-resize">
                    <div class="description-photo px-2">
                      <img src={logo} class="img img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-md-8 col-sm-9 mt-3 m-auto">
                    <p class="card-text h5">
                      This is the general community sponsorship campaign.
                      Contributing to this campaign goes towards helping the
                      project as a whole.
                    </p>
                    <div className="col-md-6 col-sm-9 mt-4 m-auto">
                      <button
                        className="btn btn-primary full-width text-center"
                        style={{ width: "100%", backgroundColor: "#ee5c27", border: "none" }}
                      >
                        Donate Now!
                      </button>
                    </div>
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

export default Donate
