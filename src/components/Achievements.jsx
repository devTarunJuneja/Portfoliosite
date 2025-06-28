import React from 'react';
import { FaMedal, FaTrophy, FaGlobe, FaLaptopCode } from 'react-icons/fa';

import hackvisionvaultImg from '../assets/hackvisionvault.jpg';
import hackmorImg from '../assets/hackmor.jpg';
import hacktuImg from '../assets/hacktu22.jpg';
import hackvsitImg from '../assets/hackvsit.jpg';
import sihImg from '../assets/sih.jpg';

const hackathons = [
  {
    icon: <FaMedal className="text-yellow-400 w-5 h-5" />,
    title: '1st Place – HackVisionVault Hackathon',
    description:
      '<b>Champion team</b> out of 128 at <b>HackVisionVault 2K25</b>! Built <b>EchoHealth</b> – an <b>AI voice diagnostic platform</b> using <b>acoustic features</b> and <b>LLMs</b> to detect vocal disorders. Delivered a <b>smooth live demo</b> and stood out for <b>rural healthcare impact</b> at Maharishi Markandeshwar University.',
    image: hackvisionvaultImg,
    alt: 'HackVisionVault first place photo',
  },
  {
    icon: <FaTrophy className="text-indigo-500 w-5 h-5" />,
    title: '2nd Place – HackMOR Hackathon Exhibition',
    description:
      'Presented <b>SwapSense</b> – an <b>AI deepfake detection tool</b> using <b>computer vision</b> and <b>transformers</b>. Showcased to <b>AICTE Chairman & Google reps</b> at Manav Rachna University. <b>Selected from 200+ entries</b> for <b>originality</b>, <b>UI/UX</b>, and <b>real-world impact</b> against misinformation.',
    image: hackmorImg,
    alt: 'HackMOR exhibition photo',
  },
  {
    icon: <FaGlobe className="text-green-500 w-5 h-5" />,
    title: 'Top 10 – HackTU 6.0 (MLH)',
    description:
      '<b>Finalist</b> at <b>HackTU 6.0 (MLH)</b> – built <b>UrbanECO</b>, an <b>AI-powered e-waste platform</b> with reselling, tutorials, and eco-rewards. <b>Only Haryana team</b> in top 10 out of 200+ global entries. <b>Praised by GitHub, MongoDB & Streamlit</b> for <b>innovation and scalability</b>.',
    image: hacktuImg,
    alt: 'HackTU 6.0 finalist photo',
  },
  {
    icon: <FaLaptopCode className="text-gray-500 w-5 h-5" />,
    title: '4th Place – HackVSIT 6.0',
    description:
      '<b>4th place</b> at <b>HackVSIT 6.0</b> – built <b>Prompt2Code</b>, an <b>AI code generator</b> using <b>Gemini API</b>. Included <b>multi-page UI</b>, prompt history, and a <b>clean Tailwind-React design</b>. <b>Praised</b> for <b>full-stack delivery</b>, <b>polished UX</b>, and <b>deployment-ready execution</b>.',
    image: hackvsitImg,
    alt: 'HackVSIT project photo',
  },
  {
    icon: <FaLaptopCode className="text-red-500 w-5 h-5" />,
    title: 'Smart India Hackathon 2024 (Institute Level)',
    description:
      '<b>Selected</b> by institute panel for <b>Smart India Hackathon 2024</b> – proposed an <b>AI-based Deepfake Detection Software</b>. Among <b>top shortlisted teams</b> after internal evaluation at JMIETI. <b>Recognized</b> for <b>innovation, relevance</b>, and <b>technical feasibility</b>.',
    image: sihImg,
    alt: 'Smart India Hackathon institute-level selection',
  },
];

const HackathonAchievements = () => {
  return (
    <section id="achievements" className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          🏆 Hackathon Achievements
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Finalist in <span className="font-semibold">20+ National and International Level hackathons</span> – solving real-world problems with advanced tech.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-4 sm:gap-6 w-max px-2 sm:px-4 py-4 scroll-smooth">
          {hackathons.map((hack, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[38vw] lg:w-[30vw] min-h-[520px] flex-shrink-0 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-col">
                <img
                  src={hack.image}
                  alt={hack.alt}
                  className="w-full h-[270px] object-cover object-center rounded-t-xl"
                />

                <div className="p-5 flex flex-col">
                  <div className="flex items-center space-x-2 mb-2">
                    {hack.icon}
                    <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                      {hack.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-snug text-gray-700 dark:text-gray-300 text-justify"
                    dangerouslySetInnerHTML={{ __html: hack.description }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonAchievements;
