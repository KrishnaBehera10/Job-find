import React, { createContext, useContext, useEffect, useState } from "react";

export const globaldata = createContext(null);

function MainContext({ children }) {
  const [loginUser, setloginUser] = useState(
    JSON.parse(localStorage.getItem("login")) || []
  ); // loginuser add

  const [job, setjob] = useState(null);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(loginUser));
  }, [loginUser]);
  return (
    <globaldata.Provider value={{ loginUser, setloginUser, job, setjob }}>
      {children}
    </globaldata.Provider>
  );
}

export default MainContext;

export function useglobaldata() {
  return useContext(globaldata);
}
