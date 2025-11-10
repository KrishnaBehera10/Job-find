import { IoPeople } from "react-icons/io5";

function Appliedcard() {
  return (
    <div className="flex-1 h-64 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
      <div>
        <IoPeople className="text-7xl" />
        <h1 className="text-2xl capitalize">Applied candidates</h1>
      </div>

      <div>
        <h2 className="text-5xl">400</h2>
      </div>
    </div>
  );
}

export default Appliedcard;
