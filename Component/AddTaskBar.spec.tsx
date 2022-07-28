import {render} from "@testing-library/react-native";
import AddTaskBar from "./AddTaskBar";

describe('AddTaskBar', ()=> {
    test('match snapshot', ()=> {
        const component = render(<AddTaskBar/>).toJSON()
        expect(component).toMatchSnapshot()
    })
})
