import { useglobaldata } from "../Context/MainContext";

function FilterJob({ isDetailsPage, isMobile }) {
  const { job } = useglobaldata();

  if (isMobile && isDetailsPage) {
    return null;
  }

  //company filter
  const companyName = job?.map((data) => data.company);
  const unique = Array.from(new Set(companyName));

  //title job
  const Jobtitle = job?.map((data) => data.title);
  const jobunique = Array.from(new Set(Jobtitle));

  //location
  const location = job?.map((data) => data.location);
  const uniqueLocation = Array.from(new Set(location));

  return (
    <div
      className={`w-full md:w-1/4 bg-white rounded-2xl border border-gray-800/10 max-h-full p-5`}
    >
      {/* company */}
      <div className="w-full flex flex-col gap-1 my-5">
        <h1 className="text-md capitalize">company</h1>
        <select
          name="company"
          id="company"
          className="border border-gray-300 py-2 rounded w-full pl-3"
        >
          {unique?.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
        </select>
      </div>

      {/* job role  */}
      <div className="w-full flex flex-col gap-1 my-5">
        <h1 className="text-md capitalize">Job role</h1>
        <select
          name="job"
          id="job"
          className="border border-gray-300 py-2 rounded w-full pl-3"
        >
          {jobunique.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
        </select>
      </div>

      {/* location */}
      <div className="w-full flex flex-col gap-1 my-5">
        <h1 className="text-md capitalize">location</h1>
        <select
          name="location"
          id="location"
          className="border border-gray-300 py-2 rounded w-full pl-3"
        >
          {uniqueLocation.map((data, index) => {
            return (
              <option key={index} value={data}>
                {data}
              </option>
            );
          })}
        </select>
      </div>

      {/* type */}
      <div className="w-full flex flex-col gap-1 my-5">
        <h1 className="text-md capitalize">type</h1>
        <select className="border border-gray-300 py-2 rounded w-full pl-3">
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
    </div>
  );
}

export default FilterJob;
