import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../Axios/Axios";
import { useglobaldata } from "../Context/MainContext";
import { toast } from "react-toastify";

function Updatecard() {
  const navigate = useNavigate();
  const { loginUser, setloginUser } = useglobaldata();

  // Initialize useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: loginUser.email,
      password: loginUser.password,
    },
  });

  // Submit function
  const onSubmit = async (data) => {
    try {
      const response = await axios.patch(`/user/${loginUser.id}`, data);
      setloginUser(response.data);
      toast.success(response.statusText, response.status);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="right w-full h-fit flex flex-col justify-center">
      <button
        className="text-start w-fit cursor-pointer capitalize text-3xl"
        onClick={() => navigate("/")}
      >
        <MdOutlineKeyboardBackspace />
      </button>

      <h1 className="text-[5vw] capitalize font-light pb-5">
        {loginUser.firstname}
      </h1>

      {/* Form */}
      <form
        className="w-full flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="text-2 capitalize font-light block pb-2 text-start"
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
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="text-2 capitalize font-light block pb-2 text-start"
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
          update profile
        </button>
      </form>
    </div>
  );
}

export default Updatecard;
