import React from "react";
import { faUsersLine, faHourglassEnd, faClock, faStopwatch20, faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import HomeMenu from "./HomeMenu";

const HomeMenus = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <HomeMenu bg="bg-amber-500" icon={faUsersLine} title="Leads" count={20} link="/leads" />

        <HomeMenu bg="bg-yellow-400" icon={faClock} title="UnReched" count={20} link="/unreched" />

        <HomeMenu bg="bg-blue-500" icon={faHourglassEnd} title="Reched" count={20} link="/reched" />

        <HomeMenu bg="bg-sky-600" icon={faStopwatch20} title="Maybe Clients" count={20} link="/maybeclients" />

        <HomeMenu bg="bg-green-500" icon={faCircleCheck} title="Clients" count={20} link="/clients" />

        <HomeMenu bg="bg-red-500" icon={faCircleXmark} title="Canceled" count={20} link="/canceled" />
      </div>
    </>
  );
};

export default HomeMenus;
