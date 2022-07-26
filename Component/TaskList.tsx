import {ScrollView, StyleSheet} from "react-native";
import {observer} from "mobx-react";
import taskStore from "../store/taskStore";
import TaskRow from "./TaskListRow";

const TaskList = ()=> {
    return (
        <ScrollView style={styles.wrap}>
            {taskStore.tasks.map((task)=> {
                return (
                    <TaskRow
                        key={task.id}
                        task={task}
                    />
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrap: {

    },
})

export default observer(TaskList)
