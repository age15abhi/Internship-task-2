import React from "react";
import Smile from "./Smile";

const OnlineUser = ({ onlineUsers }) => {
  return (
    <>
      {/* smile */}
      {onlineUsers.map(onlineUser => (
        <div className="mt-3" key={onlineUser.id}>
          <div className="flex flex-row items-center">
            <div>
              <Smile image={onlineUser.image} />
            </div>
            {/* headings */}
            <div className="flex flex-col">
              <p className="text-sm text-neutral-500">{onlineUser.name}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OnlineUser;
