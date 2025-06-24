import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll'

function Footer() {
  const NAV_HEIGHT = 64

  return (
    <footer className="bg-[#050331] text-white py-10 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Portfolio Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tarun's Portfolio</h2>
          <p className="text-gray-300">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
          </p>
          <p className="mt-3 text-gray-400">
            Keep Rising <span className="inline-block">🚀</span> . Connect with me over live chat!
          </p>
        </div>

        {/* Quick Links (Scroll) */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            {['home', 'about', 'skills', 'education', 'experience'].map((section, i) => (
              <li key={i}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  offset={-NAV_HEIGHT}
                  duration={300}
                  className="cursor-pointer hover:text-yellow-400 transition"
                >
                  ➡️ {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> +91 7988288471
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> tarunjuneja471@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" /> Haryana, India
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
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
                className="bg-white text-black p-3 rounded-full hover:scale-110 transition duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-6">
        Designed and Developed By{' '}
        <span className="text-yellow-400 font-semibold">Tarun</span>
      </div>
    </footer>
  )
}

export default Footer
