import {v4} from "uuid";

export default class Task {
    id: string = v4()
    text: string = ''

    constructor(props: Partial<Task>) {
        Object.assign(this, props)
    }
}
