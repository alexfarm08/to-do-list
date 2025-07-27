import {addDate} from "./dates.js";
import { addToDo, arrToDo } from "./toDoLogic.js";
import { addProject, projects, addToProjectToDo } from "./projects.js";
import { landingPage } from "./landingPage.js";

let h = addProject('mod 6 hw', 'need to finish my mod 6 hw');

addToDo('test', 'testing add project to todo', 2025, 7, 27, 'low');

let b = arrToDo[0];

addToProjectToDo('mod 6 hw', b);

console.log(projects[0].projectToDo);

landingPage();