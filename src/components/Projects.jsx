import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project 2",
    description: "Mobile-first responsive web application",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Project 3",
    description: "Real-time data visualization dashboard",
    image: "https://via.placeholder.com/400x300",
    tech: ["React", "D3.js", "WebSocket"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700 p-6"
              custom={index}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-image w-full h-56 object-cover rounded-lg mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <div className="project-content">
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="project-tech mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-badge inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2"
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "#1E90FF",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="project-links flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="project-link text-blue-500 hover:underline"
                    whileHover={{ scale: 1.1, color: "#1E90FF" }}
                    transition={{ duration: 0.3 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="project-link text-green-500 hover:underline"
                    whileHover={{ scale: 1.1, color: "#32CD32" }}
                    transition={{ duration: 0.3 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
