import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Modal = ({ isVisible, onClose }) => {
  //   const data = {
  //     labels: ["yes", "No"],
  //     datasets: {
  //       label: "Poll",
  //       data: [3, 6],
  //       backgroundColor: ["black", "red"],
  //       borderColor: ["black", "red"],
  //     },
  //     };

  //     const options = {

  //     }

  if (!isVisible) return null;

  const [noOfInvites, setNoOfInvites] = useState(0);
  const [durationEvent, setDurationOfEvent] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);

  const handleInvite = e => {
    setNoOfInvites(e.target.value);
  };
  const handleDurationOfEvent = e => {
    setDurationOfEvent(e.target.value);
  };
  const handleTimePeriod = e => {
    setTimePeriod(e.target.value);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-red-700 text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded  text-black ">
          <h1 className="justify-center items-center text-center">
            Mutual fund return Calculator
          </h1>
          <div className="flex flex-row">
            <div className="w-1/2 justify-center items-center text-center p-4">
              <div className="justify-between flex">
                <h1>Number Of Invites</h1>
                <h1>{noOfInvites}</h1>
              </div>
              <input
                type="range"
                max={50}
                onChange={handleInvite}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-10"
              />
              <div className="justify-between flex">
                <h1>Duration of Events</h1>
                <h1>{durationEvent}</h1>
              </div>
              <input
                type="range"
                max={50}
                onChange={handleDurationOfEvent}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-10"
              />
              <div className="justify-between flex">
                <h1>Time Period</h1>
                <h1>{timePeriod}</h1>
              </div>
              <input
                type="range"
                max={50}
                onChange={handleTimePeriod}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-10"
              />
              <div className="flex justify-around">
                <h1>
                  Total Invites{" "}
                  <span className="flex place-content-center">
                    {noOfInvites}
                  </span>
                </h1>
                <h1>
                  Duration of Events{" "}
                  <span className="flex place-content-center mb-5">
                    {durationEvent}
                  </span>
                </h1>
              </div>
              <div className="flex text-center justify-center items-center">
                total Value
              </div>
            </div>
            {/* doughnut chart */}
            <div>
              {/* <Doughnut>
                data={data}
                options={options}
              </Doughnut> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
