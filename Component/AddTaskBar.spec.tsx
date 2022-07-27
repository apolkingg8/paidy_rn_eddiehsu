import {render} from "@testing-library/react-native";
import AddTaskBar from "./AddTaskBar";

jest.mock('expo-local-authentication')

describe('AddTaskBar', ()=> {
    test('render', ()=> {
        const component = render(<AddTaskBar/>).toJSON()
        expect(component).toMatchSnapshot()
    })
})
