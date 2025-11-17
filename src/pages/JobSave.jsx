import Card from "../components/Card";
import { useglobaldata } from "../Context/MainContext";

function JobSave() {
  const { savejob } = useglobaldata();

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl capitalize mt-3">you save job</h1>
      <div className="flex flex-col gap-5 mt-10">
        {savejob.length > 0 ? (
          <div>
            {savejob.map((data) => {
              return <Card key={data.id} {...data} />;
            })}
          </div>
        ) : (
          <div>
            <p className="mt-5 capitalize text-center font-bold">not data</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobSave;
