import {addDate} from "./dates.js";
import { addToDo, arrToDo } from "./toDoLogic.js";

console.log(addDate(2024, 8, 22));

addToDo("go to bar", "going to bar with eric", 2024, 8, 22, "medium");

console.log(arrToDo);