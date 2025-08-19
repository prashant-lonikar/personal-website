import React, { useState } from 'react';
import { projects } from '../utils/projects';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = {
    all: "All Projects",
    ai: "AI & ML",
    sustainability: "Sustainability",
    productivity: "Productivity Tools",
    fun: "Fun Projects"
  };

  

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800 border-green-200',
      'Completed': 'bg-blue-100 text-blue-800 border-blue-200',
      'Live': 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'ai': 'bg-blue-50 text-blue-700 border-blue-200',
      'sustainability': 'bg-green-50 text-green-700 border-green-200',
      'productivity': 'bg-orange-50 text-orange-700 border-orange-200',
      'fun': 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return colors[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  return (
    <div className="projects">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A collection of projects that showcase my passion for AI, sustainability, and building useful tools. 
          From professional solutions to fun experiments, each project represents a learning opportunity and a chance to solve real problems.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-2 rounded-lg border-2 transition-all duration-300 ${
              activeCategory === key
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Project Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-800 flex-1 mr-3">{project.title}</h3>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>
              
              {/* Category Badge */}
              <div className={`self-start inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3 ${getCategoryColor(project.category)}`}>
                {categories[project.category]}
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Technologies */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Impact */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-1">Impact:</div>
                <div className="text-sm font-medium text-gray-700">{project.impact}</div>
              </div>
              
              {/* Link */}
              <div className="mt-auto">
                {project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium"
                  >
                    View Project →
                  </a>
                ) : (
                  <span className="inline-block bg-gray-200 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Have a Project in Mind?</h2>
        <p className="text-gray-600 mb-6">
          I'm always interested in new challenges and opportunities to create innovative solutions.
        </p>
        <a 
          href="mailto:prashant.lonikar@gmail.com" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Let's Collaborate
        </a>
      </div>
    </div>
  );
}

export default Projects;