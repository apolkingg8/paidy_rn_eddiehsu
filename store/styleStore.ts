import {ViewStyle} from "react-native";
import {makeAutoObservable} from "mobx";

export class StyleStore {
    palette = {
        primary: '#b0e55a',
        white: '#f7f7f7',
        darkGray: '#2e2e2e',
        lightGray: '#959595',
    }

    centerRow: ViewStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new StyleStore()
