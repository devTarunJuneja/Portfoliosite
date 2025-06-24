// src/components/Home.jsx
import React from 'react'
import CanvasNetworkBackground from './CanvasNetworkBackground'
import { Typewriter } from 'react-simple-typewriter'
import { Link as ScrollLink } from 'react-scroll'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import photo from '../assets/photo.jpg'

export default function Home({ theme = 'light' }) {
  const NAV_HEIGHT = 64

  // For “fast and darker”, we use the defaults set in CanvasNetworkBackground
  // If dark mode, you might choose lighter lines; but user asked “darker”, so keep dark even in dark mode?
  const isDark = theme === 'dark'
  // If you want different dark-mode colors, override below. For now, reuse defaults:
  const pointColor = isDark
    ? 'rgba(200,200,200,0.7)' // a bit lighter for dark bg
    : 'rgba(34,34,34,0.7)'
  const lineColor = isDark
    ? 'rgba(200,200,200,1)'
    : 'rgba(34,34,34,1)'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <CanvasNetworkBackground
        pointColor={pointColor}
        lineColor={lineColor}
        backgroundColor="transparent"
        numPoints={60}            // adjust density as desired
        maxVelocity={1.0}         // faster drift
        perturbation={0.1}        // more random motion
        connectionDistance={120}  // how far points connect
        lineOpacityFactor={0.7}   // stronger lines
      />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between container mx-auto px-4 md:px-16">
        {/* Left text */}
        <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left">
          <p className="text-3xl md:text-5xl font-semibold text-[#1e293b] dark:text-gray-300 mb-2">
            Hi There,
          </p>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            I'm <span className="text-[#1e293b] dark:text-white">Tarun </span>
            <span className="text-[#2563eb] dark:text-indigo-400">Juneja</span>
          </h1>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <span className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mr-2">
              I Am Into
            </span>
            <span className="text-xl md:text-2xl font-semibold text-[#2563eb] dark:text-indigo-400">
              <Typewriter
                words={['Web Development', 'Artificial Intelligence', 'Machine Learning', 'UI/UX Development','AI Integration','Prompt Engineering']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-NAV_HEIGHT}
            duration={300}
            className="inline-block bg-gradient-to-r from-[#2563eb] to-[#1e3a8a] hover:from-[#1e40af] hover:to-[#1e293b] text-white font-medium py-3 px-8 md:px-10 rounded-full shadow-lg hover:shadow-xl transition mb-6"
          >
            About Me
          </ScrollLink>
          <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
            {[
              { icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/tarun-juneja-83b41124a/', label: 'LinkedIn' },
              { icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/devTarunJuneja', label: 'GitHub' },
              { icon: <FaTwitter className="w-5 h-5" />, url: 'https://x.com/JunejaTaru51238', label: 'Twitter' },
              { icon: <FaInstagram className="w-5 h-5" />, url: 'https://www.instagram.com/tarun_.juneja/', label: 'Instagram' },
            ].map(({ icon, url, label }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full text-[#00FFFF] hover:text-white transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right photo */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900">
            <img
              src={photo}
              alt="Tarun Juneja"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
