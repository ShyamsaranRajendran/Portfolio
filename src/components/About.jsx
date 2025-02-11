import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (sectionRef.current) {
      const lines = sectionRef.current.querySelectorAll('.reveal-text');
      
      lines.forEach((line) => {
        gsap.from(line, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: line,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        });
      });
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        },
        scale: 1.1
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={imageRef}
            className="relative h-[600px] overflow-hidden rounded-2xl"
            style={{ y }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transform hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </motion.div>

          <div className="text-white space-y-8">
            <h2 className="text-4xl font-bold mb-8 reveal-text">
              About Me
            </h2>
            
            <p className="text-xl text-gray-300 reveal-text">
              I'm a creative developer with a passion for building beautiful, interactive web experiences. With over 5 years of experience in front-end development, I specialize in creating engaging user interfaces and smooth animations.
            </p>
            
            <p className="text-xl text-gray-300 reveal-text">
              My journey in web development started with a fascination for design and motion. Today, I combine technical expertise with creative vision to build websites that not only function flawlessly but also tell compelling stories.
            </p>

            <motion.div
              className="grid grid-cols-2 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-2">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;