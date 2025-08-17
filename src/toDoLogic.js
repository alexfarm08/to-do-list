import {addDate} from "./dates.js";
export const arrToDo = [];

function ToDo(title, description, year, month, day, priority) {
    if (!new.target) {
        throw Error("you must use the 'new' operator to call this constructor")
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.dueDate = addDate(year, month, day);
    this.priority = priority;
}

export function addToDo(title, description, year, month, day, priority) {
    const toDO = new ToDo(title, description, year, month, day, priority);

    arrToDo.push(toDO);
}

const startOfDay = (d) => {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
};

export function compareToDoDates(toDo) {
    const due = startOfDay(new Date(toDo.dueDate));
    const today = startOfDay(new Date());

    const dt = due.getTime();
    const tt = today.getTime();

    if (dt < tt) return 'past';
    if (dt === tt) return 'today';
    return 'upcoming';
}