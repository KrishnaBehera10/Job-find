import SearchJob from "./SearchJob";
import Card from "./Card";
import { useglobaldata } from "../Context/MainContext";

function Jobcard({ isDetailsPage, isMobile }) {
  const { job, jobfilter } = useglobaldata();

  const showdata = jobfilter && jobfilter.length > 0 ? jobfilter : job;

  const render = showdata?.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  if (isMobile && isDetailsPage) {
    return null;
  }

  return (
    <div
      id="job-card"
      className={`w-full md:flex-3 max-h-full overflow-auto bg-white rounded-2xl p-2 border border-gray-800/10`}
    >
      <SearchJob />
      <div className="flex flex-col gap-5 mt-10">
        {jobfilter?.length > 0 ? render : <p>not found</p>}
      </div>
    </div>
  );
}

export default Jobcard;
