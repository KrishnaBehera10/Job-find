import { CiSearch } from "react-icons/ci";
function SearchJob() {
  return (
    <div className="p-5 bg-white rounded-2xl">
      <h1 className="text-3xl capitalize">search job</h1>
      <div className="flex flex-col mt-5 gap-3">
        <div className="flex items-center bg-zinc-400/10 px-2 rounded-2xl">
          <CiSearch className="text-2xl" />
          <input type="text" className="outline-0 p-3 bg-transparent w-full" />
        </div>
        <button
          type="submit"
          className="bg-[var(--bg-color)] text-[var(--btn-color)] capitalize p-3 cursor-pointer rounded-2xl"
        >
          search
        </button>
      </div>
    </div>
  );
}

export default SearchJob;
