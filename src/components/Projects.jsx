// src/components/Projects.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const projects = [
  {
    name: 'EchoHealth',
    description:
      'EchoHealth is an AI-powered platform that analyzes voice samples to detect issues, offers chatbot guidance, voice exercises, and helps users find nearby specialists.',
    github: 'https://github.com/devtarunjuneja/echohealth',
    live: '',
  },
  {
    name: 'Urban Eco',
    description:
      'UrbanECO is an e-waste selling platform designed to provide affordable electronic components to engineering students. It also includes an integrated AI chatbot for assistance.',
    github: 'https://github.com/devtarunjuneja/urban-eco',
    live: 'https://urbanecohacktu.vercel.app/',
  },
  {
    name: 'Urban Ethnic',
    description:
      'Urban Ethnic is a fashion e-commerce platform offering curated clothing and accessories with a modern, ethnic twist.',
    github: 'https://github.com/devtarunjuneja/urbanethnic',
    live: 'https://urbanethnic.vercel.app/',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-800 py-16 px-8 sm:px-12 lg:px-16"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center space-x-2">
          <FaFolderOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Projects
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-screen-xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            {/* Title & Description */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {proj.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                {proj.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <FaGithub className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
                >
                  <FaExternalLinkAlt className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
