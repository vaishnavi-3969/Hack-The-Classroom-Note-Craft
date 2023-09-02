import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Notebook = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [editorContent, setEditorContent] = useState('');
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'New Note',
      content: '',
    };
    setNotes([...notes, newNote]);
  };

  const selectNote = (note) => {
    setSelectedNote(note);
    setEditorContent(note.content);
    setIsEditorOpen(true);
  };

  const updateNoteContent = (content) => {
    if (selectedNote) {
      const updatedNotes = notes.map((note) =>
        note.id === selectedNote.id ? { ...note, content } : note
      );
      setNotes(updatedNotes);
      setEditorContent(content);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-500 py-4 text-white text-center text-2xl font-semibold">
        Notebook
      </header>
      <div className="flex-1 container mx-auto p-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Notes</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addNote}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full flex items-center"
          >
            <FaPlus className="mr-1" />
            Create New Note
          </motion.button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {notes.map((note) => (
            <motion.div
              key={note.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => selectNote(note)}
              className={`p-4 bg-white border rounded-lg cursor-pointer ${
                selectedNote?.id === note.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
              }`}
            >
              <h3 className="text-lg font-semibold">{note.title}</h3>
              <p className="text-gray-500">{note.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {isEditorOpen && (
        <div className="bg-white p-4 fixed bottom-0 right-0 left-0">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Edit Note</h2>
            <button
              onClick={() => setIsEditorOpen(false)}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Close Editor
            </button>
          </div>
          <ReactQuill value={editorContent} onChange={updateNoteContent} />
        </div>
      )}
    </div>
  );
};

export default Notebook;
