import React, { useState } from 'react';
import Webpage from '../assets/projects/Webpage.png';
import HMS from '../assets/projects/HMS.png';
import Portfolio from '../assets/projects/Reactjs.png';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Website using HTML & CSS",
      description: "Project 1",
      image: Webpage,
      githubLink: "https://github.com/ansukathapaliya/website-using-html-css",
    },
    {
      id: 2,
      title: "Hospital Management System Using Python",
      description: "Project 2",
      image: HMS,
      githubLink: "https://github.com/yourusername/hospital-management-system",
    },
    {
      id: 3,
      title: "My Portfolio using React JS",
      description: "Project 3",
      image: Portfolio,
      githubLink: "https://github.com/yourusername/portfolio-react",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-gray-300 text-black p-8 pt-28">
      <h1 className="text-5xl text-gray-800 font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ id, title, description, image, githubLink }) => (
          <div
            key={id}
            className="bg-purple-100 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-rose-500 mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 py-2 px-6 rounded-lg bg-gradient-to-r from-teal-500 to-rose-400 text-white font-semibold hover:from-teal-600 hover:to-rose-500"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
