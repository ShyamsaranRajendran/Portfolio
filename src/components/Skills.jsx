import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { CodeIcon, PaintbrushIcon, LayoutIcon, DatabaseIcon } from 'lucide-react';

const SkillSphere = () => {
  const words = [
    'React', 'TypeScript', 'Node.js', 'Three.js',
    'GSAP', 'Tailwind', 'Next.js', 'GraphQL'
  ];

  return (
    <Canvas camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      {words.map((word, i) => {
        const phi = Math.acos(-1 + (2 * i) / words.length);
        const theta = Math.sqrt(words.length * Math.PI) * phi;
        return (
          <Text
            key={word}
            position={[
              8 * Math.cos(theta) * Math.sin(phi),
              8 * Math.sin(theta) * Math.sin(phi),
              8 * Math.cos(phi),
            ]}
            fontSize={1}
            color="white"
          >
            {word}
          </Text>
        );
      })}
    </Canvas>
  );
};

const SkillCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-purple-500/20 rounded-lg">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Combining technical expertise with creative vision to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="h-[400px]">
            <SkillSphere />
          </div>
          <div className="grid grid-cols-1 gap-6">
            <SkillCard
              icon={CodeIcon}
              title="Frontend Development"
              description="Expert in React, TypeScript, and modern web technologies"
            />
            <SkillCard
              icon={PaintbrushIcon}
              title="Creative Development"
              description="Crafting unique animations and interactive experiences"
            />
            <SkillCard
              icon={LayoutIcon}
              title="Responsive Design"
              description="Building beautiful interfaces that work on any device"
            />
            <SkillCard
              icon={DatabaseIcon}
              title="Full Stack Development"
              description="End-to-end solutions with modern backend technologies"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;