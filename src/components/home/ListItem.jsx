import React from "react";

const lists = [
  {
    id: 1,
    heading: "Blending Learning: What it is why it Matters & How to Apply",
    daysLeft: "7",
  },
  {
    id: 2,
    heading: "Blending Learning: What it is why it Matters & How to Apply",
    daysLeft: "7",
  },
];

const ListItem = () => {
  return (
    <div className="flex flex-col mt-2">
      {lists.map(list => (
        <div className="flex justify-between mx-3" key={list.id}>
          <ul className="w-2/3 mb-3 ">
            <li className="text-primary">{list.heading}</li>
          </ul>
          <p className="text-neutral-500">{list.daysLeft} days ago</p>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
