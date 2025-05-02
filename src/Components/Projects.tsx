import React from 'react';
import Particles from './Particles';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Web",
      description: "Portafolio personal desarrollado con React, TypeScript y Tailwind CSS, diseñado para mostrar mis proyectos y habilidades.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Sistema de Gestión de Tareas",
      description: "Aplicación web de gestión de tareas con funcionalidades CRUD, autenticación y persistencia de datos.",
      technologies: ["React", "Node.js", "MongoDB"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "E-commerce Dashboard",
      description: "Panel de administración para tienda en línea con visualización de métricas, inventario y ventas.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-4 bg-[#F9F4F4] relative">
      <div className="absolute inset-0 pointer-events-none">
        <Particles 
          particleCount={150} 
          particleColors={['#C94C4C', '#A65A4A', '#F9F4F4']} 
          speed={0.5} 
          particleBaseSize={1.5}
          className="absolute inset-0"
        />
      </div>
      <div className="max-w-4xl w-full relative">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#A65A4A]">Mis Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white backdrop-blur-sm border border-gray-200 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
