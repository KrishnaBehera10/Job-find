import { createContext, useContext, useEffect, useState } from "react";

export const globaldata = createContext(null);

function MainContext({ children }) {
  // login user add
  const [loginUser, setloginUser] = useState(
    JSON.parse(localStorage.getItem("login")) || []
  );

  //job post data
  const [job, setjob] = useState(null);

  //fiter job
  const [jobfilter, setjobfilter] = useState([]);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(loginUser));
  }, [loginUser]);
  return (
    <globaldata.Provider
      value={{ loginUser, setloginUser, job, setjob, jobfilter, setjobfilter }}
    >
      {children}
    </globaldata.Provider>
  );
}

export default MainContext;

export function useglobaldata() {
  return useContext(globaldata);
}
