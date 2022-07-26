import {makeAutoObservable} from "mobx";
import Task from "../Klass/Task";

export class TaskStore {

    tasks: Task[] = []

    addTask = (newTask: Task)=> {
        this.tasks.unshift(newTask)
    }

    removeTaskById = (id: string)=> {
        this.tasks = this.tasks.filter((task)=> {
            return task.id !== id
        })
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new TaskStore()
