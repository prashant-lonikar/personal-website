import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Example Project 1",
      description: "This is a brief description of the first project...",
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Example Project 2",
      description: "This is a brief description of the second project...",
      githubLink: "https://github.com/yourusername/project2"
    }
  ];

  return (
    <div className="projects">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="mb-4">{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;