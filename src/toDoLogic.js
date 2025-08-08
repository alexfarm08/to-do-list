import {addDate} from "./dates.js"
export const arrToDo = [];

function ToDo(title, description, year, month, day, priority) {
    if (!new.target) {
        throw Error("you must use the 'new' operator to call this constructor")
    }

    this.title = title;
    this.description = description;
    this.dueDate = addDate(year, month, day);
    this.priority = priority;
}

export function addToDo(title, description, year, month, day, priority) {
    title = new ToDo(title, description, year, month, day, priority);

    arrToDo.push(title);
}

export function compareToDoDates(toDo) {
    const today = new Date();
    today.setHours(0,0,0,0);

    const dueDate = new Date(toDo.year, toDo.month, toDo.day);
    dueDate.setHours(0,0,0,0);

    if (dueDate < today) return 'past';
    if (dueDate.getTime() === today.getTime()) return 'today';
    return 'upcoming';
}