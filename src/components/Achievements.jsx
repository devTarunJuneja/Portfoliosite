import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef(null); // the scroll container
  const trackRef = useRef(null); // flex track containing cards
  const autoIdRef = useRef(null);
  const stepRef = useRef(0); // card width + gap
  const pausedRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  // Keep pausedRef in sync
  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  // compute step (card width + gap)
  const computeStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector('[data-card]');
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;

    // read computed gap (could be "16px" or "1rem" etc) and parse numeric px value
    const gapStyle = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '0px';
    // parseFloat will parse numeric part; if it's in rem/em it will produce NaN so we fallback to 16
    let gap = parseFloat(gapStyle);
    if (Number.isNaN(gap)) gap = 16;

    stepRef.current = Math.round(cardWidth + gap);
  };

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // initial compute
    computeStep();

    // recompute on resize
    const onResize = () => computeStep();
    window.addEventListener('resize', onResize);

    // touch handlers for mobile pause
    const onTouchStart = () => setIsPaused(true);
    const onTouchEnd = () => setIsPaused(false);

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    // clean up
    return () => {
      window.removeEventListener('resize', onResize);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // config: delay between automatic scrolls (ms)
    const delayMs = 3000; // change to make faster/slower
    // safety: ensure step computed
    if (!stepRef.current) computeStep();

    // clear any previous interval
    if (autoIdRef.current) {
      clearInterval(autoIdRef.current);
    }

    autoIdRef.current = setInterval(() => {
      if (pausedRef.current) return;

      // If at (or very near) the end, wrap to start
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
        // smooth back to beginning
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // scroll by one card width + gap
        container.scrollBy({ left: stepRef.current, behavior: 'smooth' });
      }
    }, delayMs);

    // cleanup on unmount
    return () => {
      if (autoIdRef.current) {
        clearInterval(autoIdRef.current);
        autoIdRef.current = null;
      }
    };
    // we intentionally omit stepRef from deps; computeStep() runs on resize to update it
  }, []); // run once

  return (
    <section id="achievements" className="bg-white dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      {/* Inject small CSS to hide scrollbars while keeping scroll behavior */}
      <style>{`
        /* hide scrollbar while preserving scroll (works across browsers) */
        #achievements .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        #achievements .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          🏆 Hackathon Achievements
        </h2>
        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Finalist in <span className="font-semibold">20+ National and International Level hackathons</span> – solving real-world problems with advanced tech.
        </p>
      </div>

      {/* scroll container (hidden scrollbars) */}
      <div
        id="achievements-scroll"
        ref={containerRef}
        className="overflow-x-auto no-scrollbar"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        // keep focusable if you want to add keyboard controls later
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 w-max px-2 sm:px-4 py-4 scroll-smooth"
        >
          {hackathons.map((hack, idx) => (
            <div
              key={idx}
              data-card="card" /* used by JS to compute width */
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
                  />
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
