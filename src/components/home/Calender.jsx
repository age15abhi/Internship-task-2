import React from "react";
import { SlCalender } from "react-icons/sl";

const calender = () => {
  return (
    <div className="flex flex-row justify-between items-end ">
      <div className="rounded-full p-1 text-primary">
        <SlCalender />
      </div>
      <h1 className="text-neutral-600 text-md">Your school</h1>
    </div>
  );
};

export default calender;
