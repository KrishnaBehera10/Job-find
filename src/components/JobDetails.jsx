import { useNavigate, useParams } from "react-router-dom";
import { useglobaldata } from "../Context/MainContext";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import DetailsCard from "./DetailsCard";
import { useEffect } from "react";

function JobDetails() {
  const { id } = useParams();
  const { job } = useglobaldata();
  const navigate = useNavigate();

  const finejob = job?.find((data) => data.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div
      id="job-details"
      className={`w-full md:flex-3 p-5 bg-white rounded-2xl overflow-auto border border-gray-800/10 max-h-full`}
    >
      <button
        className="text-2xl cursor-pointer"
        onClick={() => navigate("/job")}
      >
        <MdOutlineKeyboardBackspace />
      </button>

      <DetailsCard {...finejob} />
    </div>
  );
}

export default JobDetails;
