import Task from "../Klass/Task";
import {render} from "@testing-library/react-native";
import TaskListRow from "./TaskListRow";

describe('TaskListRow', ()=> {
    test('match snapshot', ()=> {
        const task1 = new Task({id: 'task1', text: 'Task1'})
        const component = render(<TaskListRow task={task1}/>).toJSON()
        expect(component).toMatchSnapshot()
    })
})
