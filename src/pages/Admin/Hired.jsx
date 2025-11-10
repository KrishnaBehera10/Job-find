import { LuUserCheck } from "react-icons/lu";

function Hired() {
  return (
    <div className="flex-1 h-64 border border-gray-200 rounded-2xl p-5 flex justify-between items-center">
      <div>
        <LuUserCheck className="text-7xl" />
        <h1 className="text-2xl capitalize">Applied candidates</h1>
      </div>

      <div>
        <h2 className="text-5xl">200</h2>
      </div>
    </div>
  );
}

export default Hired;
