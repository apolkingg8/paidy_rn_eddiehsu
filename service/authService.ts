import {makeAutoObservable, reaction} from "mobx";
import * as LocalAuthentication from 'expo-local-authentication';

export class AuthService {
    isAuthed: boolean = false

    setAuthStatus = (isAuthed: boolean)=> {
        this.isAuthed = isAuthed
    }

    doAuth = async ()=> {
        const authRes = await LocalAuthentication.authenticateAsync()
        this.setAuthStatus(authRes.success)
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

        // just for test
        reaction(()=> {
            return this.isAuthed
        }, ()=> {
            if(this.isAuthed) {
                setTimeout(()=> {
                    this.setAuthStatus(false)
                }, 60 * 1000)
            }
        })
    }
}

export default new AuthService()
