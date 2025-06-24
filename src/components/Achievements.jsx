// src/components/HackathonAchievements.jsx
import React from 'react';
import { FaMedal, FaTrophy, FaGlobe, FaLaptopCode } from 'react-icons/fa';

import hackvisionvaultImg from '../assets/hackvisionvault.jpg';
import hackmorImg from '../assets/hackmor.jpg';
import hacktuImg from '../assets/hacktu22.jpg';
import hackvsitImg from '../assets/DSC_8038.jpg';

const hackathons = [
  {
    icon: <FaMedal className="text-yellow-400 w-6 h-6" />,
    title: '🥇 1st Place – HackVisionVault Hackathon',
    description:
      '🏆 Champion team out of 128 participants at HackVisionVault 2K25! Developed EchoHealth, an AI-powered voice diagnostic platform leveraging acoustic feature extraction and LLM integration to identify potential vocal disorders. 👨‍💻 Our team delivered a flawless live demo, impressed judges with clarity and innovation, and stood out for the idea\'s social impact in rural healthcare. 🎤 Confident Q&A handling and smooth execution secured us the top spot at Maharishi Markandeshwar University.',
    image: hackvisionvaultImg,
    alt: 'HackVisionVault first place photo',
  },
  {
    icon: <FaTrophy className="text-indigo-500 w-6 h-6" />,
    title: '🥈 2nd Place – HackMOR Hackathon Exhibition',
    description:
      '🧠 Presented SwapSense, an AI-powered deepfake detection tool designed for media authentication. The project used computer vision and transformer models to detect facial manipulation. 📸 Demonstrated a full-stack application to the AICTE Chairman and Google representatives, earning national-level recognition. SwapSense was chosen among 200+ entries for its originality, UI/UX quality, and real-world applicability in tackling misinformation. 🚀 The exhibition was held at Manav Rachna University',
    image: hackmorImg,
    alt: 'HackMOR exhibition photo',
  },
  {
    icon: <FaGlobe className="text-green-500 w-6 h-6" />,
    title: '🌐 Top 10 – HackTU 6.0 (MLH)',
    description:
      '🌍 Finalist at HackTU 6.0, an MLH-powered 36-hour international hackathon hosted at Graphic Era University. We built UrbanECO, an AI-enabled e-waste platform offering component reselling, project tutorials, and eco rewards. ♻️ Our team was the only one from Haryana to reach the finals, getting praise from GitHub, MongoDB, and Streamlit for the platform\'s relevance and scalability. 💡 Judges highlighted the seamless integration of AI. We proudly stood in the top 10 out of 200+ global teams.',
    image: hacktuImg,
    alt: 'HackTU 6.0 finalist photo',
  },
  {
    icon: <FaLaptopCode className="text-gray-500 w-6 h-6" />,
    title: '🏅 4th Place – HackVSIT 6.0',
    description:
      '💻 Secured 4th place at HackVSIT 6.0 hosted by VIPS Delhi. We built Prompt2Code, an AI-powered code generation app using Gemini API to turn user prompts into full code snippets. The platform included history tracking, multiple pages, and a clean modern UI with Tailwind and React. ⌨️ Judges appreciated the deployment-ready MVP, intuitive design, and front-end polish. It was recognized for full-stack capabilities and productivity-enhancing potential under tight time constraints.',
    image: hackvsitImg,
    alt: 'HackVSIT project photo',
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
