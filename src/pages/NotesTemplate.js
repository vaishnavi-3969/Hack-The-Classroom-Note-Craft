import React from "react";
import Cornell from '../assets/cornell-method.png';
import Outlining from '../assets/outline-method.png';
import Mapping from '../assets/mappingmethod.png';
import Charting from '../assets/charting.png';



const NoteTakingMethods = () => {
  const methods = [
    {
      title: "The Cornell Method",
      image: Cornell,
      content: `
# The Cornell Method

## Overview
The Cornell Method is a systematic approach to taking notes during lectures or while reading. It helps you organize your notes for better retention and review.

## Format
1. Divide your paper into three sections:
   - **Cues/Questions**: On the left, jot down questions, keywords, or cues based on your notes.
   - **Notes**: In the larger center section, write your notes during the lecture or reading.
   - **Summary**: After the lecture or reading, summarize the main points in the bottom section.

## Benefits
- Effective for studying and reviewing.
- Encourages active engagement during note-taking.
- Easily find and review key points.
`,
    },
    {
      title: "The Outlining Method",
      image: Outlining,
      content: `
# The Outlining Method

## Overview
The Outlining Method is a structured way of taking notes, using indentation to show relationships between ideas. It's great for organizing information hierarchically.

## Format
- Use headings and subheadings to organize content.
- Indent subpoints under main points to indicate relationships.
- Use bullet points, numbers, or letters to create an outline structure.

## Benefits
- Clarity in organizing and presenting information.
- Easily identify the hierarchy of ideas.
- Simplifies complex topics.
`,
    },
    {
      title: "The Mapping Method",
      image: Mapping,
      content: `
# The Mapping Method

## Overview
The Mapping Method uses visual diagrams to represent information. It's ideal for visual learners and for capturing relationships between ideas.

## Format
- Start with a central idea or topic in the center of the page.
- Use lines, shapes, and keywords to create a visual map.
- Connect related ideas and concepts with lines.

## Benefits
- Encourages creative thinking and visual representation.
- Easily grasp the big picture of a topic.
- Show connections and relationships visually.
`,
    },
    {
      title: "The Charting Method",
      image: Charting,
      content: `
# The Charting Method

## Overview
The Charting Method involves creating tables or charts to organize information. It's effective for comparing and contrasting data.

## Format
- Create tables with rows and columns.
- Label columns and rows with relevant headings.
- Fill in information in an organized manner.

## Benefits
- Excellent for organizing data and comparisons.
- Clear and structured representation.
- Simplifies complex information.
`,
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Note-Taking Templates</h1>
      <p>Click to create copy</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {methods.map((method, index) => (
          <div key={index} className="rounded-lg shadow-md p-4 bg-white">
            <img
              src={method.image}
              alt={method.title}
              className="rounded-lg mb-4"
              style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }}
            />
            <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
            <div className="markdown">{method.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteTakingMethods;
