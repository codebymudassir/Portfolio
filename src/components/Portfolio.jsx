// Portfolio component
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images
import virtual from '../img/e-2.png';
import ecommerce1 from '../img/e-1.png';
import next from '../img/next.png';

/* --- 3D TILT CARD WRAPPER --- */
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

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
      className={`relative cursor-pointer transition-all duration-200 ${className}`}
    >
      <div style={{ transform: 'translateZ(50px)' }} className="h-full">
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
    transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
  }),
};

// Unified color system - consistent accent throughout
const accentStyle = {
  borderGradient: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
  bgGradient: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
  textColor: 'var(--accent-primary)',
  glowColor: 'var(--accent-glow)',
};

const Portfolio = () => {
  const [theme] = useTheme();
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      img: 'https://ik.imagekit.io/njsyfvk79/resume.PNG',
      title: 'AI-Driven Resume Builder, Resume Analyzer & Interview Prep Platform',
      desc: 'A full-stack intelligent career platform built with the MERN stack and Generative AI. Features include AI-powered resume generation with real-time feedback, ATS score analysis, tailored job description matching, and an AI interview coach with dynamic Q&A sessions — all designed to help users land their dream job faster.',
      tech: ['Generative AI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Groq SDK', 'Tailwind CSS', 'REST API', 'JWT Auth'],
      projectLink: 'https://resume-frontend-psi-one.vercel.app',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Ai-Driven-Resume-Builder-Software',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/codereview.PNG',
      title: 'AI-Powered Code-Review Tool',
      desc: 'A full-stack AI-powered code-review platform built with the MERN stack and Generative AI. Features include AI-powered code analysis with real-time feedback, code quality score analysis, tailored code improvement suggestions, and an AI code optimization coach with dynamic Q&A sessions — all designed to help developers write better code faster.',
      tech: ['Generative AI', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Groq SDK', 'Tailwind CSS', 'REST API'],
      projectLink: 'https://code-review-one-liard.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Ai-Powered-CodeReview-Tool',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/blog.PNG',
      title: 'Full-Stack Blog Application',
      desc: 'A full-stack blog platform built with the MERN stack featuring user authentication, blog creation, commenting, and publishing workflows. Users can sign up, create and publish their own blog posts, and engage with the community through comments — designed to deliver a smooth and responsive writing experience.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'Tailwind CSS', 'REST API', 'Vibe Coding'],
      projectLink: 'https://app-dq2ir91oeuwx.appmedo.com/',
      codeLink: 'https://github.com/Mudassir-ahmad551080',
    },
    {
      img: 'https://ik.imagekit.io/njsyfvk79/ecommerce.PNG',
      title: 'MERN E-Commerce Ecosystem',
      desc: 'Production-grade platform with REST API, JWT auth, and complex MongoDB relationships. Handles real-time inventory and payments.',
      tech: ['MongoDB', 'Express', 'React', 'Node', 'Redux', 'Tailwind CSS'],
      projectLink: 'https://e-commerce-frontend-gray-ten.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/E-Commerce',
    },
    {
      img: next,
      title: 'Next.js Storefront',
      desc: 'High-performance SSR application. Features optimized images, SEO best practices, and a modern UI built with Tailwind CSS.',
      tech: ['Next.js', 'Tailwind', 'SSR', 'Vercel'],
      projectLink: 'https://next-app-six-iota.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/Next-app',
    },
    {
      img: ecommerce1,
      title: 'React E-Commerce',
      desc: 'A client-centric shopping platform focusing on component reusability, state management with Context API, and fluid animations.',
      tech: ['React.js', 'Context API', 'CSS Modules'],
      projectLink: 'https://e-com-xi-black.vercel.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/E-Com',
    },
    {
      img: virtual,
      title: 'AI Voice Assistant',
      desc: 'Futuristic voice-controlled assistant capable of web navigation and basic commands, engineered using the Web Speech API.',
      tech: ['Vanilla JS', 'Web Speech API', 'Voice UI'],
      projectLink: 'https://virtual-assistan.netlify.app/',
      codeLink: 'https://github.com/Mudassir-ahmad551080/assistant',
    },
  ];

  return (
    <div
      id="projects"
      className="w-full py-24 px-4 md:px-12 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Background decor — subtle accent glow */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
             style={{ backgroundColor: 'var(--accent-primary)' }} />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: 'var(--accent-secondary)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4"
               style={{ color: 'var(--accent-primary)', opacity: 0.8 }}>
              What I&apos;ve Built
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                style={{
                  color: 'var(--text-primary)',
                  lineHeight: '1.1'
                }}>
              Featured{' '}
              <span className="gradient-text inline-block">
                Work
              </span>
            </h2>
            <div className="mt-6 h-1 w-24 rounded-full"
                 style={{ background: accentStyle.borderGradient }} />
            <p className="mt-8 text-lg leading-relaxed"
               style={{
                 color: 'var(--text-secondary)',
                 maxWidth: '42rem',
                 textAlign: 'center'
               }}>
              Exploring the intersection of design and engineering through full-stack applications.
            </p>
          </div>
        </motion.div>

        <div ref={ref} className="space-y-28">

          {/* --- PROJECTS LOOP --- */}
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <TiltCard key={index} className="perspective-1000">
                <motion.div
                  id={theme}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7 }}
                  className='group relative rounded-3xl glass-card shadow-2xl overflow-hidden transition-all duration-500'
                  style={{ borderColor: 'var(--border-default)' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}
                >
                  {/* Top accent bar */}
                  <div className='absolute top-0 left-0 right-0 h-1'
                       style={{ background: accentStyle.borderGradient }} />

                  <div className="flex flex-col lg:flex-row h-full">

                    {/* IMAGE SECTION */}
                    <div
                      className={`lg:w-3/5 relative overflow-hidden p-6 sm:p-8 lg:p-12 flex items-center justify-center ${!isEven ? 'lg:order-last' : ''}`}
                      style={{ background: 'var(--overlay-light)' }}
                    >
                      {/* Decorative grid dots */}
                      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,var(--text-primary)_1px,transparent_0)] [background-size:18px_18px]" />

                      <motion.img
                        id={theme}
                        src={project.img}
                        alt={project.title}
                        className="relative w-full h-auto rounded-xl transform transition-all duration-700 ease-out lg:rotate-x-6 lg:scale-95 lg:group-hover:rotate-0 lg:group-hover:scale-100"
                        style={{
                          transformStyle: 'preserve-3d',
                          rotateY: isEven ? '15deg' : '-15deg',
                          boxShadow: 'var(--shadow-lg)',
                          border: '1px solid var(--border-default)'
                        }}
                      />
                    </div>

                    {/* INFO SECTION */}
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative">

                      {/* Project label */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className='w-10 h-1 rounded-full'
                              style={{ backgroundColor: 'var(--accent-primary)' }} />
                        <span className='font-bold tracking-widest uppercase text-xs'
                              style={{ color: 'var(--accent-primary)' }}>
                          Project {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight"
                          style={{ color: 'var(--text-primary)' }}>
                        {project.title}
                      </h3>
                      <p className="text-base leading-relaxed mb-8"
                         style={{ color: 'var(--text-secondary)' }}>
                        {project.desc}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-default"
                            style={{
                              border: '1px solid var(--border-default)',
                              backgroundColor: 'var(--overlay-light)',
                              color: 'var(--text-primary)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--accent-primary)';
                              e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'var(--border-default)';
                              e.currentTarget.style.transform = 'scale(1)';
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
                          rel="noreferrer"
                          className='btn-primary group/btn relative overflow-hidden'
                        >
                          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"
                                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
                          <FaExternalLinkAlt className="relative" />
                          <span className="relative">Live Demo</span>
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          className='btn-secondary'
                        >
                          <FaGithub />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
