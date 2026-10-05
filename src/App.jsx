import React, { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CircularLoader from './components/CircularLoader' // 👈 import the loader

const About = React.lazy(() => import('./components/About'));
const Portfolio = React.lazy(() => import('./components/Portfolio'));
const Services = React.lazy(() => import('./components/Services'));
const Motion = React.lazy(() => import('./components/Motion'));
const Skills = React.lazy(() => import('./components/Skills.jsx'));
const Contact = React.lazy(() => import('./components/Contact'));
const ContactInfo = React.lazy(() => import('./components/ContactInfo'));
const ResumeButton = React.lazy(() => import('./components/ResumeButton'));
const Footer = React.lazy(() => import('./components/Footer'));

import gsap from 'gsap'
import { useTheme } from './context/ThemeContext'
import { motion, useScroll } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { useGSAP } from '@gsap/react'
import StarBackground from './components/StarsBackground.jsx'
import Experience from './components/Experience.jsx';


const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <span className="text-zinc-500">Loading section...</span>
  </div>
);

const App = () => {
  const scrollYprogress = useScroll().scrollYProgress
  const [theme] = useTheme();
  const divref = React.useRef(null);

  // 👇 Track whether the circular loader has finished
  const [loaderDone, setLoaderDone] = useState(false);

  useGSAP(function () {
    if (!loaderDone) return; // Don't run GSAP stair anim until loader is done
    const tl = gsap.timeline();
    tl.from('.stair', { height: 0, duration: 0.8, stagger: { amount: -0.3 } });
    tl.to('.stair', { y: '100%', stagger: { amount: -0.3 } });
    tl.to(divref.current, { opacity: 0, duration: 0, delay: -0.1, display: 'none' });
  }, [loaderDone]); // re-run when loaderDone becomes true

  return (
    <>
      {/* 👇 Show CircularLoader until complete, then unmounts itself */}
      {!loaderDone && (
        <CircularLoader onComplete={() => setLoaderDone(true)} />
      )}

      {/* Only render the rest after loader finishes */}
      {loaderDone && (
        <>
          <StarBackground theme={theme} />

          {/* GSAP stair overlay */}
          <div ref={divref} className='h-screen w-full leading-tight flex fixed z-50 top-0 pointer-events-none'>
            <div className='stair h-full w-1/2 bg-zinc-950'></div>
            <div className='stair h-full w-1/2 bg-zinc-950'></div>
            <div className='stair h-full w-1/2 bg-zinc-950'></div>
            <div className='stair h-full w-1/2 bg-zinc-950'></div>
            <div className='stair h-full w-1/2 bg-zinc-950'></div>
            <div className='stair h-full w-1/2 bg-zinc-950'></div>
          </div>

          <div id={theme} style={{ backgroundColor: 'transparent' }} className="relative max-w-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYprogress }}
              className='bg-lime-400 h-[2px] mb-20 origin-left fixed w-full z-120'
            />

            <Navbar />
            <div className='absolute w-full h-[5px] top-11 fixed z-1 hidden md:flex bg-amber-100'></div>
            <Home />

            <Suspense fallback={<LoadingFallback />}>
              <Motion />
              <hr className='mt-0' />
              <About />
              <Services />
              <Portfolio />
              <Skills />
              <hr className='mb-10 m-2 mx-4'/>
              <Experience/>
              <hr className='mb-10 m-2 mx-4' />
              <Contact />
              <ContactInfo />
              <hr className='mb-10 m-2 mx-8' />
              <Footer />
            </Suspense>
          </div>

          <Toaster />
        </>
      )}
    </>
  );
};

export default App;