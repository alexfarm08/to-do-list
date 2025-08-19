export const projects = [];

function Project(title, description) {
    if (!new.target) {
        throw Error("you must use the 'new' operator to call this constructor")
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.projectToDo = [];
}

export function addProject(title, description) {
    const newProject = new Project(title, description);

    projects.push(newProject);
    projectsStorage(projects)
}

export function addToProjectToDo(projectTitle, toDoObject) {
    const project = projects.find(p => p.title === projectTitle);
    if (!project) {
        console.error('project not found: ' + projectTitle);
        return;
    }
    project.projectToDo.push(toDoObject);
}

export function projectsStorage(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}