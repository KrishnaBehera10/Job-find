import { CiSearch } from "react-icons/ci";
import { useglobaldata } from "../Context/MainContext";
import { useEffect, useState } from "react";
function SearchJob() {
  const { job, setjobfilter } = useglobaldata();

  //searching job from job-list
  const [searchJob, setsearchJob] = useState("");

  useEffect(() => {
    let filterJob = job?.filter((data) => {
      return data.title?.toLowerCase().startsWith(searchJob?.toLowerCase());
    });
    setjobfilter(filterJob);
  }, [job, searchJob]);

  return (
    <div className="p-5 bg-white rounded-2xl">
      <h1 className="text-3xl capitalize">search job</h1>
      <div className="flex flex-col mt-5 gap-3">
        <div className="flex items-center bg-zinc-400/10 px-2 rounded-2xl">
          <CiSearch className="text-2xl" />
          <input
            type="text"
            className="outline-0 p-3 bg-transparent w-full placeholder:capitalize"
            placeholder="search job title"
            value={searchJob}
            onChange={(e) => setsearchJob(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchJob;
