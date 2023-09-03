import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { ProjectId } = useParams();
  const [Project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/api/Projects/${ProjectId}`);
        if (response.ok) {
          const data = await response.json();
          setProject(data.Project);
        } else {
          console.error('Error fetching Project details');
        }
      } catch (error) {
        console.error('Error fetching Project details:', error);
      }
    };

    fetchProjectDetails();
  }, [ProjectId]);

  return (
    <div className="container mx-auto p-4">
      {Project ? (
        <div className="bg-white p-4 rounded-lg shadow">
          <h1 className="text-2xl font-semibold mb-2">{Project.name}</h1>
        </div>
      ) : (
        <p>Loading Project details...</p>
      )}
    </div>
  );
};

export default ProjectDetail;
