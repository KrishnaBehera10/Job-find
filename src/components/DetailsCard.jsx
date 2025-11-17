import axios from "../Axios/Axios";
import { toast } from "react-toastify";
import { useglobaldata } from "../Context/MainContext";

function DetailsCard({
  id,
  title,
  company,
  location,
  salary,
  skills,
  type,
  description,
  createdBy,
  aboute,
  applicants,
}) {
  const { loginUser, setloginUser } = useglobaldata();
  const userId = loginUser.id;

  async function appliedJob(obj) {
    console.log(obj);
    //applicants
    try {
      if (obj.applicants.includes(userId)) {
        toast.warning("You have already applied to this job!");
        return;
      }
      const updatedApplicants = [...obj.applicants, userId];
      const response = await axios.patch(`/job/${obj.id}`, {
        applicants: updatedApplicants,
      });
      applied(response.data);
    } catch (error) {
      console.error("❌ Error applying job:", error);
    }
  }

  async function applied(obj) {
    //applied Job
    try {
      const updateAppliedJob = [...loginUser.appliedJobs, obj];
      const response = await axios.patch(`/user/${userId}`, {
        appliedJobs: updateAppliedJob,
      });
      setloginUser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mt-10">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-md">{company}</p>
        <p className="text-sm">{location}</p>
        <div className="text-xs flex items-center gap-2">
          <p> {type}</p> <p>{salary}</p>
        </div>
        <p className="text-xs">{skills}</p>
        <button
          onClick={() =>
            appliedJob({
              id,
              title,
              company,
              location,
              salary,
              skills,
              type,
              description,
              createdBy,
              aboute,
              applicants,
            })
          }
          className="bg-[var(--btn-color)] text-white py-3 px-5 cursor-pointer rounded capitalize mt-3"
        >
          apply now
        </button>
      </div>

      {/* hiring */}
      <div className="border border-gray-200 mt-5 rounded-2xl p-3">
        <h1 className="text-2xl capitalize">meet hiring team</h1>
        <div className="flex items-center justify-between mt-3 flex-wrap gap-5">
          <div className="flex items-center gap-3">
            <div className="w-15 h-15 rounded-full bg-zinc-500"></div>
            <h1>
              {createdBy?.firstname} {createdBy?.lastname}
            </h1>
          </div>
          <button className="bg-[var(--btn-color)] text-white py-3 px-5 rounded">
            message
          </button>
        </div>
      </div>

      {/* aboute */}

      <div className="w-full border border-gray-200 h-fit p-3 mt-5 rounded-2xl">
        <h1 className="text-2xl capitalize mb-5">about</h1>
        <p>{aboute}</p>
      </div>

      {/* description */}
      <div className="w-full border border-gray-200 h-fit p-3 mt-5 rounded-2xl">
        <h1 className="text-2xl capitalize mb-5">role</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DetailsCard;
