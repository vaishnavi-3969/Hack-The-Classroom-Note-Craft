import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [workspaceName, setWorkspaceName] = useState('');

  useEffect(() => {
    // Fetch the list of workspaces from your API or data source
    const fetchWorkspaces = async () => {
      try {
        // Replace with your API call to fetch workspaces
        const response = await fetch('/api/workspaces');
        if (response.ok) {
          const data = await response.json();
          setWorkspaces(data.workspaces);
        } else {
          console.error('Error fetching workspaces');
        }
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchWorkspaces();
  }, []);

  const createWorkspace = async () => {
    try {
      // Replace with your API call to create a new workspace
      const response = await fetch('/api/workspaces', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: workspaceName }),
      });
      if (response.ok) {
        const newWorkspace = await response.json();
        setWorkspaces([...workspaces, newWorkspace]);
        setWorkspaceName('');
      } else {
        console.error('Error creating workspace');
      }
    } catch (error) {
      console.error('Error creating workspace:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Workspaces</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter workspace name"
          className="border rounded p-2 mr-2"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={createWorkspace}
        >
          Create Workspace
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {workspaces.map((workspace) => (
          <div key={workspace.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{workspace.name}</h2>
            <Link to={`/workspace/${workspace.id}`} className="text-blue-500 hover:underline">
              View Workspace
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
