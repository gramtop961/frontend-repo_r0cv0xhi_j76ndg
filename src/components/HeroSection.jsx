import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className="relative h-[90vh] md:h-screen w-full bg-[#111111] overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient vignette to improve text legibility (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/80" />

      {/* Copy Overlay */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center"
      >
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          We Build Worlds.
        </motion.h1>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-gray-200 max-w-2xl text-lg md:text-xl"
        >
          Vertex Vanguard Studios: Pioneering the future of digital animation and VFX.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF]/60 bg-white/5 px-5 py-2 text-white hover:bg-white/10 transition"
          >
            Explore Our Work
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <div className="flex flex-col items-center text-gray-300/80 text-xs">
          <span>Scroll</span>
          <div className="mt-2 h-6 w-[1px] bg-gray-500/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
