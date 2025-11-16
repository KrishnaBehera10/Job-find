import { useEffect, useState } from "react";
import { LuUserCheck } from "react-icons/lu";
import axios from "../../Axios/Axios";
import { useglobaldata } from "../../Context/MainContext";

function Hired() {
  const [Applied, setApplied] = useState(0);
  const { loginUser } = useglobaldata();
  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(`/job?createdBy.id=${loginUser.id}`);
        const totalApplied = await response.data.reduce((acc, data) => {
          return acc + data.applicants.length;
        }, 0);
        setApplied(totalApplied);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);
  return (
    <div className="flex-1 h-64 border border-gray-200 rounded-2xl p-5 flex justify-between items-center">
      <div>
        <LuUserCheck className="text-7xl" />
        <h1 className="text-2xl capitalize">Applied candidates</h1>
      </div>

      <div>
        <h2 className="text-5xl">{Applied}</h2>
      </div>
    </div>
  );
}

export default Hired;
