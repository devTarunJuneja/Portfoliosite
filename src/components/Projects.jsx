import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import echohealthImg from '../assets/echohealth.jpg';
import urbanecoImg from '../assets/urbaneco.jpg';
import urbanethnicImg from '../assets/urbanethnic.jpg';

const projects = [
  {
    name: 'EchoHealth',
    image: echohealthImg,
    description:
      'EchoHealth is an AI-powered platform that analyzes voice samples to detect issues, offers chatbot guidance, voice exercises, and helps users find nearby specialists.',
    github: 'https://github.com/devtarunjuneja/echohealth',
    live: '',
    tags: ['React.js', 'JavaScript', 'AI', 'REST APIs'],
  },
  {
    name: 'UrbanEco',
    image: urbanecoImg,
    description:
      'UrbanECO is an e-waste selling platform designed to provide affordable electronic components to engineering students. It also includes an integrated AI chatbot for assistance.',
    github: 'https://github.com/devtarunjuneja/urban-eco',
    live: 'https://urbanecohacktu.vercel.app/',
    tags: ['React.js', 'JavaScript', 'CSS', 'REST APIs'],
  },
  {
    name: 'UrbanEthnic',
    image: urbanethnicImg,
    description:
      'Urban Ethnic is a fashion e-commerce platform offering curated clothing and accessories with a modern, ethnic twist.',
    github: 'https://github.com/devtarunjuneja/urbanethnic',
    live: 'https://urbanethnic.vercel.app/',
    tags: ['React.js', 'JavaScript', 'TailwindCSS', 'E-Commerce'],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-12 lg:px-24 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center space-x-3">
          <FaFolderOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-52 object-cover border-b border-gray-200 dark:border-gray-700"
            />
            <div className="p-6 flex flex-col flex-grow text-gray-800 dark:text-white">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>

              <p className="text-base font-medium leading-relaxed mb-4 text-gray-700 dark:text-gray-200 flex-grow">
                {proj.description}
              </p>

              <ul className="text-sm text-gray-700 dark:text-gray-400 space-y-1 mb-4">
                <li>• Responsive UI with modern design</li>
                <li>• Uses hooks, lazy loading & efficient state logic</li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3 mt-auto">
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center transition-colors duration-300"
                  >
                    Live Demo <FaExternalLinkAlt className="ml-2" />
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-semibold px-4 py-2 rounded-md flex items-center transition-colors duration-300"
                  >
                    Code <FaGithub className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
