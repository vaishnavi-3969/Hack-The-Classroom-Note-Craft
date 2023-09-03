import React, { useState } from 'react';
import { FaPlus, FaPencilAlt, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import close from '../assets/x-close.png';

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
    setSelectedNote(newNote);
    setIsEditorOpen(true);
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
    <div className=" min-h-screen flex flex-col">
      <header className="py-4 text-black text-center text-2xl font-semibold">
        Notebook
      </header>
      <div className="flex-1 container mx-auto p-4 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">Your Notes</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addNote}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
          >
            <FaPlus className="mr-2" />
            Create Note
          </motion.button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {notes.map((note) => (
            <motion.div
              key={note.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => selectNote(note)}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedNote?.id === note.id
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
                <div className="flex space-x-2">
                  <FaPencilAlt
                    onClick={() => selectNote(note)}
                    className="text-blue-500 cursor-pointer"
                  />
                  <FaTimes
                    onClick={() => {
                    }}
                    className="text-red-500 cursor-pointer"
                  />
                </div>
              </div>
              <p className="text-gray-500 mt-2">{note.content.slice(0, 100)}...</p>
            </motion.div>
          ))}
        </div>
      </div>
      {isEditorOpen && (
        <div className="bg-white p-4 fixed bottom-0 right-0 left-0 h-screen overflow-y-scroll">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Edit Note</h2>
            <button
              onClick={() => setIsEditorOpen(false)}
              className="text-blue-500 hover:underline cursor-pointer"
            >
             <img src={close} alt='close'/>
            </button>
          </div>
          <div className='p-1'>
          <ReactQuill value={editorContent} onChange={updateNoteContent} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Notebook;
