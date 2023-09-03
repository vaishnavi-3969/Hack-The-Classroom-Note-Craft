import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Whiteboard = () => {
  const [elements, setElements] = useState([]);
  const [draggingElement, setDraggingElement] = useState(null);

  const addElement = (type) => {
    const newElement = {
      id: Date.now(),
      type,
      x: 100,
      y: 100,
    };
    setElements([...elements, newElement]);
  };

  const handleDragStart = (event, element) => {
    setDraggingElement(element);
  };

  const handleDragEnd = () => {
    setDraggingElement(null);
  };

  const handleDrag = (event, element) => {
    if (draggingElement === element) {
      const updatedElement = {
        ...element,
        x: element.x + event.movementX,
        y: element.y + event.movementY,
      };
      setElements(elements.map((el) => (el.id === element.id ? updatedElement : el)));
    }
  };

  return (
    <div className="relative bg-white h-screen">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute cursor-pointer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          drag
          dragElastic={0}
          onDragStart={(event) => handleDragStart(event, element)}
          onDragEnd={handleDragEnd}
          onDrag={(event) => handleDrag(event, element)}
          style={{
            left: element.x,
            top: element.y,
          }}
        >
          {element.type === 'rectangle' && (
            <div className="w-20 h-12 bg-blue-500 rounded"></div>
          )}
          {element.type === 'circle' && (
            <div className="w-12 h-12 bg-red-500 rounded-full"></div>
          )}
          {element.type === 'text' && (
            <div className="text-black font-semibold">Text</div>
          )}
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-4 space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => addElement('rectangle')}
        >
          Add Rectangle
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => addElement('circle')}
        >
          Add Circle
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => addElement('text')}
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default Whiteboard;
