import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiCode, FiCpu, FiZap, FiLayers } from 'react-icons/fi';

const Services = () => {
  const [theme] = useTheme();

  const services = [
    {
      title: "Full Stack Web Development",
      description: "Building production-ready applications using the MERN stack. I specialize in creating scalable architectures with secure RESTful APIs and responsive, user-centric frontends.",
      icon: <FiCode className="text-lime-400" />,
      details: ["React.js & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "AI Integration & Engineering",
      description: "Integrating cutting-edge LLMs into applications. From AI-driven content generation to intelligent analysis tools using LangChain, OpenAI, and Groq APIs.",
      icon: <FiCpu className="text-lime-400" />,
      details: ["RAG Pipelines", "Prompt Engineering", "LangChain Orchestration", "AI Agents"]
    },
    {
      title: "AI-Powered Automation Tools",
      description: "Developing specialized AI tools like AI Resume Builders and AI Website Generators that automate complex manual workflows and improve efficiency.",
      icon: <FiZap className="text-lime-400" />,
      details: ["Custom AI Workflows", "Automated Content Generation", "ATS Optimization", "Smart Analysis"]
    },
    {
      title: "DevOps & Deployment",
      description: "Ensuring seamless deployment and scalability using modern containerization tools. I bridge the gap between development and production.",
      icon: <FiLayers className="text-lime-400" />,
      details: ["Docker Containerization", "Vercel & Render Deployment", "CI/CD Fundamentals", "Git Version Control"]
    }
  ];

  return (
    <section
      id="services"
      className={`py-24 px-4 md:px-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-transparent text-white' : 'bg-zinc-50 text-zinc-900'}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-20 w-full"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Professional <span className="text-lime-400">Services</span>
          </h2>
          <div className="h-1.5 w-24 bg-lime-400 mx-auto rounded-full"></div>
          <p className={`mt-6 max-w-2xl text-lg text-center ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
            Combining full-stack expertise with AI integration to build the next generation of intelligent web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-300 shadow-2xl overflow-hidden ${
                theme === 'dark'
                ? 'bg-zinc-900/40 backdrop-blur-sm border-zinc-800 hover:border-lime-400/50'
                : 'bg-white border-zinc-200 hover:border-lime-400'
              }`}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-20 ${
                theme === 'dark' ? 'bg-lime-400' : 'bg-lime-600'
              }`}></div>

              <div className="relative z-10">
                <div className={`text-4xl mb-6 p-3 inline-block rounded-2xl transition-all duration-300 ${
                  theme === 'dark' ? 'bg-zinc-800/50' : 'bg-zinc-100'
                } group-hover:scale-110 group-hover:rotate-3`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-semibold px-3 py-1 rounded-lg transition-all duration-300 ${
                        theme === 'dark'
                        ? 'bg-zinc-800/50 text-zinc-400 group-hover:text-lime-400 group-hover:bg-zinc-800'
                        : 'bg-zinc-100 text-zinc-600 group-hover:text-black group-hover:bg-zinc-200'
                      }`}
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
