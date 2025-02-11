import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: '3D Product Configurator',
    description: 'Interactive 3D product visualization using Three.js',
    image: 'https://images.unsplash.com/photo-1633899306328-c5e70574aaa3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
    links: {
      live: '#',
      github: '#'
    }
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered responses',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    tags: ['React', 'Node.js', 'Socket.io', 'OpenAI'],
    links: {
      live: '#',
      github: '#'
    }
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group relative bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
      <div className="relative h-[400px]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="relative z-20 p-6 -mt-20">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.links.live}
            className="flex items-center gap-2 px-4 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.links.github}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing web development expertise and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;