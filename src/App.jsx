import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import JobSave from "./pages/JobSave";
import JobApplied from "./pages/JobApplied";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ProtectRoute from "./pages/ProtectRoute";
import Dashboard from "./pages/Admin/Dashboard";
import { useglobaldata } from "./Context/MainContext";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  const { loginUser, setloginUser } = useglobaldata();

  return (
    <div className="w-full h-screen relative flex bg-zinc-800 p-3 gap-5">
      <Navbar />
      <div className="w-full h-full relative overflow-hidden">
        <div className="w-full h-full rounded-4xl bg-white p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job" element={<JobList />} />
            <Route
              path="/job/details/:id"
              element={
                <ProtectRoute>
                  <JobDetails />
                </ProtectRoute>
              }
            />
            <Route path="/jobsave" element={<JobSave />} />
            <Route path="/applied" element={<JobApplied />} />
            <Route
              path="/profile"
              element={
                <ProtectRoute>
                  <Profile />
                </ProtectRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<Signup />} />

            {loginUser[0]?.role === "recruiter" && (
              <Route path="/dashboard" element={<Dashboard />} />
            )}

            <Route path="*" element={<Pagenotfound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
