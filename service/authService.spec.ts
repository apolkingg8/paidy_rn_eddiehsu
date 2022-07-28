import authService, {AuthService} from "./authService";

describe('authService', ()=> {
    test('constructor()', ()=> {
        expect(authService).toBeInstanceOf(AuthService)
    })
})
