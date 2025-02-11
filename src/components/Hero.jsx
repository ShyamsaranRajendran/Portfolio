import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import SplitType from 'split-type';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Hero = () => {
  const textRef = useRef(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (textRef.current) {
      const text = new SplitType(textRef.current, { types: 'chars' });
      gsap.from(text.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
      });
    }

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div ref={cursorRef} className="pointer-events-none fixed top-0 left-0 w-8 h-8 bg-white rounded-full mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 z-50" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl text-purple-300 mb-4 font-light">Hello, I'm</h2>
          <h1 ref={textRef} className="text-6xl md:text-8xl font-bold text-white mb-8">
            John Developer
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Creative Developer & Digital Artist crafting immersive web experiences
          </p>
          
          <div className="flex gap-6 justify-center mb-12">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <GithubIcon className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <LinkedinIcon className="w-6 h-6 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <TwitterIcon className="w-6 h-6 text-white" />
            </motion.a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce mx-auto" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;