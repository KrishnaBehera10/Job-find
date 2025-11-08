import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../Axios/Axios";

function Signup() {
  const navigate = useNavigate();

  // Initialize useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Handle submit
  async function onSubmit(data) {
    data.id = crypto.randomUUID();
    data.createdAt = new Date().toLocaleDateString();
    data.appliedJobs = [];

    try {
      await axios.post("/user", {
        ...data,
      });
    } catch (error) {
      console.log(error);
    }

    navigate("/login");
    reset();
  }

  return (
    <div className="w-full h-screen flex fixed left-0 top-0 bg-white p-3">
      <div className="hidden md:block left w-1/2 h-full rounded-4xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1655509206649-a63396bed840?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="right w-full md:w-1/2 h-full flex flex-col justify-center px-10">
        <button
          className="text-start w-fit cursor-pointer capitalize text-3xl"
          onClick={() => navigate("/")}
        >
          <MdOutlineKeyboardBackspace />
        </button>

        <h1 className="text-[5vw] capitalize font-light pb-5">
          create an account
        </h1>

        {/* Form */}
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Firstname + Lastname */}
          <div className="flex gap-5 w-full">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstname" className="capitalize font-light pb-2">
                firstname
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="firstname"
                {...register("firstname", {
                  required: "First name is required",
                })}
                className="border border-gray-300 py-2 rounded-3xl pl-3"
              />
              {errors.firstname && (
                <span className="text-red-500 text-sm">
                  {errors.firstname.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-1/2">
              <label htmlFor="lastname" className="capitalize font-light pb-2">
                lastname
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="lastname"
                {...register("lastname", { required: "Last name is required" })}
                className="border border-gray-300 py-2 rounded-3xl pl-3"
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="capitalize font-light block pb-2">
              email
            </label>
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="capitalize font-light block pb-2"
            >
              password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Role */}
          <div>
            <label htmlFor="role" className="capitalize font-light block pb-2">
              role
            </label>
            <select
              {...register("role", { required: "Please select a role" })}
              className="border border-gray-300 py-2 rounded-3xl w-1/2 capitalize font-light pl-3"
            >
              <option value="">choose</option>
              <option value="recruiter">recruiter</option>
              <option value="jobseeker">job seeker</option>
            </select>
            {errors.role && (
              <span className="text-red-500 text-sm">
                {errors.role.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="block p-3 bg-[var(--btn-color)] text-[var(--font-white)] capitalize rounded-3xl md:w-full cursor-pointer mt-3"
          >
            create account
          </button>

          <p className="text-center capitalize">
            already have an account{" "}
            <Link to="/login" className="font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
