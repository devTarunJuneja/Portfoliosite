// src/components/ThemeToggle.jsx
import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors"
    >
      {theme === 'light' ? (
        <Moon size={20} strokeWidth={2} className="text-gray-800" />
      ) : (
        <Sun size={20} strokeWidth={2} className="text-yellow-400" />
      )}
    </button>
  )
}
