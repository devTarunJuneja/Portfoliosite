// src/components/Skills.jsx
import React from 'react'
import { Code } from 'lucide-react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiVite,
  SiAxios,
  SiChartdotjs,
  SiPostman,
  SiRedux,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiFigma,
  SiGit,
  SiGithub
} from 'react-icons/si'

const categories = [
  {
    title: 'Programming Languages & Frameworks',
    skills: [
      { name: 'HTML5',      icon: <SiHtml5     color="#E34F26" /> },
      { name: 'CSS3',       icon: <SiCss3      color="#1572B6" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'React.js',   icon: <SiReact     color="#61DAFB" /> },
      { name: 'Python',     icon: <SiPython    color="#3776AB" /> },
      { name: 'Tailwind',   icon: <SiTailwindcss color="#06B6D4" /> },
      { name: 'FastAPI',    icon: <SiFastapi   color="#009688" /> },
      { name: 'Node.js',    icon: <SiNodedotjs color="#339933" /> },
    ]
  },
  {
    title: 'Tools & Components',
    skills: [
      { name: 'Vite',       icon: <SiVite      color="#646CFF" /> },
      { name: 'Axios',      icon: <SiAxios     color="#5A29E4" /> },
      { name: 'Redux',      icon: <SiRedux     color="#764ABC" /> },
      { name: 'Auth/JWT',   icon: <SiJsonwebtokens color="#FACC15" /> },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL',        icon: <SiMysql     color="#4479A1" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
      { name: 'MongoDB',    icon: <SiMongodb   color="#47A248" /> },
      { name: 'Supabase',   icon: <SiSupabase  color="#3ECF8E" /> },
    ]
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Figma',     icon: <SiFigma     color="#F24E1E" /> },
      { name: 'Git',       icon: <SiGit       color="#F05032" /> },
       { name: 'GitHub',  icon: <SiGithub color="#FFFFFF" /> },
       { name: 'Postman',    icon: <SiPostman   color="#FF6C37" /> },
    ]
  }
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-16 px-4
        bg-gradient-to-r from-teal-500 to-blue-500
        dark:from-teal-800 dark:to-blue-800
        transition-colors text-white
      "
      data-aos="fade-up"
    >
      {/* Heading */}
      <div className="flex justify-center items-center mb-12">
        <Code className="w-8 h-8 mr-2 text-white dark:text-gray-100" />
        <h2 className="text-3xl font-bold">
          Skills &amp; <span className="text-yellow-300 dark:text-yellow-500">Abilities</span>
        </h2>
      </div>

      {/* Outer Panel */}
      <div
        className="
          max-w-[1000px] mx-auto
          bg-blue-900 dark:bg-gray-800
          rounded-2xl p-8 shadow-xl space-y-12
          transition-colors
        "
      >
        {categories.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-xl font-semibold mb-4 text-white dark:text-gray-100">
              {title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="
                    bg-[#0e1525] dark:bg-[#1f2937]
                    rounded-lg p-6
                    flex flex-col items-center justify-center
                    shadow-lg transition-transform hover:scale-105
                  "
                >
                  <div className="text-[2.5rem]">
                    {React.cloneElement(icon, { size: '2.5rem' })}
                  </div>
                  <span className="mt-4 text-lg text-white dark:text-gray-200">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
