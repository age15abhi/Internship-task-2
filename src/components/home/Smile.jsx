import React from "react";
const Smile = ({ image }) => {
  return (
    <div className="p-2">
      <img className="w-10 bg-neutral-100" src={image} />
    </div>
  );
};

export default Smile;
