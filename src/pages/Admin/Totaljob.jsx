import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "../../Axios/Axios";
import { useglobaldata } from "../../Context/MainContext";

function Totaljob() {
  const { loginUser } = useglobaldata();
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Fetch all jobs from your backend
        const res = await axios.get("/job");
        const jobs = res.data;

        // Recruiter ID (Swati)
        const recruiterId = loginUser.id;

        // Filter jobs created by this recruiter
        const recruiterJobs = jobs.filter(
          (job) => job.createdBy.id === recruiterId
        );

        // Count job titles
        const countByTitle = recruiterJobs.reduce((acc, curr) => {
          acc[curr.title] = (acc[curr.title] || 0) + 1;
          return acc;
        }, {});

        // Convert to chart format
        const formatted = Object.entries(countByTitle).map(
          ([title, count], index) => ({
            id: index,
            value: count,
            label: title,
          })
        );

        setPieData(formatted);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex-1 h-64 border border-gray-200 rounded-2xl flex justify-center items-center">
      {pieData.length > 0 ? (
        <PieChart
          series={[{ data: pieData }]}
          max-width={300}
          max-height={200}
        />
      ) : (
        <p className="text-gray-500">Loading chart...</p>
      )}
    </div>
  );
}

export default Totaljob;
