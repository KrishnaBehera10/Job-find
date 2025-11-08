import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../Axios/Axios";
import { useglobaldata } from "../Context/MainContext";

function Login() {
  const navigate = useNavigate();
  const { loginUser, setloginUser } = useglobaldata();

  // Initialize useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit function
  const onSubmit = async (data) => {
    try {
      const response = await axios.get(
        `/user?email=${data.email}&password=${data.password}`
      );
      setloginUser(response.data);
    } catch (error) {
      console.log(error);
    }

    navigate("/profile");
    reset(); // ✅ reset form after submission
  };

  return (
    <div className="w-full h-screen flex fixed left-0 top-0 bg-white p-3">
      {/* Left Side Image */}
      <div className="hidden md:block left w-1/2 h-full rounded-4xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1655509206649-a63396bed840?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="right w-full md:w-1/2 h-full flex flex-col justify-center px-10">
        <button
          className="text-start w-fit cursor-pointer capitalize text-3xl"
          onClick={() => navigate("/")}
        >
          <MdOutlineKeyboardBackspace />
        </button>

        <h1 className="text-[5vw] capitalize font-light pb-5">Hello</h1>

        {/* Form */}
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="text-2 capitalize font-light block pb-2"
            >
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

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="text-2 capitalize font-light block pb-2"
            >
              password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="block p-3 bg-[var(--btn-color)] text-[var(--font-white)] capitalize rounded-3xl md:w-full cursor-pointer mt-3"
          >
            login
          </button>

          {/* Link to Signup */}
          <p className="text-center capitalize">
            don’t have an account{" "}
            <Link to="/singup" className="font-medium">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
