import React from 'react';
import Note from './Note';

const NoteContainer = (props) => {
  const revArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = revArray(props.notes);

  return (
    <div className="note-container bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Sticky Notes</h2>
      <div className="grid grid-cols-2 gap-4">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3 className="col-span-2 text-gray-600 text-center">
            No Sticky Notes present
          </h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
