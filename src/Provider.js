import React, { useState, useEffect } from "react";
import cogoToast from "cogo-toast";
import Axios from "axios";
export const context = React.createContext();

const API_PATH =
  window.location.protocol +
  "//" +
  window.location.hostname +
  "/static/fetchlist.php";

const ContextProvider = (props) => {
  let storedChoice = JSON.parse(localStorage.getItem("modal-choice"));
  let [modal_choice, setChoice] = useState(null);
  let [isAuth, setAuth] = useState(false);
  let [beneficiaries, setBeneficiaries] = useState([]);
  let [loading, setLoading] = useState(false);
  let [page, setPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [hasmore, setHasmore] = useState(true);
  const [editee, setEditee] = useState({});

  let passkey = "Judo@2020";
  if (storedChoice == null) {
    localStorage.setItem("modal-choice", true);
    setChoice(true);
  }
  useEffect(() => {
    setTimeout(() => {
      setChoice(storedChoice);
    }, 3000);
    //eslint-disable-next-line
  }, []);

  let dontShow = () => {
    localStorage.setItem("modal-choice", false);
    setChoice(false);
  };
  let dismiss = () => {
    setChoice(false);
  };

  let fetchBeneficiaries = (pg) => {
    setLoading(true);
    if (!hasmore) return;
    try {
      Axios({
        method: "get",
        url: API_PATH + "?page=" + pg,
      })
        .then((response) => {
          if (response.data.success) {
            setLoading(false);
            setTotalPages(response.data.total_pages);
            setBeneficiaries((prev) => [...prev, ...response.data.result]);
            if (response.data.current_page == response.data.total_pages) {
              setHasmore(false);
            }
          } else {
            cogoToast.error(response.data.error);
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

  let reload = (pg) => {
    setLoading(true);
    setHasmore(true);
    try {
      Axios({
        method: "get",
        url: API_PATH + "?page=" + pg,
      })
        .then((response) => {
          if (response.data.success) {
            setLoading(false);
            setTotalPages(response.data.total_pages);
            setBeneficiaries((prev) => [...response.data.result]);
            if (response.data.current_page == response.data.total_pages) {
              setHasmore(false);
            }
          } else {
            cogoToast.error(response.data.error);
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

  let setEdited = (item) => {
    setEditee((prev) => item);
  };
  return (
    <context.Provider
      value={{
        modal_choice,
        dontShow,
        dismiss,
        isAuth,
        setAuth,
        passkey,
        fetchBeneficiaries,
        loading,
        setLoading,
        beneficiaries,
        setBeneficiaries,
        hasmore,
        setPage,
        page,
        setHasmore,
        editee,
        setEdited,
        reload,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
