import { format, compareAsc } from "date-fns";

const dates = [];

export function addDate(year, month, day) {
    format(new Date(year, month, day), "MM/dd/yyyy");

    let date = new Date(year,month - 1,day);

    dates.push(date);

    return date;
}