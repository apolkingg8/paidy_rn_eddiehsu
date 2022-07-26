import {makeAutoObservable} from "mobx";
import * as LocalAuthentication from 'expo-local-authentication';

export class AuthService {
    isAuthed: boolean = false

    doAuth = async ()=> {
        const authRes = await LocalAuthentication.authenticateAsync()
        this.isAuthed = authRes.success
    }

    ensureIsAuthed = async (): Promise<boolean> => {
        if(this.isAuthed) {
            return true
        }

        try {
            await this.doAuth()
            return this.isAuthed
        } catch (err) {
            alert(err)
            return false
        }
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new AuthService()
