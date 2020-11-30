import Axios from "axios";
import React, { useState } from "react";
import logo from "../img/logo.png";
import cogoToast from "cogo-toast";
import { CustomDialog, useDialog } from "react-st-modal";
const API_PATH =
  window.location.protocol +
  "//" +
  window.location.hostname +
  "/static/feedback.php";

function Form() {
  const [name, setName] = useState("");
  const [phone, setNum] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const dialog = useDialog();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      Axios({
        method: "post",
        url: API_PATH,
        headers: {
          "content-type": "application/json",
        },
        data: {
          name,
          phone,
          amount,
          comment,
        },
      })
        .then((result) => {
          console.log(result.data);

          if (result.data.sent === 1) {
            cogoToast.success("message sent!");
            setLoading(false);
            setAmount("");
            setComment("");
            setNum("");
            setName("");
            setLoading(false);
            dialog.close();
          } else {
            cogoToast.error(result.data.error);
            setLoading(false);
          }
        })
        .catch((error) => {
          cogoToast.error(error.message);
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      cogoToast.error(err.toString);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="p-3">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Phone Number</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          required
          placeholder="eg. 09020000000"
          onChange={(e) => {
            setNum(e.target.value);
          }}
          value={phone}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your phone number with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Amount Donated</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          required
          placeholder="eg. 10000"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
        />
        <small id="emailHelp" className="form-text text-muted">
          We collect this to ensure the accuracy of your transaction.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Any Comments?</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
        ></textarea>
      </div>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dialog.close()}
        >
          Close
        </button>

        <button type="submit" className="btn btn-primary">
          {loading ? (
            <>
              <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </>
          ) : (
              "Submit"
            )}
        </button>
      </div>
    </form>
  );
}

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
                    <div className="description-photo px-2">
                      <img src={logo} className="img img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-md-8 col-sm-9 mt-3 m-auto">
                    <p className="card-text h5">
                      This is the general community sponsorship campaign.
                      Contributing to this campaign goes towards helping the
                      project as a whole.
                    </p>
                    <div className="col-md-6 col-sm-9 mt-4 m-auto">
                      {/* <button
                        className="btn btn-primary full-width text-center"
                        style={{ width: "100%", backgroundColor: "#ee5c27", border: "none" }}
                      >
                        Donate Now!
                      </button> */}
                      <div className="bg-light p-3 mb-3">
                        <p className="card-text h5">
                          You can donate to us via:
                        </p>
                        <div>
                          <p>
                            United Bank for Africa
                            <br />
                            Acct No:{" "}
                            <span className="font-weight-bold">2004392455</span>
                            <br />
                            Acct Name:{" "}
                            <span className="font-weight-bold">
                              James Udoekong Education Trust Fund
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="h5">We appreciate all our sponsors!</p>
                      <p className="card-text h6">
                        Send us a message about your donation. Our donations are
                        made public to promote transparency.
                      </p>
                      <button
                        style={{
                          background: "#ee5c27",
                          color: "white",
                        }}
                        className="btn"
                        onClick={async () => {
                          //eslint-disable-next-line
                          let result = await CustomDialog(<Form />, {
                            title: "Send us a message",
                            showCloseIcon: true,
                          });
                        }}
                      >
                        Send Message
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

export default Donate;
