import { useEffect, useState } from "react";
import { useglobaldata } from "../../Context/MainContext";
import axios from "../../Axios/Axios";

function ManageJob() {
  const { loginUser } = useglobaldata();

  const [managepost, setmanagepost] = useState([]);

  useEffect(() => {
    async function manageFetch() {
      try {
        const response = await axios.get(`job?createdBy.id=${loginUser.id}`);
        setmanagepost(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    manageFetch();
  }, []);

  async function remove(obj) {
    console.log(obj);
    try {
      const updatejob = managepost.filter((data) => data.id !== obj.id);
      const response = await axios.delete(`/job/${obj.id}`);
      console.log(response);
      setmanagepost(updatejob);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="text-4xl capitalize">manage job</h1>
      <div>
        {managepost.length > 0 ? (
          <div className="flex flex-col gap-5 mt-5">
            {managepost.map((data) => {
              return (
                <div
                  key={data.id}
                  className="border p-5 rounded-2xl border-gray-300 flex items-center justify-between"
                >
                  <div>
                    <h1 className="text-3xl capitalize mb-1">{data.title}</h1>
                    <p className="line-clamp-1">{data.description}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => remove(data)}
                      className="bg-[var(--btn-color)] text-white  py-2 px-5 rounded capitalize cursor-pointer"
                    >
                      remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-5 capitalize text-center font-bold">
            not post yet
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageJob;
