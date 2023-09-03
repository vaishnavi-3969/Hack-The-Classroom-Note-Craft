import React, { useState, useRef } from 'react';
import { Stage, Layer, Rect, Circle, Text, Transformer } from 'react-konva';
import { FaSquare, FaCircle, FaFont, FaExpand } from 'react-icons/fa';

const Whiteboard = () => {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const stageRef = useRef(null);

  const handleAddRectangle = () => {
    const newElement = {
      type: 'rectangle',
      x: 100,
      y: 100,
      width: 100,
      height: 60,
      fill: 'blue',
    };
    setElements([...elements, newElement]);
  };

  const handleAddCircle = () => {
    const newElement = {
      type: 'circle',
      x: 100,
      y: 100,
      radius: 40,
      fill: 'red',
    };
    setElements([...elements, newElement]);
  };

  const handleAddText = () => {
    const newElement = {
      type: 'text',
      x: 100,
      y: 100,
      text: 'Text',
      fontSize: 16,
      fill: 'black',
    };
    setElements([...elements, newElement]);
  };

  const checkDeselect = (e) => {
    if (e.target === e.target.getStage()) {
      setSelectedId(null);
    }
  };

  const handleSelect = (e, id) => {
    e.cancelBubble = true;
    setSelectedId(id);
  };

  const handleDragEnd = (e, index) => {
    const updatedElements = [...elements];
    updatedElements[index] = {
      ...updatedElements[index],
      x: e.target.x(),
      y: e.target.y(),
    };
    setElements(updatedElements);
  };

  const handleTransformEnd = (e, index) => {
    const updatedElements = [...elements];
    const node = stageRef.current.findOne(`#${index}`);
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();

    updatedElements[index] = {
      ...updatedElements[index],
      x: node.x(),
      y: node.y(),
      width: node.width() * scaleX,
      height: node.height() * scaleY,
    };
    setElements(updatedElements);
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={handleAddRectangle} className="toolbar-button">
          <FaSquare />
        </button>
        <button onClick={handleAddCircle} className="toolbar-button">
          <FaCircle />
        </button>
        <button onClick={handleAddText} className="toolbar-button">
          <FaFont />
        </button>
        <button onClick={handleAddText} className="toolbar-button">
          <FaExpand />
        </button>
      </div>
      <Stage
        width={window.innerWidth - 100}
        height={window.innerHeight - 200}
        onClick={checkDeselect}
        ref={stageRef}
      >
        <Layer>
          {elements.map((element, index) => {
            if (element.type === 'rectangle') {
              return (
                <Rect
                  key={index}
                  id={index}
                  x={element.x}
                  y={element.y}
                  width={element.width}
                  height={element.height}
                  fill={element.fill}
                  draggable
                  onDragEnd={(e) => handleDragEnd(e, index)}
                  onClick={(e) => handleSelect(e, index)}
                />
              );
            } else if (element.type === 'circle') {
              return (
                <Circle
                  key={index}
                  id={index}
                  x={element.x}
                  y={element.y}
                  radius={element.radius}
                  fill={element.fill}
                  draggable
                  onDragEnd={(e) => handleDragEnd(e, index)}
                  onClick={(e) => handleSelect(e, index)}
                />
              );
            } else if (element.type === 'text') {
              return (
                <Text
                  key={index}
                  id={index}
                  x={element.x}
                  y={element.y}
                  text={element.text}
                  fontSize={element.fontSize}
                  fill={element.fill}
                  draggable
                  onDragEnd={(e) => handleDragEnd(e, index)}
                  onClick={(e) => handleSelect(e, index)}
                  onTransformEnd={(e) => handleTransformEnd(e, index)}
                />
              );
            }
            return null;
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default Whiteboard;
