import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Card({ title, description, id, company, type, salary }) {
  const navigate = useNavigate();

  function handleclick(id) {
    navigate(`/job/details/${id}`);
  }
  return (
    <div className="flex flex-col gap-3 bg-white p-5 rounded-2xl border border-gray-800/10">
      <div className="flex justify-between items-center cursor-pointer">
        <div onClick={() => handleclick(id)}>
          <h1 className="flex justify-between items-center text-xl">{title}</h1>
          <p>{company}</p>
        </div>
        <div>
          <span className="bg-zinc-400/10 py-2 px-5 text-[var(--btn-color)] cursor-pointer text-sm flex items-center gap-2">
            save
            <MdOutlineBookmarkAdd />
          </span>
        </div>
      </div>
      <span className="text-sm line-clamp-2">{description}</span>
      <span className="bg-zinc-400/10 w-fit p-2">{type}</span>
      <div className="flex justify-between flex-wrap md:flex-nowrap">
        <button className="text-md">{salary}</button>
        <button className="bg-[var(--btn-color)] text-white p-2 rounded cursor-pointer capitalize">
          apply now
        </button>
      </div>
    </div>
  );
}

export default Card;
