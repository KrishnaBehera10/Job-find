import React from "react";

function SearchBar() {
  return (
    <div className="bg-white text-black w-full flex items-center gap-2 rounded mt-7 flex-wrap justify-center md:justify-between overflow-hidden">
      {/* Search Input */}
      <div className="flex items-center gap-3 justify-center md:justify-between flex-wrap flex-1">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border-0 outline-0 px-5 placeholder:capitaliz bg-transparent"
        />

        {/* Location Select */}
        <select
          name="location"
          id="location"
          className="bg-transparent outline-none text-gray-600 capitalize"
          defaultValue=""
        >
          <option value="" disabled>
            Enter location
          </option>
          <option value="bangalore">Bangalore</option>
          <option value="delhi">Delhi</option>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai">Chennai</option>
          <option value="pune">Pune</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="bg-[#049669] text-white py-[0.8vw] px-[1vw]  capitalize cursor-pointer">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
