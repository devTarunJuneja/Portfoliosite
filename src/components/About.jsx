// src/components/About.jsx
import React from 'react'
import { User } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      className="
        max-w-[1200px] mx-auto py-[64px] px-[32px]
        bg-white dark:bg-gray-900
        transition-colors
      "
      data-aos="fade-up"
    >
      {/* Heading */}
      <div className="flex items-center justify-center mb-[40px]">
        <User className="w-[24px] h-[24px] mr-[8px] text-[#020617] dark:text-white" />
        <h2 className="text-[32px] font-bold text-[#020617] dark:text-white">
          About <span className="text-[#7E22CE] dark:text-[#D8B4FE]">Me</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Left: Image */}
        <div className="w-[360px] h-[500px] rounded-[24px] overflow-hidden shadow-lg mb-[32px] md:mb-0 md:mr-[80px] flex-shrink-0">
          <img
            src="/src/assets/photopic.jpg"
            alt="My Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1">
          {/* Title + Subtitle */}
          <h3 className="text-[28px] font-bold mb-[8px] text-[#020617] dark:text-white">
            I&apos;m TARUN
          </h3>
          <p className="text-[16px] font-semibold mb-[24px] text-[#020617] dark:text-gray-300">
            Web Development | UI/UX Designer | Python Developer | AI&ML Enthusiast.
          </p>

          {/* Bio Paragraph */}
<p className="text-[18px] leading-[1.6] mb-[32px] text-[#020617] dark:text-gray-300 text-justify">
  I’m a Results-driven Web Developer pursuing B.Tech in Computer Science and Engineering  
  with a specialization in AI &amp; ML from Kurukshetra University. Experienced in developing  
  responsive web applications using React.js, JavaScript, HTML5, and CSS3 on the frontend,  
  with Node.js and Flask powering the backend alongside SQL &amp; NoSQL databases. A  
  national-level hackathon winner, I thrive on crafting intuitive UIs, integrating  
  robust APIs, and solving real-world challenges with innovative, tech-driven solutions.
</p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[16px] gap-x-[40px] mb-[48px]">
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">
                Graduation:
              </span>{' '}
              <span className="text-[#020617] dark:text-gray-200">
                June, 2026
              </span>
            </div>
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">
                Email :
              </span>{' '}
              <a
                href="mailto:tarunjuneja471@gmail.com"
                className="text-[#0205EA] dark:text-[#63B3ED] underline"
              >
                tarunjuneja471@gmail.com
              </a>
            </div>
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">
                Phone :
              </span>{' '}
              <span className="text-[#0205EA] dark:text-[#63B3ED]">
                +91 7988288471
              </span>
            </div>
            <div className="text-[16px]">
              <span className="text-[#7E22CE] dark:text-[#D8B4FE] font-medium">
                Place :
              </span>{' '}
              <span className="text-[#020617] dark:text-gray-200">
                Haryana, India
              </span>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="
              inline-block font-medium text-[18px] py-[16px] px-[32px] rounded-[8px]
              bg-[#7E22CE] dark:bg-[#5b16a2] hover:bg-[#5b16a2] dark:hover:bg-[#7E22CE]
              text-white
              shadow-[0_10px_20px_rgba(126,34,206,0.4)] dark:shadow-none
              transition-colors
            "
          >
            Resume &gt;
          </a>
        </div>
      </div>
    </section>
  )
}
