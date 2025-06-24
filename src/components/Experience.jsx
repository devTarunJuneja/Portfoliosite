// src/components/Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Internship Trainee',
    company: 'Hoping Minds',
    location: 'Mohali, India',
    duration: 'July 2024 – September 2024',
    details: [
      'Built an Amazon-like e-commerce clone using HTML, CSS, and JavaScript.',
      'Gained foundational knowledge in HTML, CSS, JavaScript, and React.js.',
      'Explored basic concepts of Search Engine Optimization (SEO).',
    ],
  },
  {
    title: 'AICTE Internship in Artificial Intelligence',
    company: 'Techsaksham Edunet Foundation | AICTE | Microsoft | SAP',
    location: 'Virtual',
    duration: 'January 2025 – March 2025',
    details: [
      'Developed a health specialist chatbot using JavaScript and HTML/CSS.',
      'Integrated frontend interface with backend logic for real-time responses.',
      'Handled dynamic DOM updates for user queries.',
    ],
  },
  {
    title: 'Freelancing (Web Development)',
    company: 'Through LinkedIn, International Students',
    location: 'Remote',
    duration: 'June 2023 – Present',
    details: [
      'Designed and built responsive websites for international university students.',
      'Technologies used: React.js, Tailwind CSS, Vite, API integrations, deployment.',
      'Collaborated with international students to gather requirements, manage timelines, and deliver polished UIs.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-6 px-4">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-4">
        <div className="flex items-center justify-center space-x-2">
          <Briefcase className="w-7 h-7 text-teal-600 dark:text-teal-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Experience
          </h2>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative w-full md:w-3/4 mx-auto">
        {/* Vertical line in center */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1 bg-teal-600 dark:bg-teal-400 w-1 top-0 bottom-0" />

        <div className="space-y-4">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-center"
              >
                {isLeft ? (
                  <>
                    {/* Content on left side, left-aligned */}
                    <div className="md:w-1/2 md:pr-4">
                      <div className="inline-block bg-white dark:bg-gray-800 border border-teal-600 dark:border-teal-400 rounded-lg p-4 shadow-sm w-full">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 font-medium text-sm">
                          {exp.company} | {exp.location}
                        </p>
                        <ul className="mt-1 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 text-left text-sm">
                          {exp.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    {/* Timeline marker */}
                    <div className="md:w-1/2 flex justify-center md:justify-start relative">
                      <div className="z-10 w-7 h-7 bg-white dark:bg-gray-900 border-2 border-teal-600 dark:border-teal-400 rounded-full flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Timeline marker */}
                    <div className="md:w-1/2 flex justify-center md:justify-end relative">
                      <div className="z-10 w-7 h-7 bg-white dark:bg-gray-900 border-2 border-teal-600 dark:border-teal-400 rounded-full flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      </div>
                    </div>
                    {/* Content on right side, left-aligned */}
                    <div className="md:w-1/2 md:pl-4">
                      <div className="inline-block bg-white dark:bg-gray-800 border border-teal-600 dark:border-teal-400 rounded-lg p-4 shadow-sm w-full">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {exp.title}
                        </h3>
                        <p className="text-teal-600 dark:text-teal-400 font-medium text-sm">
                          {exp.company} | {exp.location}
                        </p>
                        <ul className="mt-1 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1 text-left text-sm">
                          {exp.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
