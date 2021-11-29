import Note from "./Note";
import Task from "./Task";

export default interface LifeCategory {
    id: string
    color: string
    name: string
    tasks: Task[]
    notes: string;
}