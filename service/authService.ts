import {makeAutoObservable} from "mobx";
import * as LocalAuthentication from 'expo-local-authentication';

export class AuthService {
    isAuthed: boolean = false

    doAuth = async ()=> {
        const authRes = await LocalAuthentication.authenticateAsync()
        this.isAuthed = authRes.success
    }

    ensureIsAuthed = async ()=> {
        if(this.isAuthed) {
            return true
        }

        try {
            return await this.doAuth()
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
