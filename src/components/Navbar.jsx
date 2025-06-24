import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import ThemeToggle from './ThemeToggle'

const links = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Contact', to: 'contact' },
]

function Navbar({ toggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Height of navbar in px (used for offset)
  const NAV_HEIGHT = 64

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo + Title */}
        <a href="/" className="flex items-center">
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            
            className="w-8 h-8 mr-2"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-NAV_HEIGHT}
              duration={300}
              className="relative cursor-pointer py-2 text-gray-700 dark:text-gray-200 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600"
              activeClass="text-blue-600 border-blue-600"
            >
              {link.name}
            </ScrollLink>
          ))}
          {/* Theme toggle button */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="ml-2 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✖️' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          {links.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-NAV_HEIGHT}
              duration={300}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 dark:text-gray-200 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600"
              activeClass="text-blue-600 border-blue-600"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
