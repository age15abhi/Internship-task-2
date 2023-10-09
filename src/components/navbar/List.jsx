import React from "react";

const List = ({ children, title }) => {
  return (
    <div className="flex flex-row items-center gap-2 text-md">
      {/* icon */}
      <div className="rounded-full bg-neutral-300 p-1">{children}</div>
      {/* title */}
      <div>{title}</div>
    </div>
  );
};

export default List;
