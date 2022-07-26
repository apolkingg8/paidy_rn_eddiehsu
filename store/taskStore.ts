import {makeAutoObservable} from "mobx";
import Task from "../Klass/Task";

export class TaskStore {

    tasks: Task[] = []

    addTask = (newTask: Task)=> {
        this.tasks.unshift(newTask)
    }

    updateTask = (newTask: Task)=> {
        this.tasks = this.tasks.map((task)=> {
            if(task.id === newTask.id) {
                return newTask
            }

            return task
        })
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
