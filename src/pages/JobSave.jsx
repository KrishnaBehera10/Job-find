import Card from "../components/Card";
import { useglobaldata } from "../Context/MainContext";

function JobSave() {
  const { savejob, setsavejob } = useglobaldata();

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl capitalize">you save job</h1>
      <div className="flex flex-col gap-5 mt-5">
        {savejob.map((data) => {
          return <Card key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
}

export default JobSave;
