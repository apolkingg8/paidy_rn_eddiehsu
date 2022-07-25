import {makeAutoObservable} from "mobx";
import Task from "../Klass/Task";

export class TaskStore {

    tasks: Task[] = []

    addTask = (newTask: Task)=> {
        this.tasks.push(newTask)
    }

    removeTaskById = ()=> {

    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new TaskStore()
