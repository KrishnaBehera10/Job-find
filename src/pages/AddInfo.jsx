import { useState } from "react";
import axios from "../Axios/Axios";
import { toast } from "react-toastify";
import { useglobaldata } from "../Context/MainContext";

function AddInfo() {
  const { loginUser, setloginUser } = useglobaldata();

  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [files, setfiles] = useState(null);

  function handleTag() {
    if (inputValue.trim() === "") return; // ignore empty input

    if (!items.includes(inputValue)) {
      setItems([...items, inputValue.trim()]); // push into array
    }
    setInputValue("");
  }

  //remove tag functionlity

  function removetag(tag) {
    const skill = items.filter((data) => data !== tag);
    setItems(skill);
  }

  //patch data
  const handleAdd = async () => {
    if (!files) return;
    if (items.length <= 0) return;

    const { id } = loginUser;

    try {
      const response = await axios.patch(`/user/${id}`, {
        skills: items,
        resume: files,
      });
      setloginUser(response.data);
      toast.success(response.statusText);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sm:w-1/2 flex flex-col gap-5 p-5">
      <h1 className="text-5xl capitalize mb-10 font-light">profile update</h1>
      <div>
        <div className="w-full flex items-center md:gap-5 flex-wrap md:flex-nowrap">
          <label
            htmlFor="skill"
            className="text-2 capitalize font-light block pb-2 whitespace-nowrap"
          >
            add skill
          </label>
          <input
            type="text"
            value={inputValue}
            placeholder="Type and press Enter..."
            className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            onClick={handleTag}
            className="block p-3 bg-[var(--btn-color)] text-[var(--font-white)] capitalize rounded-3xl md:w-full cursor-pointer mt-3 md:mt-0"
          >
            skill tag
          </button>
        </div>
        {/* rendering tag */}
        <div className="mt-3 w-full flex flex-wrap">
          {items.map((tag, index) => {
            return (
              <small
                className="bg-zinc-300 m-1 p-1 rounded uppercase cursor-pointer"
                key={index}
                onClick={() => removetag(tag)}
              >
                {tag}
              </small>
            );
          })}
        </div>
      </div>
      <div className="w-full flex items-center gap-5">
        <label
          htmlFor="upload"
          className="text-2 capitalize font-light block pb-2"
        >
          resume
        </label>
        <input
          type="file"
          onChange={(e) => setfiles(e.target.files[0].name)}
          className="border border-gray-300 py-2 rounded-3xl w-full pl-3"
        />
      </div>
      <div className="w-full flex flex-col gap-5">
        <label
          htmlFor="details"
          className="text-2 capitalize font-light block pb-2"
        >
          describe yourself
        </label>
        <textarea
          placeholder="bio"
          className="border border-gray-300 py-2 rounded-3xl w-full pl-3 h-[300px] resize-none"
        ></textarea>
      </div>
      <button
        onClick={handleAdd}
        className="block p-3 bg-[var(--btn-color)] text-[var(--font-white)] capitalize rounded-3xl md:w-full cursor-pointer mt-3"
      >
        add
      </button>
    </div>
  );
}

export default AddInfo;
