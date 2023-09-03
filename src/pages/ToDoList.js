import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('todo-list')) || []
  );
  const [inputText, setInputText] = useState('');

  const addTask = () => {
    if (inputText.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputText('');
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold text-center mb-4">Todo List</h1>
      <div className="flex items-center">
        <input
          type="text"
          className="w-full py-2 px-3 rounded-l-md focus:outline-none"
          placeholder="Add a task..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Add
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center ${task.completed ? 'text-green-500' : ''
                }`}
            >
              <FaCheckCircle
                onClick={() => toggleCompletion(task.id)}
                className={`cursor-pointer mr-2 ${task.completed ? 'text-green-500' : 'text-gray-300'
                  }`}
              />
              <p
                className={`flex-grow ${task.completed ? 'line-through' : ''
                  }`}
              >
                {task.text}
              </p>
              <FaTrash
                onClick={() => deleteTask(task.id)}
                className="cursor-pointer text-red-500"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TodoList;
