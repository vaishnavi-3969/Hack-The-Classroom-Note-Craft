import React, { useState } from 'react';
import plus from '../../assets/add.png';

const Sidebar = ({ addNote }) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);

  return (
    <div className=" p-4">
      <img
        src={plus}
        alt="add"
        onClick={() => setListOpen(!listOpen)}
        className="cursor-pointer"
      />
      <ul className={`mt-2 ${listOpen ? "block" : "hidden"}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="w-8 h-8 rounded-full inline-block mr-2"
            style={{ backgroundColor: item }}
            onClick={() => addNote(item)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
