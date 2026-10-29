// Portfolio component — Professional project showcase
import React, { useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// Import images
import virtual from '../img/e-2.png';
import ecommerce1 from '../img/e-1.png';
import next from '../img/next.png';

/* --- 3D TILT CARD (desktop only, honors reduced-motion) --- */
const TiltCard = ({ children, className, disabled = false }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative transition-transform duration-200 ${className}`}
    >
      <div style={{ transform: 'translateZ(30px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const accentStyle = {
  borderGradient: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
  bgGradient: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
  textColor: 'var(--accent-primary)',
  glowColor: 'var(--accent-glow)',
};

const CATEGORIES = ['All', 'AI', 'Full-Stack', 'Frontend'];

const statusColor = {
  Live: 'var(--success)',
  'In Progress': 'var(--warning)',
  Archived: 'var(--text-muted)',
};

const Portfolio = () => {
  const [theme] = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      img: 'https://ik.imagekit.io/njsyfvk79/resume.PNG',
      title: 'AI-Driven Resume Builder, Resume Analyzer & Interview Prep Platform',
      desc: 'A full-stack intelligent career platform built with the MERN stack and Generative AI. Includes AI-powered resume generation with real-time feedback, ATS score analysis, job-description matching, and an AI interview coach with dynamic Q&A.',
      tech: ['Generative AI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Groq SDK', 'Tailwind CSS', 'JWT Auth'],
      highlights: ['ATS score analysis', 'AI interview coach', 'Real-time feedback'],
      category: 'AI',
      status: 'Live',
      projectLink: 'https://resume-frontend-psi-one.vercel.app',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Ai-Driven-Resume-Builder-Software',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/codereview.PNG',
      title: 'AI-Powered Code-Review Tool',
      desc: 'A full-stack AI code-review platform with MERN + Generative AI. Provides real-time code analysis, quality scoring, tailored improvement suggestions, and an AI optimization coach.',
      tech: ['Generative AI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Groq SDK', 'Tailwind CSS', 'REST API'],
      highlights: ['Quality scoring', 'Improvement suggestions', 'Optimization coach'],
      category: 'AI',
      status: 'Live',
      projectLink: 'https://code-review-one-liard.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Ai-Powered-CodeReview-Tool',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/blog.PNG',
      title: 'Full-Stack Blog Application',
      desc: 'MERN blog platform with auth, publishing workflows, comments and a responsive editor experience.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Tailwind CSS', 'REST API'],
      highlights: ['User auth', 'Publishing workflows', 'Comments'],
      category: 'Full-Stack',
      status: 'Live',
      projectLink: 'https://app-dq2ir91oeuwx.appmedo.com/',
      codeLink: 'https://github.com/Mudassir-ahmad551080',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/ecommerce.PNG',
      title: 'MERN E-Commerce Ecosystem',
      desc: 'Production-grade platform with REST API, JWT auth and complex MongoDB relationships. Handles real-time inventory and payments.',
      tech: ['MongoDB', 'Express', 'React', 'Node', 'Redux', 'Tailwind CSS'],
      highlights: ['Real-time inventory', 'Payments', 'Auth flows'],
      category: 'Full-Stack',
      status: 'Live',
      projectLink: 'https://e-commerce-frontend-gray-ten.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/E-Commerce',
    },
    {
      img: next,
      title: 'Next.js Storefront',
      desc: 'High-performance SSR storefront with optimized images, SEO best practices and a modern Tailwind UI.',
      tech: ['Next.js', 'Tailwind', 'SSR', 'Vercel'],
      highlights: ['SSR', 'SEO', 'Optimized images'],
      category: 'Frontend',
      status: 'Live',
      projectLink: 'https://next-app-six-iota.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Next-app',
    },
    {
      img: ecommerce1,
      title: 'React E-Commerce',
      desc: 'Client-centric shopping platform focused on component reusability, Context API state management and fluid animations.',
      tech: ['React.js', 'Context API', 'CSS Modules'],
      highlights: ['Component reuse', 'Context API', 'Animations'],
      category: 'Frontend',
      status: 'Live',
      projectLink: 'https://e-com-xi-black.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/E-Com',
    },
    {
      img: virtual,
      title: 'AI Voice Assistant',
      desc: 'Futuristic voice-controlled assistant capable of web navigation and basic commands, engineered with the Web Speech API.',
      tech: ['Vanilla JS', 'Web Speech API', 'Voice UI'],
      highlights: ['Voice commands', 'Web navigation', 'Hands-free UI'],
      category: 'AI',
      status: 'Live',
      projectLink: 'https://virtual-assistan.netlify.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/assistant',
    },
  ];

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory, projects]);

  // Prefer non-tilt on touch / reduced motion
  const tiltDisabled =
    typeof window !== 'undefined' &&
    (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches);

  return (
    <div
      id="projects"
      className="w-full py-24 px-4 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Background decor */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: 'var(--accent-secondary)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--accent-primary)', opacity: 0.85 }}
            >
              Selected Work
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ color: 'var(--text-primary)', lineHeight: '1.05' }}
            >
              Featured{' '}
              <span className="gradient-text inline-block">Projects</span>
            </h2>
            <div
              className="mt-6 h-1 w-20 rounded-full"
              style={{ background: accentStyle.borderGradient }}
            />
            <p
              className="mt-6 text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', maxWidth: '44rem' }}
            >
              A curated selection of full-stack and AI-driven applications — engineered for performance,
              shipped for users.
            </p>
          </div>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2"
                style={{
                  border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-default)'}`,
                  backgroundColor: isActive ? 'var(--accent-glow)' : 'var(--overlay-light)',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-primary)',
                }}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">
                  {cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length}
                </span>
              </button>
            );
          })}
        </motion.div>

        <div ref={ref} className="space-y-20 lg:space-y-28">
          {filtered.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <TiltCard key={project.title} className="perspective-1000" disabled={tiltDisabled}>
                <motion.article
                  id={`project-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className="group relative rounded-3xl glass-card shadow-2xl overflow-hidden transition-all duration-500"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-10"
                    style={{ background: accentStyle.borderGradient }}
                  />

                  <div className="flex flex-col lg:flex-row h-full">
                    {/* IMAGE SECTION */}
                    <div
                      className={`lg:w-3/5 relative overflow-hidden p-5 sm:p-8 lg:p-10 flex items-center justify-center ${
                        !isEven ? 'lg:order-last' : ''
                      }`}
                      style={{ background: 'var(--overlay-light)' }}
                    >
                      {/* Browser chrome */}
                      <div
                        className="absolute top-4 left-4 right-4 flex items-center gap-1.5 z-20"
                        aria-hidden="true"
                      >
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ef4444' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22c55e' }} />
                      </div>

                      {/* Decorative dot grid */}
                      <div
                        className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,var(--text-primary)_1px,transparent_0)] [background-size:20px_20px]"
                        aria-hidden="true"
                      />

                      <motion.img
                        src={project.img}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="relative w-full h-auto rounded-xl transform transition-all duration-700 ease-out lg:group-hover:scale-[1.02]"
                        style={{
                          boxShadow: 'var(--shadow-lg)',
                          border: '1px solid var(--border-default)',
                        }}
                      />
                    </div>

                    {/* INFO SECTION */}
                    <div className="lg:w-2/5 p-7 lg:p-10 flex flex-col justify-center relative">
                      {/* Project label + status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-1 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }} />
                          <span
                            className="font-bold tracking-widest uppercase text-[11px]"
                            style={{ color: 'var(--accent-primary)' }}
                          >
                            Project {String(projects.indexOf(project) + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{
                            color: statusColor[project.status] || 'var(--text-muted)',
                            backgroundColor: 'var(--overlay-light)',
                            border: `1px solid ${statusColor[project.status] || 'var(--border-default)'}`,
                          }}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3
                        className="text-xl lg:text-2xl font-bold mb-3 leading-tight"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-sm lg:text-base leading-relaxed mb-5"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.desc}
                      </p>

                      {/* Highlights */}
                      {project.highlights?.length ? (
                        <ul className="flex flex-wrap gap-x-4 gap-y-1.5 mb-6" aria-label="Key features">
                          {project.highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-center gap-1.5 text-xs font-medium"
                              style={{ color: 'var(--text-muted)' }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: 'var(--accent-primary)' }}
                                aria-hidden="true"
                              />
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mb-7" aria-label="Tech stack">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all duration-200"
                            style={{
                              border: '1px solid var(--border-default)',
                              backgroundColor: 'var(--overlay-light)',
                              color: 'var(--text-primary)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo of ${project.title}`}
                          className="btn-primary group/btn relative overflow-hidden"
                        >
                          <span
                            className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                          />
                          <FaExternalLinkAlt className="relative text-sm" />
                          <span className="relative">Live Demo</span>
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title}`}
                          className="btn-secondary"
                        >
                          <FaGithub />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </TiltCard>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
              No projects in this category yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
