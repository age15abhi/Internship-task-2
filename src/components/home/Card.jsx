import React from "react";

const Card = ({ children, title, number }) => {
  return (
    <div className="flex flex-col items-center mx-7 p-2 sm:text-[2px] lg:text-base ">
      {/* icon */}
      <div className="self-center my-1 text-primary">{children}</div>
      {/* title */}
      <p className="text-sm my-3">{title}</p>
      {/* number */}
      <h1 className="text-md font-bold">{number}</h1>
    </div>
  );
};

export default Card;
