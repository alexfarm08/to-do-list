import { addProject, projects } from "./projects";

export function homePage() {
    // ADDS VARS 
    let projectTitle;
    let projectDescription;

    const pageContent = document.querySelector('.content');

    //ADDS THE NAV BAR HEADER 
    const header = document.createElement('header');
    header.classList.add('navBarLeft');
    pageContent.appendChild(header);

    const pageTitleDiv = document.createElement('div');
    pageTitleDiv.classList.add('titleDiv');
    header.appendChild(pageTitleDiv);

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'To Do Lists';
    pageTitleDiv.appendChild(title);

    const homeNavLinkDiv = document.createElement('div');
    homeNavLinkDiv.classList.add('homeBtnDiv');
    header.appendChild(homeNavLinkDiv);

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('homeBtn');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        pageContent.textContent = "";
        homePage();
    });
    homeNavLinkDiv.appendChild(homeBtn);

    const projectsBtnDiv = document.createElement('div');
    projectsBtnDiv.classList.add('projectsBtnDiv');
    header.appendChild(projectsBtnDiv);

    const projectBtn = document.createElement('button');
    projectBtn.classList.add('projectBtn');
    projectBtn.textContent = 'Projects';
    projectBtn.addEventListener('click', () => {
    pageContent.textContent = "";
        // FIX ME NEEDS TO LOAD PROJECTS PAGE
    });
    projectsBtnDiv.appendChild(projectBtn);

    const toDoBtnDiv = document.createElement('div');
    toDoBtnDiv.classList.add('toDoBtnDiv');
    header.appendChild(toDoBtnDiv);

    const toDoBtn = document.createElement('button');
    toDoBtn.classList.add('toDoBtn');
    toDoBtn.textContent = 'To Do\'s';
    toDoBtn.addEventListener('click', () => {
    toDoBtn.textContent = "";
        // FIX ME NEEDS TO LOAD TO-DOS PAGE
    });
    toDoBtnDiv.appendChild(toDoBtn);

    const createDiv = document.createElement('div')
    createDiv.classList.add('createDiv');
    header.appendChild(createDiv);

    // MAKES A DIALOG WINDOW FOR ADDING PROJECTS
    const projectDialog = document.createElement('dialog');
    projectDialog.classList.add('projectDialog');
    header.appendChild(projectDialog);

    const projectDialogSection = document.createElement('section');
    projectDialogSection.classList.add('projectLableInput');
    projectDialog.appendChild(projectDialogSection);

    const projectTitleLable = document.createElement('label');
    projectTitleLable.classList.add('projectFormContent');
    projectTitleLable.id = 'projectTitleLable';
    projectTitleLable.htmlFor = 'projectTitle';
    projectTitleLable.textContent = 'Project Title';
    projectDialogSection.appendChild(projectTitleLable);

    const projectTitleInput = document.createElement('input'); 
    projectTitleInput.classList.add('projectFormContent');
    projectTitleInput.id = 'projectTitle';
    projectTitleInput.setAttribute('type', 'text');
    projectTitleInput.setAttribute('name', 'projectTitle');
    projectDialogSection.appendChild(projectTitleInput);

    const projectDescriptionLable = document.createElement('label');
    projectDescriptionLable.classList.add('projectFormContent');
    projectDescriptionLable.id = 'projectDescriptionLable';
    projectDescriptionLable.htmlFor = 'projectDescription';
    projectDescriptionLable.textContent = 'Project Description';
    projectDialogSection.appendChild(projectDescriptionLable);

    const projectDescriptionInput = document.createElement('textarea'); 
    projectDescriptionInput.classList.add('projectFormContent');
    projectDescriptionInput.id = 'projectDescription';
    projectDescriptionInput.setAttribute('name', 'projectDescription');
    projectDialogSection.appendChild(projectDescriptionInput);

    const projectDialogSubmit = document.createElement('button');
    projectDialogSubmit.classList.add('projectFormContent');
    projectDialogSubmit.id = 'ProjectSubmit';
    projectDialogSubmit.textContent = '+ Add Project';
    projectDialogSection.appendChild(projectDialogSubmit);
    
    // ADD PROJECT BUTTON

    const addprojectBtn = document.createElement('button');
    addprojectBtn.classList.add('addprojectBtn');
    addprojectBtn.textContent = '+ Project';

    // EVENT LISTENER TO OPEN PROJECTS FORM

    addprojectBtn.addEventListener('click', () => {
        projectDialog.showModal();
        projectDialogSection.focus();
    });
    createDiv.appendChild(addprojectBtn);

    // TAKES PROJECT FORM INPUT AND ADDS TO PROJECTS ARR

    projectDialogSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        projectTitle = document.getElementById('projectTitle').value;
        projectDescription = document.getElementById('projectDescription').value;

        if (projectTitle.trim() === "" || projectDescription.trim() === "") {
            alert('please fill out both project title and description');
            return;
        }

        addProject(projectTitle,projectDescription);
        console.log('projects array after add: ' + projects);

        projectDialog.close();
    });
}