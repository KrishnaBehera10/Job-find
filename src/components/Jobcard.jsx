import SearchJob from "./SearchJob";
import Card from "./Card";
import { useglobaldata } from "../Context/MainContext";

function Jobcard({ isDetailsPage, isMobile }) {
  const { job } = useglobaldata();

  const render = job?.map((data) => {
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
      <div className="flex flex-col gap-5 mt-10">{render}</div>
    </div>
  );
}

export default Jobcard;
