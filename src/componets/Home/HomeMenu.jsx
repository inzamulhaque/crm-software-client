import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const HomeMenu = ({ bg, icon, title, count, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`rounded-lg py-5 px-7 items-center cursor-pointer ${bg}`} onClick={() => navigate(link)}>
        <div className="flex items-center h-full min-h-[150px]">
          <div className="flex-auto w-1/3">
            <FontAwesomeIcon icon={icon} className="text-white text-[50px]" />
          </div>
          <div className="flex-auto w-2/3">
            <h3 className="text-[25px] text-white font-semibold">{title}</h3>
            <p className="text-white text-[18px] font-medium">
              Total {title}: {count}
            </p>

            <span
              className="text-[16px] text-white font-normal"
              
            >
              Go To {title} <FontAwesomeIcon icon={faCircleArrowRight} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeMenu;
