import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import TopButtons from "./TopButtons";
import { useState } from "react";

const AddLead = () => {
  const submitLeadData = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const company = event.target.company.value;
    const phone = event.target.phone.value;
    const country = event.target.country.value;
    const address = event.target.address.value;
    const linkedin = event.target.linkedin.value;
    const instagram = event.target.instagram.value;
    const social = event.target.social.value;
    const client_type = event.target.client_type.value;
    const leadstatus = event.target.leadstatus.value;
    const note = event.target.note.value;

    const data = {
      name,
      email,
      company,
      phone,
      country,
      address,
      linkedin,
      instagram,
      social,
      client_type,
      leadstatus,
      note,
    };

    console.log(data);
    event.target.reset();
  };

  return (
    <>
      <div className="container mx-auto">
        <TopButtons />

        <h3 className="text-[25px] text-center text-blue-500 font-bild mt-7 mb-3">
          <FontAwesomeIcon icon={faCircleUser} /> Add New Lead
        </h3>

        <form
          onSubmit={submitLeadData}
          className="mx-[5px] my-5 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter Lead Name*"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Lead Email*"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="company"
              autoComplete="off"
              placeholder="Enter Lead Company Name"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="phone"
              autoComplete="off"
              placeholder="Enter Lead Contact Number"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="country"
              autoComplete="off"
              placeholder="Enter Lead Country Name*"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="address"
              autoComplete="off"
              placeholder="Enter Lead Address"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="linkedin"
              autoComplete="off"
              placeholder="Enter Lead LinkedIn URL"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="instagram"
              autoComplete="off"
              placeholder="Enter Lead Instagram URL"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="social"
              autoComplete="off"
              placeholder="Enter Lead Any Type Social Media URL"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <input
              type="text"
              name="client_type"
              autoComplete="off"
              placeholder="What Type May The Client's?"
              className="border-b-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            />
          </div>

          <div>
            <select
              name="leadstatus"
              className="border-2 border-black text-[22px] font-normal w-full  rounded-md py-2 px-3 focus:outline-none"
            >
              <option value="UnReched" selected>
                UnReched
              </option>
              <option value="Reched">Reched</option>
              <option value="Maybe Client">Maybe Client</option>
              <option value="Client">Client</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>

          <div className="col-span-2">
            <textarea
              type="text"
              name="note"
              autoComplete="off"
              placeholder="Note"
              className="border-b-2 border-black text-[22px] font-normal w-full rounded-md py-2 px-3 focus:outline-none"
            ></textarea>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="block ml-auto rounded-md py-2 px-3 mt-3 border-2 border-blue-500 bg-blue-500 text-white text-center font-semibold duration-300 easy-in-out hover:bg-white hover:text-blue-500"
            >
              Save Info <FontAwesomeIcon icon={faCloudArrowUp} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddLead;
