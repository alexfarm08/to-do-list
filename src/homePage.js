import { addProject, projects } from "./projects";
import { addToDo, arrToDo, compareToDoDates, deleteToDo, toDoArrStorage } from "./toDoLogic";
import { toDoPage } from "./toDoPage";
import { projectsPage } from "./projectsPage";

export function homePage() {
    // ADDS VARS 
    let projectTitle;
    let projectDescription;
    let toDoTitle;
    let toDoDescription;
    let toDoYear;
    let toDomonth;
    let toDoDay;
    let toDoPriority;

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
        projectsPage();
    });
    projectsBtnDiv.appendChild(projectBtn);

    const toDoBtnDiv = document.createElement('div');
    toDoBtnDiv.classList.add('toDoBtnDiv');
    header.appendChild(toDoBtnDiv);

    const toDoBtn = document.createElement('button');
    toDoBtn.classList.add('toDoBtn');
    toDoBtn.textContent = 'To Do\'s';
    toDoBtn.addEventListener('click', () => {
        pageContent.textContent = "";
        toDoPage();
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
    projectDialogSection.classList.add('projectDialogSection');
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

    // MAKES DIALOG WINDOW FOR TO-DOS

    const toDoDialog = document.createElement('dialog');
    toDoDialog.classList.add('projectDialog');
    toDoDialog.id = 'toDoDialog';
    header.appendChild(toDoDialog);

    const toDoDialogSection = document.createElement('section');
    toDoDialogSection.classList.add('toDoDialogSection');
    toDoDialogSection.id = 'toDoDialogSection';
    toDoDialog.appendChild(toDoDialogSection);

    const toDoTitleLable = document.createElement('label');
    toDoTitleLable.classList.add('toDoFormContent');
    toDoTitleLable.id = 'toDoTitleLable';
    toDoTitleLable.htmlFor = 'toDoTitle';
    toDoTitleLable.textContent = 'To-Do Title';
    toDoDialogSection.appendChild(toDoTitleLable);

    const toDoTitleInput = document.createElement('input'); 
    toDoTitleInput.classList.add('toDoFormContent');
    toDoTitleInput.id = 'toDoTitle';
    toDoTitleInput.setAttribute('type', 'text');
    toDoTitleInput.setAttribute('name', 'toDoTitle');
    toDoDialogSection.appendChild(toDoTitleInput);

    const toDoDescriptionLable = document.createElement('label');
    toDoDescriptionLable.classList.add('toDoFormContent');
    toDoDescriptionLable.id = 'toDoDescriptionLable';
    toDoDescriptionLable.htmlFor = 'toDoDescription';
    toDoDescriptionLable.textContent = 'To-Do Description';
    toDoDialogSection.appendChild(toDoDescriptionLable);

    const toDoDescriptionInput = document.createElement('input'); 
    toDoDescriptionInput.classList.add('toDoFormContent');
    toDoDescriptionInput.id = 'toDoDescription';
    toDoDescriptionInput.setAttribute('type', 'text');
    toDoDescriptionInput.setAttribute('name', 'toDoDescription');
    toDoDialogSection.appendChild(toDoDescriptionInput);

    const toDoYearLable = document.createElement('label');
    toDoYearLable.classList.add('toDoFormContent');
    toDoYearLable.id = 'toDoYearLable';
    toDoYearLable.htmlFor = 'toDoYear';
    toDoYearLable.textContent = 'To-Do Year due: ';
    toDoDialogSection.appendChild(toDoYearLable);

    const toDoYearInput = document.createElement('input'); 
    toDoYearInput.classList.add('toDoFormContent');
    toDoYearInput.id = 'toDoYear';
    toDoYearInput.setAttribute('type', 'number');
    toDoYearInput.setAttribute('min', '2000');
    toDoYearInput.setAttribute('max', '3000');
    toDoYearInput.setAttribute('name', 'toDoYear');
    toDoDialogSection.appendChild(toDoYearInput);

    const toDoMonthLable = document.createElement('label');
    toDoMonthLable.classList.add('toDoFormContent');
    toDoMonthLable.id = 'toDoMonthLabel';
    toDoMonthLable.htmlFor = 'toDoMonth';
    toDoMonthLable.textContent = 'To-Do Month due: ';
    toDoDialogSection.appendChild(toDoMonthLable);

    const toDoMonthInput = document.createElement('input'); 
    toDoMonthInput.classList.add('toDoFormContent');
    toDoMonthInput.id = 'toDoMonth';
    toDoMonthInput.setAttribute('type', 'number');
    toDoMonthInput.setAttribute('min', '1');
    toDoMonthInput.setAttribute('max', '12');
    toDoMonthInput.setAttribute('name', 'toDoMonth');
    toDoDialogSection.appendChild(toDoMonthInput);

    const toDoDayLable = document.createElement('label');
    toDoDayLable.classList.add('toDoFormContent');
    toDoDayLable.id = 'toDoDayLabel';
    toDoDayLable.htmlFor = 'toDoDay';
    toDoDayLable.textContent = 'To-Do Day due: ';
    toDoDialogSection.appendChild(toDoDayLable);

    const toDoDayInput = document.createElement('input'); 
    toDoDayInput.classList.add('toDoFormContent');
    toDoDayInput.id = 'toDoDay';
    toDoDayInput.setAttribute('type', 'number');
    toDoDayInput.setAttribute('min', '1');
    toDoDayInput.setAttribute('max', '31');
    toDoDayInput.setAttribute('name', 'toDoDay');
    toDoDialogSection.appendChild(toDoDayInput);

    const toDoPriorityLable = document.createElement('label');
    toDoPriorityLable.classList.add('toDoFormContent');
    toDoPriorityLable.id = 'toDoPrioritylabel';
    toDoPriorityLable.htmlFor = 'toDoPriority';
    toDoPriorityLable.textContent = 'To-Do Priority due: ';
    toDoDialogSection.appendChild(toDoPriorityLable);

    const toDoPriorityInput = document.createElement('input'); 
    toDoPriorityInput.classList.add('toDoFormContent');
    toDoPriorityInput.id = 'toDoPriority';
    toDoPriorityInput.setAttribute('type', 'text');
    toDoPriorityInput.setAttribute('name', 'toDoPriority');
    toDoDialogSection.appendChild(toDoPriorityInput);

    const toDoDialogSubmit = document.createElement('button');
    toDoDialogSubmit.classList.add('projectFormContent');
    toDoDialogSubmit.id = 'toDoSubmit';
    toDoDialogSubmit.textContent = '+ Add To-Do';
    toDoDialogSection.appendChild(toDoDialogSubmit);

    // ADD TODO BUTTON
    const addToDoBtn = document.createElement('button');
    addToDoBtn.classList.add('addToDoBtn');
    addToDoBtn.textContent = '+ To Do';

    // EVENT LISTENER TO OPEN TO DO FORM

    addToDoBtn.addEventListener('click', () => {
        toDoDialog.showModal();
        toDoDialogSection.focus();
    });
    createDiv.appendChild(addToDoBtn);

     toDoDialogSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        toDoTitle = document.getElementById('toDoTitle').value;
        toDoDescription = document.getElementById('toDoDescription').value;
        toDoYear = document.getElementById('toDoYear').value;
        toDomonth = document.getElementById('toDoMonth').value;
        toDoDay = document.getElementById('toDoDay').value;
        toDoPriority = document.getElementById('toDoPriority').value;

        if (toDoTitle.trim() === "" || toDoDescription.trim() === "" || toDoYear.trim() === "" || toDomonth.trim() === "" || toDoDay.trim() === "" || toDoPriority.trim() === "") {
            alert('please fill out both project title and description');
            return;
        }

        addToDo(toDoTitle, toDoDescription, toDoYear, toDomonth, toDoDay, toDoPriority);
        console.log('ToDo array after add: ' + arrToDo);
        displayToDos()
        toDoDialog.close();
    });

    // ADDS MAIN PAGE CONTENT 

    const contentMain = document.createElement('main');
    contentMain.id = 'mainSection';
    contentMain.classList.add('mainSection');
    pageContent.appendChild(contentMain);

    // ADDS HEADER SECTION

    const mainHeaderSection = document.createElement('section');
    mainHeaderSection.id = 'mainHeader';
    mainHeaderSection.classList.add('mainHeader');
    contentMain.appendChild(mainHeaderSection);

    // PAST DUE TITLE

    const mainHeader1 = document.createElement('div');
    mainHeader1.id = 'pastDueDiv';
    mainHeader1.classList.add('pastDueDiv');
    mainHeaderSection.appendChild(mainHeader1);

    const pastHeader = document.createElement('h2');
    pastHeader.id = 'pastDueText';
    pastHeader.classList.add('pastDueText');
    pastHeader.textContent = 'Past Due';
    mainHeader1.appendChild(pastHeader);

    // DUE TODAY TITLE 

    const mainHeader2 = document.createElement('div');
    mainHeader2.id = 'dueTodayDiv';
    mainHeader2.classList.add('dueTodayDiv');
    mainHeaderSection.appendChild(mainHeader2);

    const todayHeader = document.createElement('h2');
    todayHeader.id = 'dueTodayText';
    todayHeader.classList.add('dueTodayText');
    todayHeader.textContent = 'Due Today';
    mainHeader2.appendChild(todayHeader);

    // UPCOMING TITLE

    const mainHeader3 = document.createElement('div');
    mainHeader3.id = 'upcomingDiv';
    mainHeader3.classList.add('upcomingDiv');
    mainHeaderSection.appendChild(mainHeader3);

    const upComingHeader = document.createElement('h2');
    upComingHeader.id = 'upcomingText';
    upComingHeader.classList.add('upcomingText');
    upComingHeader.textContent = 'Upcoming';
    mainHeader3.appendChild(upComingHeader);

    // SETS UP SECTIONS FOR TO DOS TO BE DISPLAYED 

    const pastSection = document.createElement('section');
    pastSection.id = 'pastDueSection';
    pastSection.classList.add('pastDueSection');
    contentMain.appendChild(pastSection);

    const todaySection = document.createElement('section');
    todaySection.id = 'todaySection';
    todaySection.classList.add('todaySection');
    contentMain.appendChild(todaySection);

    const upComingSection = document.createElement('section');
    upComingSection.id = 'upComingSection';
    upComingSection.classList.add('upComingSection');
    contentMain.appendChild(upComingSection); 

    function loadToDos() {
        const storedUserData = localStorage.getItem('toDos');

        if (!storedUserData) return;

        const parsed = JSON.parse(storedUserData).map(t => ({
            ...t,
            // revive date string -> Date
            dueDate: new Date(t.dueDate),
            // ensure id exists
            id: t.id || crypto.randomUUID(),
        }));
        // replace contents WITHOUT reassigning the array reference
        arrToDo.splice(0, arrToDo.length, ...parsed);

    }

    function displayToDos() {
        const pastSection = document.getElementById('pastDueSection');
        const todaySection = document.getElementById('todaySection');
        const upComingSection = document.getElementById('upComingSection');

        // Clear
        pastSection.textContent = '';
        todaySection.textContent = '';
        upComingSection.textContent = '';

        loadToDos();

        arrToDo.forEach(toDo => {
            const toDoDiv = document.createElement('div');
            toDoDiv.className = 'toDoCard';

            const due = toDo.dueDate;
            const y = due.getFullYear();
            const m = String(due.getMonth() + 1).padStart(2, '0');
            const d = String(due.getDate()).padStart(2, '0');

            toDoDiv.innerHTML = `
            <h3>${toDo.title}</h3>
            <p>${toDo.description}</p>
            <p>Due: ${y}-${m}-${d}</p>
            <p>Priority: ${toDo.priority}</p>
            `;

            function deleteToDo(id) {
              const i = arrToDo.findIndex(t => t.id === id);
              if (i !== -1) {
                arrToDo.splice(i, 1);
                toDoArrStorage(arrToDo);
                displayToDos(); // re-render after deletion
              }
            }

            const delBtn = document.createElement('button');
            delBtn.className = 'deleteBtn';
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', () => deleteToDo(toDo.id));
            toDoDiv.appendChild(delBtn);

            const bucket = compareToDoDates(toDo);
            if (bucket === 'past') pastSection.appendChild(toDoDiv);
            else if (bucket === 'today') todaySection.appendChild(toDoDiv);
            else upComingSection.appendChild(toDoDiv);
        });
    }
    displayToDos();
}