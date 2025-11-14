import { createContext, useContext, useEffect, useState } from "react";

export const globaldata = createContext(null);

function MainContext({ children }) {
  // login user add
  const [loginUser, setloginUser] = useState(
    JSON.parse(localStorage.getItem("login")) || {}
  );

  //job post data
  const [job, setjob] = useState(null);

  //fiter job
  const [jobfilter, setjobfilter] = useState([]);

  //appliedJob
  const [Applied, setApplied] = useState([]);

  //save job
  const [savejob, setsavejob] = useState(
    JSON.parse(localStorage.getItem("savejob")) || []
  );

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(loginUser));
    localStorage.setItem("savejob", JSON.stringify(savejob));
  }, [loginUser, savejob]);
  return (
    <globaldata.Provider
      value={{
        loginUser,
        setloginUser,
        job,
        setjob,
        jobfilter,
        setjobfilter,
        Applied,
        setApplied,
        savejob,
        setsavejob,
      }}
    >
      {children}
    </globaldata.Provider>
  );
}

export default MainContext;

export function useglobaldata() {
  return useContext(globaldata);
}
