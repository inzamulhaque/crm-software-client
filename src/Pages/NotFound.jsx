import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] flex items-center bg-black justify-center">
        <div>
          <h1 className="text-blue-500 text-[32px] font-bold text-center">
            404!
          </h1>
          <h2 className="text-yellow-400 text-[28px] font-bold text-center">
            OOPS!
          </h2>
          <p className="text-white text-[18px] font-bold text-center">
            Page Not Found!
          </p>
          <span
            className="text-[14px] underline-offset-1 underline-blue-400 text-blue-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} /> Back To Home Page
          </span>
        </div>
      </div>
    </>
  );
};

export default NotFound;
