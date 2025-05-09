// Database of projects
const projects = [
  {
    title: "Pokedex",
    description: "Pokedex con información de pokemones, desarrollado con React, TypeScript, Tailwind CSS y consumiendo la API de PokeAPI.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/SiKoDhany/pokedex",
    demoLink: "https://pokedex-danielc.netlify.app/"
  },
  {
    title: "Proximamente",
    description: "Aplicación web de gestión de tareas con funcionalidades CRUD, autenticación y persistencia de datos.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    title: "Proximamente",
    description: "Panel de administración para tienda en línea con visualización de métricas, inventario y ventas.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubLink: "#",
    demoLink: "#"
  }
];

// Function to get all projects
export const getAllProjects = () => {
  return projects;
};

// Function to get a project by index
export const getProjectByIndex = (index) => {
  return projects[index];
};

// Function to add a new project
export const addProject = (project) => {
  projects.push(project);
  return projects;
};

// Function to update a project
export const updateProject = (index, updatedProject) => {
  if (index >= 0 && index < projects.length) {
    projects[index] = updatedProject;
    return projects;
  }
  return null;
};

// Function to delete a project
export const deleteProject = (index) => {
  if (index >= 0 && index < projects.length) {
    projects.splice(index, 1);
    return projects;
  }
  return null;
}; 