import { Outlet, useLocation } from "react-router-dom";
import FilterJob from "../components/FilterJob";
import Jobcard from "../components/Jobcard";
import { useEffect, useState } from "react";

function JobList() {
  const location = useLocation();
  const isDetailsPage = location.pathname.includes("/job/details");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handlescreenSize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handlescreenSize);

    return () => {
      window.removeEventListener("resize", handlescreenSize);
    };
  }, []);

  return (
    <div className="w-full h-full flex gap-2 overflow-auto flex-wrap">
      <FilterJob {...{ isDetailsPage, isMobile }} />
      <Jobcard {...{ isDetailsPage, isMobile }} />
      <Outlet />
    </div>
  );
}

export default JobList;
