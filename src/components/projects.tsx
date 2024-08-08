import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Gloplayer",
      description: "Description for project 1",
      link: "#"
    },
    {
      title: "ArtWork website",
      description: "Description for project 2",
      link: "#"
    }
    // Add more projects here
  ];

  return (
    <section id="projects" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded shadow-sm">
              <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="mb-2">{project.description}</p>
              <a href={project.link} className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
