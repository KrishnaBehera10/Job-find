import Hired from "./Hired";
import Appliedcard from "./Appliedcard";
import PostJob from "./PostJob";
import Totaljob from "./Totaljob";

function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl capitalize">dashboard</h1>
      <div className="flex items-center my-5 gap-5 flex-wrap md:flex-row">
        <Totaljob />
        <Appliedcard />
        <Hired />
      </div>
      <PostJWob />
    </div>
  );
}

export default Dashboard;
