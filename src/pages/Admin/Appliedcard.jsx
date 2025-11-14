import { useEffect } from "react";
import { IoPeople } from "react-icons/io5";
import { useglobaldata } from "../../Context/MainContext";

function Appliedcard() {
  const { loginUser, job } = useglobaldata();

  const recruiterId = loginUser.id;

  const finetotelJob = job?.filter((data) => data.createdBy.id === recruiterId);

  useEffect(() => {}, []);
  return (
    <div className="flex-1 h-64 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <IoPeople className="text-7xl" />
        <h1 className="text-2xl capitalize">create total job</h1>
      </div>

      <div>
        <h2 className="text-5xl">{finetotelJob?.length}</h2>
      </div>
    </div>
  );
}

export default Appliedcard;
