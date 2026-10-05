import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const experienceData = [
  {
    role: "Project Engineer (Academic Role)",
    company: "Islamia College Peshawar",
    location: "Peshawar, Pakistan",
    period: "Nov 2025 – Apr 2026",
    description: [
      "Led backend development for 3+ MERN stack projects, designing scalable architectures with clean separation of concerns, reducing codebase complexity by ~30%.",
      "Guided cross-functional teams of 4–6 developers on best practices, cutting frontend-backend integration bugs by 40% and ensuring on-time delivery across all sprints.",
      "Delivered 3 high-performance, data-driven web applications achieving 100% on-time completion, each supporting 100+ concurrent users with sub-300ms API response times.",
    ],
  },
  {
    role: "Full-stack Developer",
    company: "step2scientest",
    location: "Abdara Road · On-site",
    period: "Sep 2025 – Dec 2025",
    description: [
      "Developed engaging front-end applications for various projects at Step2Scientest, enhancing user experience.",
      "Instructed BSCS and BSSE students in web development, fostering their skills and knowledge in the field.",
      "Collaborated with team members to implement best practices in coding and design, contributing to project success.",
    ],
  },
];

const Experience = () => {
  const [theme] = useTheme();

  return (
    <section id="experience" className='py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <h2 id={theme} className='text-3xl md:text-4xl font-bold inline-block relative'>
            Experience
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-lime-500 rounded-full'></span>
          </h2>
          <p className='text-gray-600 text-center mb-2 dark:text-gray-400 mt-40 align-baseline text-lg'>
            My professional journey and the milestones I've achieved along the way.
          </p>
        </motion.div>

        {/* Timeline Graph Container */}
        <div className='relative'>
          {/* Central Animated Path */}
          <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 dark:bg-zinc-800'>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className='w-full bg-lime-500 shadow-[0_0_15px_rgba(163,230,53,0.8)]'
            />
          </div>

          {/* Experience Items */}
          <div className='space-y-24'>
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center justify-between w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>

                  {/* Empty space for balance */}
                  <div className='hidden md:block w-5/12'></div>

                  {/* Center Node */}
                  <div className='absolute left-1/2 transform -translate-x-1/2 z-20'>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                      viewport={{ once: true }}
                      className={`w-6 h-6 rounded-full border-4 shadow-xl transition-all duration-300 ${
                        theme === 'dark'
                        ? 'bg-zinc-900 border-lime-400 shadow-lime-400/20'
                        : 'bg-white border-lime-600 shadow-lime-600/20'
                      }`}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className='w-full md:w-5/12 group'
                  >
                    <div id={theme} className={`p-6 rounded-2xl shadow-lg transition-all duration-300 border-2 group-hover:shadow-2xl ${
                      theme === 'dark'
                      ? 'bg-zinc-900 border-zinc-800 hover:border-lime-500/50 text-white'
                      : 'bg-white border-gray-100 hover:border-lime-500/30 text-gray-900'
                    }`}>
                      <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-2'>
                        <h3 className='text-xl font-bold transition-colors group-hover:text-lime-500'>
                          {exp.role}
                        </h3>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          theme === 'dark'
                          ? 'bg-lime-500/10 text-lime-400 border border-lime-500/20'
                          : 'bg-lime-100 text-lime-700 border border-lime-200'
                        }`}>
                          {exp.period}
                        </span>
                      </div>

                      <div className='flex items-center gap-2 text-sm mb-4 italic opacity-80'>
                        <span className='font-semibold not-italic'>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className='space-y-3 text-sm leading-relaxed opacity-90'>
                        {exp.description.map((point, i) => (
                          <li key={i} className='flex gap-2'>
                            <span className='text-lime-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0' />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
