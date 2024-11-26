import React from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL", level: 85 },
  { name: "AWS", level: 70 },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="skills">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="skill-header flex justify-between items-center mb-4">
                <span className="skill-name text-xl font-semibold">
                  {skill.name}
                </span>
                <span className="skill-level text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="skill-bar bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="skill-fill bg-blue-500 h-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
