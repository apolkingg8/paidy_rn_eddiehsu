import styleStore, {StyleStore} from "./styleStore";

describe('styleStore', ()=> {
    test('constructor()', ()=> {
        expect(styleStore).toBeInstanceOf(StyleStore)
    })
})
