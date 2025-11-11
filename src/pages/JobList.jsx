import { Outlet } from "react-router-dom";
import FilterJob from "../components/FilterJob";
import Jobcard from "../components/Jobcard";
import { useState } from "react";

function JobList() {
  return (
    <div className="w-full h-full flex gap-2 overflow-auto flex-wrap">
      <FilterJob />

      <Jobcard />

      <Outlet />
    </div>
  );
}

export default JobList;
