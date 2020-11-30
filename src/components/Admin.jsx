import Axios from "axios";
import React, { useContext, useState } from "react";
import logo from "../img/logo.png";
import { context } from "../Provider";
import cogoToast from 'cogo-toast';
import ListAdmin from "./ListAdmin";

const API_PATH = window.location.protocol + '//' + window.location.hostname + '/static/beneficiary.php'


function AdminLock({ setAuth }) {
  let { passkey } = useContext(context);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passkey) {
      setError(true);
      return;
    }
    setError(false);
    setPassword("");
    setAuth(true);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-light p-3 d-flex align-items-center justify-content-center flex-column"
      >
        <img
          src={logo}
          alt="logo"
          className="d-block col-sm-6 m-auto"
          style={{ maxWidth: "300px" }}
        />
        <div className="form-group my-2">
          <input
            type="password"
            className="form-control"
            style={{ width: "100%" }}
            id="exampleInputPassword1"
            required
            placeholder="Enter passkey to access dashboard"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          {error && (
            <small className="text-danger">password is incorrect</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary d-block m-auto">
          Enter
        </button>
      </form>
    </div>
  );
}
function Admin() {
  let { isAuth, setAuth } = useContext(context);
  const [name, setName] = useState("");
  const [loadin, setLoading] = useState(false);
  const [course, setCourse] = useState("");
  const [institution, setInstitution] = useState("");
  let { setHasmore, reload } = useContext(context);

  if (!isAuth) {
    return <AdminLock setAuth={setAuth} />;
  }
  const addBeneficiary = () => {
    setLoading(true)
    try {


      Axios({
        method: "post",
        url: API_PATH,
        headers: {
          "content-type": "application/json",
        },
        data: {
          name, course, institution
        },
      })
        .then((result) => {
          if (result.data.sent === 1) {
            cogoToast.success('beneficary added!')
            setLoading(false)
            setName('')
            setInstitution('')
            setCourse('')

          } else {

            cogoToast.error(result.data.error)
            setLoading(false)
          }
        })
        .catch((error) => {

          cogoToast.error(error.message)
          setLoading(false)
        }
        );
    } catch (err) {
      setLoading(false)
      cogoToast.error(err.toString)
    }
  };

  return (
    <div className="container pb-4">
      <div className="m-auto text-center">
        <h1 className="mt-4">Dashboard</h1>


        <h4>Add a new beneficiary</h4>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addBeneficiary()
          setHasmore(true)
        }}
        style={{ maxWidth: "500px", margin: "auto" }}
      >
        <div className="form-group">
          <label htmlFor="name">Name of beneficiary</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course of study</label>
          <input
            type="text"
            id="course"
            name="course"
            className="form-control"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inst">Institution attended</label>
          <input
            type="text"
            id="inst"
            name="institution"
            className="form-control"
            placeholder="Enter institution"
            value={institution}
            onChange={(e) => {
              setInstitution(e.target.value);
            }}
          />
        </div>

        <button type="submit" disabled={loadin} className="btn mt-2 btn-primary btn-block">
          {loadin && 'Sending..'}
          {!loadin && 'Submit'}
        </button>
      </form>
      <br />
      <br />
      <br />
      <ListAdmin />
    </div >
  );
}

export default Admin;
