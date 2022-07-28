import {render} from "@testing-library/react-native";
import TaskList from "./TaskList";
import taskStore from "../store/taskStore";
import Task from "../Klass/Task";

describe('TaskList', ()=> {
    test('match snapshot', ()=> {
        const task1 = new Task({id: 'task1', text: 'Task1'})
        const task2 = new Task({id: 'task2', text: 'Task2'})
        taskStore.tasks = [task1, task2]

        const component = render(<TaskList/>).toJSON()
        expect(component).toMatchSnapshot()
    })

    test('match snapshot (empty list)', ()=> {
        const component = render(<TaskList/>).toJSON()
        expect(component).toMatchSnapshot()
    })
})
