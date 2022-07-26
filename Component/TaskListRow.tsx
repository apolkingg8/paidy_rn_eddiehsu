import {Pressable, StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react";
import Task from "../Klass/Task";
import styleStore from "../store/styleStore";
import {percent} from "csx";
import taskStore from "../store/taskStore";

interface TaskRowProps {
    task: Task
}

const TaskListRow = (props: TaskRowProps)=> {
    return (
        <View style={styles.wrap}>
            <View style={styles.textWrap}>
                <Text style={styles.text}>
                    {props.task.text}
                </Text>
            </View>
            <Pressable
                style={styles.button}
                onPress={()=> {
                    taskStore.removeTaskById(props.task.id)
                }}
            >
                <Text style={styles.buttonText}>✕</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        ...styleStore.centerRow,
        width: percent(100),
        minHeight: 40,
        marginVertical: 8,
        paddingHorizontal: 24,
    },
    textWrap: {
        ...styleStore.centerRow,
        justifyContent: "flex-start",
        flex: 1,
        height: percent(100),
    },
    text: {
        color: styleStore.palette.white,
    },
    button: {
        ...styleStore.centerRow,
        width: 40,
        height: percent(100),
    },
    buttonText: {
        color: styleStore.palette.primary,
    },
})

export default observer(TaskListRow)
