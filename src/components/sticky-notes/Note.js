import React from 'react';
import deleteIcon from '../../assets/x-close.png';
import { motion } from 'framer-motion';

let timer = 500,
  timeout;

function Note(props) {
  const formatDate = (value) => {
    if (!value) return '';

    const date = new Date(value);
    const monthNames = [
      'Jan',
      'Feb',
      'March',
      'April',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? 'PM' : 'AM';
    hrs = hrs ? hrs : '12';
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? '0' + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <motion.div
      className="note bg-yellow-200 p-2  mb-4"
      style={{ backgroundColor: props.note.color }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <textarea
        className="note_text w-full h-20 rounded-md bg-transparent p-2"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />
      <div className="note_footer flex justify-between items-center mt-2">
        <p className="text-sm text-gray-600">
          {formatDate(props.note.time)}
        </p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
          className="cursor-pointer"
        />
      </div>
    </motion.div>
  );
}

export default Note;
