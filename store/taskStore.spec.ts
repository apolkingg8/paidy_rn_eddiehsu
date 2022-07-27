import taskStore, {TaskStore} from "./taskStore";
import Task from "../Klass/Task";

describe('taskStore', ()=> {
    beforeEach(()=> {
        taskStore.tasks = []
    })

    test('constructor()', ()=> {
        expect(taskStore).toBeInstanceOf(TaskStore)
    })

    test('addTask()', ()=> {
        expect(taskStore.tasks.length).toEqual(0)

        const task1 = new Task({id: 'task1'})
        const task2 = new Task({id: 'task2'})
        taskStore.addTask(task1)
        taskStore.addTask(task2)

        expect(taskStore.tasks).toMatchObject([task2, task1])
    })

    test('updateTask()', ()=> {
        const task1 = new Task({id: 'task1'})
        const task2 = new Task({id: 'task2'})
        taskStore.tasks = [task1, task2]

        const newTask = new Task({
            ...task1,
            text: 'Hello',
        })
        taskStore.updateTask(newTask)

        expect(taskStore.tasks).toMatchObject([newTask, task2])
    })

    test('removeTaskById()', ()=> {
        const task1 = new Task({id: 'task1'})
        const task2 = new Task({id: 'task2'})
        taskStore.tasks = [task1, task2]

        taskStore.removeTaskById(task1.id)
        expect(taskStore.tasks).toMatchObject([task2])

        taskStore.removeTaskById('dumb')
        expect(taskStore.tasks).toMatchObject([task2])

        taskStore.removeTaskById(task2.id)
        expect(taskStore.tasks).toMatchObject([])
    })
})
