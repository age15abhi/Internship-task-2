import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [selected, setSelected] = useState(true);
  console.log(selected);
  return (
    <div className="flex flex-row gap-2 justify-center items-center text-md">
      <ul className="flex flex-row gap-4  cursor-pointer">
        <Link to="new">
          <li
            onClick={() => setSelected(true)}
            className={` hover:underline hover:decoration-primary hover:underline-offset-4 ${
              selected
                ? "underline underline-offset-4 decoration-primary font-semibold "
                : ""
            }`}
          >
            New signups
          </li>
        </Link>

        <li className="hover:underline hover:decoration-primary hover:underline-offset-4 ">
          Revenue
        </li>
        <li className="hover:underline hover:decoration-primary hover:underline-offset-4 ">
          Product sales
        </li>
        <li className="hover:underline hover:decoration-primary hover:underline-offset-4 ">
          Active Learner
        </li>
      </ul>
      <div className="rounded-full bg-neutral-300 px-2 py-1 flex items-center gap-1">
        Last 7 days
        <span>
          <BsChevronCompactDown size={15} />
        </span>
      </div>
    </div>
  );
};

export default HomeNavbar;
