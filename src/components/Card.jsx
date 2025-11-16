import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useglobaldata } from "../Context/MainContext";
import axios from "../Axios/Axios";

function Card({
  title,
  description,
  id,
  company,
  type,
  salary,
  applicants,
  aboute,
  createdBy,
}) {
  const navigate = useNavigate();
  const { loginUser, setloginUser, setsavejob } = useglobaldata();
  const userId = loginUser.id;

  function handleclick(id) {
    navigate(`/job/details/${id}`);
  }

  async function appliedJob(obj) {
    //applicants
    try {
      if (obj.applicants.includes(userId)) {
        alert("You have already applied to this job!");
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

  async function save(obj) {
    setsavejob((prev) => {
      const exists = prev.some((item) => item.id === obj.id);

      if (exists) {
        return prev.filter((item) => item.id !== obj.id);
      }

      return [...prev, obj];
    });
  }

  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl border border-gray-800/10">
      <div className="flex justify-between items-center cursor-pointer">
        <div onClick={() => handleclick(id)}>
          <h1 className="flex justify-between items-center text-xl">{title}</h1>
          <p>{company}</p>
        </div>
        <div
          onClick={() =>
            save({
              title,
              description,
              id,
              company,
              type,
              salary,
              applicants,
              aboute,
              createdBy,
            })
          }
        >
          <span className="bg-zinc-400/10 py-2 px-5 text-[var(--btn-color)] cursor-pointer text-sm flex items-center gap-2">
            save
            <MdOutlineBookmarkAdd />
          </span>
        </div>
      </div>
      <span className="text-sm line-clamp-2">{description}</span>
      <span className="bg-zinc-400/10 w-fit p-2">{type}</span>
      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <button className="text-md">{salary}</button>
        <button
          onClick={() =>
            appliedJob({
              title,
              description,
              id,
              company,
              type,
              salary,
              applicants,
              aboute,
              createdBy,
            })
          }
          className="bg-[var(--btn-color)] text-white p-2 rounded cursor-pointer capitalize"
        >
          apply now
        </button>
      </div>
    </div>
  );
}

export default Card;
