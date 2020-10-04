import React, { useState, useEffect } from "react";
export const context = React.createContext();

const ContextProvider = (props) => {
  let storedChoice = JSON.parse(localStorage.getItem("modal-choice"))
  let [modal_choice, setChoice] = useState(null);
  if (storedChoice == null) {
    localStorage.setItem("modal-choice", true);
    setChoice(true)
  }
  useEffect(() => {

    setTimeout(() => {
      setChoice(storedChoice)
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

  return (
    <context.Provider
      value={{
        modal_choice,
        dontShow,
        dismiss,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default ContextProvider;
