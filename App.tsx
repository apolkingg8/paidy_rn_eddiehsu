import 'react-native-get-random-values'
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet} from 'react-native';
import {observer} from "mobx-react";
import AddTaskBar from "./Component/AddTaskBar";
import styleStore from "./store/styleStore";
import TaskList from "./Component/TaskList";

const App = () => {
    return (
        <SafeAreaView style={styles.wrap}>
            <StatusBar style="light"/>
            <AddTaskBar/>
            <TaskList/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: styleStore.palette.darkGray,
    },
})

export default observer(App)
