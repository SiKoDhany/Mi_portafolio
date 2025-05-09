interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export function getAllProjects(): Project[];
export function getProjectByIndex(index: number): Project | undefined;
export function addProject(project: Project): Project[];
export function updateProject(index: number, updatedProject: Project): Project[] | null;
export function deleteProject(index: number): Project[] | null; 