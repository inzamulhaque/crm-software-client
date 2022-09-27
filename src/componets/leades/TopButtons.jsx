import React from "react";
import { useNavigate } from "react-router-dom";

const TopButtons = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-5 flex justify-evenly">
        <button
          className="border-2 rounded-md border-blue-500 text-blue-500 text-[20px] py-2 px-2 font-semibold duration-300 ease-in-out hover:text-white hover:bg-blue-500"
          onClick={() => navigate("/leads")}
        >
          Leads
        </button>

        <button
          className="border-2 rounded-md border-blue-500 text-blue-500 text-[20px] py-2 px-2 font-semibold duration-300 ease-in-out hover:text-white hover:bg-blue-500"
          onClick={() => navigate("/addlead")}
        >
          Add Lead
        </button>

        <button className="border-2 rounded-md border-blue-500 text-blue-500 text-[20px] py-2 px-2 font-semibold duration-300 ease-in-out hover:text-white hover:bg-blue-500">
          {" "}
          Get All Leads{" "}
        </button>

        <button className="border-2 rounded-md border-blue-500 text-blue-500 text-[20px] py-2 px-2 font-semibold duration-300 ease-in-out hover:text-white hover:bg-blue-500">
          {" "}
          Filter Leads{" "}
        </button>
      </div>
    </>
  );
};

export default TopButtons;
