import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: 'easeOut' },
    }),
};

const About = () => {
    const [theme] = useTheme();

    const skills = [
        'MongoDB', 'Express.js', 'React', 'Node.js',
        'JavaScript', 'TypeScript', 'Tailwind CSS', 'Docker',
        'Kubernetes', 'REST APIs', 'Git', 'AI Integration',
    ];

    const capabilities = [
        'Full MERN Stack Development',
        'Responsive Web Design & UI/UX',
        'RESTful API Design & Integration',
        'Database Modeling (NoSQL / MongoDB)',
        'Agile Development Methodologies',
        'Front-end & Back-end Architecture',
    ];

    return (
        <div
            id="about"
            name='About'
            className='w-full py-20'
            style={{ backgroundColor: 'transparent' }}
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* --- Header --- */}
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className='pb-8'
                >
                    <p className='text-sm font-semibold tracking-[0.2em] uppercase'
                       style={{ color: 'var(--text-muted)' }}>
                        Get to know me
                    </p>
                    <h2 className='mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight'
                        style={{ color: 'var(--text-primary)' }}>
                        About
                        <span className='ml-3 gradient-text'>
                            Me
                        </span>
                    </h2>
                    <div className='mt-4 h-1 w-24 rounded-full'
                         style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))' }} />

                    <p className='mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl'
                       style={{ color: 'var(--text-secondary)' }}>
                        Hello! I&apos;m <span className='font-bold gradient-text'>Mudassir</span>,
                        a Full Stack Developer currently pursuing a BS in Software Engineering.
                        I specialize in turning creative ideas into robust, production-ready code.
                    </p>

                    {/* University badge */}
                    <div className='mt-5 inline-flex items-center gap-3 px-4 py-3 rounded-xl glass-card shadow-lg'>
                        <span className='inline-flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white'
                              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}>
                            U
                        </span>
                        <p className='font-semibold italic' style={{ color: 'var(--text-primary)' }}>
                            University of{' '}
                            <span className='text-red-500 not-italic font-bold'>I</span>slamia{' '}
                            <span className='text-red-500 not-italic font-bold'>C</span>ollege{' '}
                            <span className='text-green-500 not-italic font-bold'>P</span>eshawar
                        </p>
                    </div>
                </motion.div>

                {/* --- Main Grid --- */}
                <div className='grid md:grid-cols-2 gap-8 mt-6'>

                    {/* Left Column */}
                    <div className='space-y-8'>

                        {/* Education card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={1}
                            className='group relative rounded-2xl p-6 glass-card shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                            style={{
                                borderColor: 'var(--border-default)',
                                '--hover-border': 'var(--accent-primary)'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full text-white shadow-md'
                                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                                Education
                            </span>
                            <h3 className='text-2xl font-bold mt-2 gradient-text'>
                                BS in Software Engineering
                            </h3>
                            <p className='text-sm mt-1' style={{ color: 'var(--text-muted)' }}>
                                Islamia College Peshawar • Class of 2026
                            </p>
                            <div className='mt-4 grid sm:grid-cols-2 gap-4'>
                                <div>
                                    <p className='font-semibold flex items-center gap-2' style={{ color: 'var(--text-primary)' }}>
                                        <span className='h-1.5 w-1.5 rounded-full' style={{ backgroundColor: 'var(--accent-primary)' }} />
                                        Coursework
                                    </p>
                                    <p className='text-sm mt-1' style={{ color: 'var(--text-secondary)' }}>
                                        Data Structures, Algorithms, Computer Systems, Web Development, Database Systems.
                                    </p>
                                </div>
                                <div>
                                    <p className='font-semibold flex items-center gap-2' style={{ color: 'var(--text-primary)' }}>
                                        <span className='h-1.5 w-1.5 rounded-full' style={{ backgroundColor: 'var(--accent-secondary)' }} />
                                        Key Projects
                                    </p>
                                    <p className='text-sm mt-1' style={{ color: 'var(--text-secondary)' }}>
                                        Developed multiple software projects, including a web-based application using the MERN stack.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Professional Summary card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={2}
                            className='relative rounded-2xl p-6 glass-card shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                            style={{ borderColor: 'var(--border-default)' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-secondary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full text-white shadow-md'
                                  style={{ background: 'linear-gradient(135deg, var(--accent-secondary), var(--accent-primary))' }}>
                                Summary
                            </span>
                            <h3 className='text-2xl font-bold mt-2' style={{ color: 'var(--text-primary)' }}>Professional Summary</h3>
                            <p className='mt-3 text-justify leading-relaxed' style={{ color: 'var(--text-secondary)' }}>
                                As a seasoned MERN stack developer, I possess a strong proficiency in
                                designing, developing, and deploying scalable, efficient, and secure
                                web applications. With a keen eye for detail and a passion for staying
                                up-to-date with the latest industry trends, I deliver high-quality
                                solutions that meet and exceed client expectations.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-8'>

                        {/* Skills card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={3}
                            className='relative rounded-2xl p-6 glass-card shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                            style={{ borderColor: 'var(--border-default)' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full text-white shadow-md'
                                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                                Tech Stack
                            </span>
                            <h3 className='text-2xl font-bold mt-2' style={{ color: 'var(--text-primary)' }}>Technical Skills</h3>
                            <ul className='mt-4 flex flex-wrap gap-2'>
                                {skills.map((s, i) => (
                                    <motion.li
                                        key={s}
                                        custom={i}
                                        initial='hidden'
                                        whileInView='visible'
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className='px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 cursor-default'
                                        style={{
                                            border: '1px solid var(--border-default)',
                                            backgroundColor: 'var(--overlay-light)',
                                            color: 'var(--text-primary)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--accent-primary)';
                                            e.currentTarget.style.color = 'var(--accent-primary)';
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.borderColor = 'var(--border-default)';
                                            e.currentTarget.style.color = 'var(--text-primary)';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        {s}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Capabilities card */}
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            custom={4}
                            className='relative rounded-2xl p-6 glass-card shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                            style={{ borderColor: 'var(--border-default)' }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-default)'}
                        >
                            <span className='absolute -top-3 left-6 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full text-white shadow-md'
                                  style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                                Capabilities
                            </span>
                            <h3 className='text-2xl font-bold mt-2' style={{ color: 'var(--text-primary)' }}>Development Capabilities</h3>
                            <ul className='mt-4 space-y-2.5'>
                                {capabilities.map((c) => (
                                    <li key={c} className='flex items-start gap-3'>
                                        <span className='mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full text-white text-[10px] font-bold'
                                              style={{ background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))' }}>
                                            ✓
                                        </span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
