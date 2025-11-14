import { useForm } from "react-hook-form";
import { useglobaldata } from "../Context/MainContext";

function FilterJob({ isDetailsPage, isMobile }) {
  const { job, jobfilter, setjobfilter } = useglobaldata();
  const { register, handleSubmit, reset } = useForm();

  if (isMobile && isDetailsPage) {
    return null;
  }

  // company filter
  const companyName = job?.map((data) => data.company);
  const uniqueCompany = Array.from(new Set(companyName));

  // job role
  const jobTitle = job?.map((data) => data.title);
  const uniqueJobTitle = Array.from(new Set(jobTitle));

  // location
  const locations = job?.map((data) => data.location);
  const uniqueLocation = Array.from(new Set(locations));

  // Filter handler
  const onSubmit = (filter) => {
    const filtered = job.filter((item) => {
      const matchCompany = !filter.company || item.company === filter.company;
      const matchRole = !filter.job || item.title === filter.job;
      const matchLocation =
        !filter.location || item.location === filter.location;
      const matchType = !filter.type || item.type === filter.type;

      return matchCompany && matchRole && matchLocation && matchType;
    });

    setjobfilter(filtered);
  };

  return (
    <div className="w-full md:w-1/4 bg-white rounded-2xl border border-gray-800/10 max-h-full p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* company */}
        <div>
          <h1 className="text-md capitalize mb-1">Company</h1>
          <select
            {...register("company")}
            className="border border-gray-300 py-2 rounded w-full pl-3"
          >
            <option value="">All</option>
            {uniqueCompany.map((data, i) => (
              <option key={i} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>

        {/* job role */}
        <div>
          <h1 className="text-md capitalize mb-1">Job role</h1>
          <select
            {...register("job")}
            className="border border-gray-300 py-2 rounded w-full pl-3"
          >
            <option value="">All</option>
            {uniqueJobTitle.map((data, i) => (
              <option key={i} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>

        {/* location */}
        <div>
          <h1 className="text-md capitalize mb-1">Location</h1>
          <select
            {...register("location")}
            className="border border-gray-300 py-2 rounded w-full pl-3"
          >
            <option value="">All</option>
            {uniqueLocation.map((data, i) => (
              <option key={i} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>

        {/* type */}
        <div>
          <h1 className="text-md capitalize mb-1">Type</h1>
          <select
            {...register("type")}
            className="border border-gray-300 py-2 rounded w-full pl-3"
          >
            <option value="">All</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-[var(--btn-color)] text-white py-2 rounded mt-3"
        >
          Apply Filters
        </button>

        <button
          type="button"
          onClick={() => {
            reset();
            setjobfilter([]);
          }}
          className="bg-gray-300 text-black py-2 rounded"
        >
          Clear Filters
        </button>
      </form>
    </div>
  );
}

export default FilterJob;
