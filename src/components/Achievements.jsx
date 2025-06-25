// src/components/HackathonAchievements.jsx
import React from 'react';
import { FaMedal, FaTrophy, FaGlobe, FaLaptopCode } from 'react-icons/fa';

import hackvisionvaultImg from '../assets/hackvisionvault.jpg';
import hackmorImg from '../assets/hackmor.jpg';
import hacktuImg from '../assets/hacktu22.jpg';
import hackvsitImg from '../assets/hackvsit.jpg';
import sihImg from '../assets/sih.jpg';


const hackathons = [
  {
    icon: <FaMedal className="text-yellow-400 w-6 h-6" />,
    title: '🥇 1st Place – HackVisionVault Hackathon',
    description:
      '🏆 Champion team out of 128 at HackVisionVault 2K25! Built EchoHealth – an AI voice diagnostic platform using acoustic features and LLMs to detect vocal disorders. Delivered a smooth live demo, nailed the Q&A, and stood out for rural healthcare impact at Maharishi Markandeshwar University.',
    image: hackvisionvaultImg,
    alt: 'HackVisionVault first place photo',
  },
  {
    icon: <FaTrophy className="text-indigo-500 w-6 h-6" />,
    title: '🥈 2nd Place – HackMOR Hackathon Exhibition',
    description:
      '🧠 Presented SwapSense – an AI deepfake detection tool using computer vision and transformers. Showcased to AICTE Chairman & Google reps at Manav Rachna University. 🎯 Selected from 200+ entries for originality, UI/UX, and real-world impact against misinformation.',
    image: hackmorImg,
    alt: 'HackMOR exhibition photo',
  },
  {
    icon: <FaGlobe className="text-green-500 w-6 h-6" />,
    title: '🌐 Top 10 – HackTU 6.0 (MLH)',
    description:
      '🌍 Finalist at HackTU 6.0 (MLH) – built UrbanECO, an AI-powered e-waste platform with reselling, tutorials, and eco-rewards. ♻️ Only Haryana team in top 10 out of 200+ global entries. Praised by GitHub, MongoDB & Streamlit for innovation and scalability.',
    image: hacktuImg,
    alt: 'HackTU 6.0 finalist photo',
  },
  {
    icon: <FaLaptopCode className="text-gray-500 w-6 h-6" />,
    title: '🏅 4th Place – HackVSIT 6.0',
    description:
      '💻 4th place at HackVSIT 6.0 – built Prompt2Code, an AI code generator using Gemini API. Included multi-page UI, prompt history, and clean Tailwind-React design. ⌨️ Praised for full-stack delivery, polished UX, and deployment-ready execution under pressure.',
    image: hackvsitImg,
    alt: 'HackVSIT project photo',
  },
  {
  icon: <FaLaptopCode className="text-red-500 w-6 h-6" />,
  title: '🚀 Smart India Hackathon 2025 (Institute Level)',
  description:
    '🚀 Selected by institute panel for Smart India Hackathon 2024 – proposed an AI-based solution targeting Deepfake video detction software. Among top shortlisted teams after internal evaluation at JMIETI Institute. 🌟 Recognized for innovation, relevance, and technical feasibility.',
  image: sihImg,
  alt: 'Smart India Hackathon institute-level selection',
}
];

const HackathonAchievements = () => {
  return (
    <section id="achievements" className="bg-white dark:bg-gray-900 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">🏆 Hackathon Achievements</h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          Finalist in <span className="font-semibold">20+ National and International Level hackathons</span> – solving real-world problems with advance Tech.
        </p>
      </div>

      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex gap-6 w-max px-4 py-6 scroll-smooth">
          {hackathons.map((hack, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[42vw] h-[650px] flex-shrink-0 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <img
                  src={hack.image}
                  alt={hack.alt}
                  className="w-full h-[370px] object-cover object-center rounded-t-3xl"
                />

                <div className="p-7 flex flex-col justify-start h-full">
                  <div className="flex items-center space-x-2 mb-4">
                    {hack.icon}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{hack.title}</h3>
                  </div>
                  <p className="text-[16px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                    {hack.description}
                  </p>
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
