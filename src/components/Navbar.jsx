import { NavLink, useNavigate } from "react-router-dom";
import { useglobaldata } from "../Context/MainContext";
import { useState } from "react";
import { BsMenuAppFill } from "react-icons/bs";
import { BiLogoBehance } from "react-icons/bi";
function Navbar() {
  const { loginUser, setloginUser } = useglobaldata();
  const [open, setopen] = useState(true);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("login");
    setloginUser([]);
    navigate("/login");
  }

  return (
    <div
      className={`${
        open ? "w-1/8" : "w-15"
      } h-full bg-zinc-800 text-white shadow-lg flex flex-col gap-5`}
    >
      <div className="flex w-full items-center">
        <header className="text-4xl w-full">
          {open && <BiLogoBehance onClick={() => navigate("/")} />}
        </header>
        <button className="text-4xl flex w-full justify-end cursor-pointer">
          <BsMenuAppFill onClick={() => setopen(!open)} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1">
          <NavLink to="/job">Job</NavLink>
          {loginUser[0]?.role === "jobseeker" ? (
            <div className="flex flex-col gap-1">
              <NavLink to="/jobsave">Saved</NavLink>
              <NavLink to="/applied">Applied</NavLink>
            </div>
          ) : (
            <NavLink to="/dashboard">Dashboard</NavLink>
          )}
        </div>
      )}

      {loginUser.length <= 0 ? (
        open && (
          <div className="flex flex-col">
            <NavLink to="/login" className="py-3">
              Login
            </NavLink>
            <NavLink
              to="/singup"
              className="bg-[var(--btn-color)] text-[var(--font-white)] py-3 px-3 rounded"
            >
              Singup
            </NavLink>
          </div>
        )
      ) : (
        <div>{open && <NavLink to="/profile">Profile</NavLink>}</div>
      )}
      {loginUser.length > 0 && open && (
        <div className="w-full h-full flex items-end">
          <button
            onClick={logout}
            className="bg-[var(--btn-color)] py-2 w-full rounded cursor-pointer mb-5 capitalize"
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
