import { useEffect } from "react";
import axios from "../Axios/Axios";
import { useglobaldata } from "../Context/MainContext";

function JobApplied() {
  const { loginUser, setloginUser, Applied, setApplied } = useglobaldata();
  const userid = loginUser.id;

  useEffect(() => {
    const applied = loginUser.appliedJobs;
    setApplied(applied);
  }, [loginUser]);

  async function cancleapplied(jobid) {
    const appliedjob = loginUser.appliedJobs;

    const update = appliedjob.filter((data) => data.id !== jobid);

    try {
      const response = await axios.patch(`/user/${userid}`, {
        appliedJobs: update,
      });

      console.log(response.data);
      setloginUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl capitalize mt-3">Applied Job</h1>
      <div className="flex flex-col gap-3 mt-10">
        {Applied.length > 0 ? (
          Applied.map((data) => {
            return (
              <div
                key={data.id}
                className="border border-gray-200 p-5 rounded flex items-center justify-between"
              >
                <div>
                  <h1 className="text-xl capitalize">{data.title}</h1>
                  <p className="text-sm">{data.company}</p>
                </div>
                <div>
                  <button
                    onClick={() => cancleapplied(data.id)}
                    className="capitalize bg-[var(--btn-color)] text-white py-2 px-5 rounded cursor-pointer"
                  >
                    applied cancle
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>no data</p>
        )}
      </div>
    </div>
  );
}

export default JobApplied;
