import React from "react";

function SearchBar() {
  return (
    <div className="bg-white text-black w-full flex items-center gap-2 rounded-full mt-7 ">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        className="flex-1 border-0 outline-0 px-5 placeholder:capitalize bg-transparent"
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

      {/* Search Button */}
      <button className="bg-[#049669] text-white py-[0.8vw] px-[2vw] rounded-full capitalize cursor-pointer">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
