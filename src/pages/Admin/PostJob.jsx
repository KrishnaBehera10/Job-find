import { useForm } from "react-hook-form";
import axios from "../../Axios/Axios";
import { useglobaldata } from "../../Context/MainContext";
import { toast } from "react-toastify";

function PostJob() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { loginUser } = useglobaldata();

  const onSubmit = async (data) => {
    data.applicants = [];
    data.createdBy = loginUser;

    try {
      const response = await axios.post("/job", data);
      toast.success(response.statusText);
    } catch (error) {
      console.error("Error posting job:", error);
    }

    reset();
  };
  return (
    <div>
      <h1 className="text-4xl capitalize">Recruiter Dashboard</h1>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 bg-white shadow-md p-6 rounded-xl mb-10"
      >
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Job Title"
            {...register("title", { required: "Title is required" })}
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            type="text"
            placeholder="Company Name"
            {...register("company", { required: "Company name is required" })}
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <input
            type="text"
            placeholder="Location"
            {...register("location", { required: "Location is required" })}
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
          />
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location.message}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <select
            {...register("type", { required: "Job type is required" })}
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
          >
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        {/* Salary */}
        <div>
          <input
            type="text"
            placeholder="Salary"
            {...register("salary", { required: "Salary is required" })}
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
          />
          {errors.salary && (
            <p className="text-red-500 text-sm">{errors.salary.message}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <input
            type="text"
            placeholder="Skills (comma separated)"
            {...register("skills", { required: "Skills are required" })}
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
          />
          {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
        </div>

        {/* about */}
        <div className="col-span-2">
          <textarea
            placeholder="Company Aboute"
            {...register("aboute", {
              required: "Aboute is required",
            })}
            rows="4"
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3 h-24 resize-none"
          ></textarea>
          {errors.aboute && (
            <p className="text-red-500 text-sm">{errors.aboute.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-2">
          <textarea
            placeholder="Job Description"
            {...register("description", {
              required: "Description is required",
            })}
            rows="4"
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3 h-64 resize-none"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white rounded py-2 col-span-2 hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;
