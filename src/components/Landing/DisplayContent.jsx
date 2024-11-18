import React from "react";
import Grid from "../../assets/images/Group 25.svg";
import '../css/DisplayContent.css';
const DisplayContent = () => {
  return (
    <div className="DisplayContent">
      {/* Banner Section */}
      <div className="banner">
        <img src={Grid} alt="Banner" className="banner-image" />
        <h1 className="title">Shyam's Portfolio</h1>
        <p className="subtitle">Full-Stack Developer | DevOps Engineer</p>
      </div>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate Full-Stack Developer and DevOps Engineer with
          expertise in designing, building, and deploying scalable web
          applications and cloud infrastructure. I love solving problems and
          creating efficient solutions to complex challenges.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React, Angular, HTML5, CSS3, JavaScript,
            TypeScript
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, Django, Flask, Nest.js
          </li>
          <li>
            <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL
          </li>
          <li>
            <strong>DevOps:</strong> Docker, Kubernetes, CI/CD, Jenkins,
            Terraform, AWS, GCP
          </li>
          <li>
            <strong>Other:</strong> Git, REST APIs, GraphQL, Agile Methodologies
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Freelancing Platform</h3>
          <p>
            A platform connecting freelancers with organizations for short-term
            projects. Includes features like job postings, user profiles, and
            secure payments.
          </p>
          <a
            href="https://github.com/shyam/freelancing-platform"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project">
          <h3>Food Recipe Website</h3>
          <p>
            A MERN stack application for browsing and managing food recipes,
            including a personalized dashboard.
          </p>
          <a
            href="https://github.com/shyam/food-recipe"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project">
          <h3>Automated Deployment Pipeline</h3>
          <p>
            Implemented a CI/CD pipeline using Jenkins and Docker for a
            microservices-based application.
          </p>
          <a
            href="https://github.com/shyam/deployment-pipeline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>Full-Stack Developer Intern</strong> - ABC Corp (Jan 2023 -
            May 2023)
            <p>
              Developed scalable web applications using React and Node.js,
              improving performance by 30%.
            </p>
          </li>
          <li>
            <strong>DevOps Engineer Intern</strong> - XYZ Tech (Jun 2023 - Nov
            2023)
            <p>
              Designed and maintained cloud infrastructure on AWS, reducing
              costs by 20%.
            </p>
          </li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            Bachelor of Technology in Computer Science - XYZ University (2019 -
            2023)
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: shyam@example.com</p>
        <p>Phone: +91-123-456-7890</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shyam"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shyam"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://shyam-portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </section>
    </div>
  );
};

export default DisplayContent;
