function DetailsCard({
  id,
  title,
  company,
  location,
  salary,
  skills,
  type,
  description,
  createdBy,
  aboute,
}) {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-md">{company}</p>
        <p className="text-sm">{location}</p>
        <div className="text-xs flex items-center gap-2">
          <p> {type}</p> <p>{salary}</p>
        </div>
        <p className="text-xs">{skills}</p>
        <button className="bg-[var(--btn-color)] text-white py-3 px-5 cursor-pointer rounded capitalize mt-3">
          apply now
        </button>
      </div>

      {/* hiring */}
      <div className="border border-gray-200 mt-5 rounded-2xl p-3">
        <h1 className="text-2xl capitalize">meet hiring team</h1>
        <div className="flex items-center justify-between mt-3 flex-wrap md:flex-nowrap gap-5">
          <div className="flex items-center gap-3">
            <div className="w-15 h-15 rounded-full bg-zinc-500"></div>
            <h1>
              {createdBy?.firstname} {createdBy?.lastname}
            </h1>
          </div>
          <button className="bg-[var(--btn-color)] text-white py-3 px-5 rounded">
            message
          </button>
        </div>
      </div>

      {/* aboute */}

      <div className="w-full border border-gray-200 h-fit p-3 mt-5 rounded-2xl">
        <h1 className="text-2xl capitalize mb-5">about</h1>
        <p>{aboute}</p>
      </div>

      {/* description */}
      <div className="w-full border border-gray-200 h-fit p-3 mt-5 rounded-2xl">
        <h1 className="text-2xl capitalize mb-5">role</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DetailsCard;
