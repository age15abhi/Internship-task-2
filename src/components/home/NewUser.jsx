import React from "react";
import Smile from "./Smile";

const newUsers = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/128/40/40157.png",
    name: "HUBX",
    timeLeft: "24",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/128/40/40157.png",
    name: "HUBX",
    timeLeft: "24",
  },
];

const NewUser = () => {
  return (
    <div>
      {/* smile */}
      {newUsers.map(newUser => (
        <div className="mt-3" key={newUser.id}>
          <div className="flex flex-row items-center">
            <div>
              <Smile image={newUser.image} />
            </div>
            {/* headings */}
            <div className="flex flex-col">
              <p className="text-sm text-neutral-500">{newUser.name}</p>
              <p className="text-sm text-neutral-500">{newUser.timeLeft} min</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewUser;
