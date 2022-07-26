import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {observer} from "mobx-react";
import Task from "../Klass/Task";
import styleStore from "../store/styleStore";
import {percent} from "csx";
import taskStore from "../store/taskStore";
import {useState} from "react";
import authService from "../service/authService";

interface TaskRowProps {
    task: Task
}

const TaskListRow = (props: TaskRowProps)=> {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <View style={styles.wrap}>
            <Pressable
                style={styles.textWrap}
                onPress={async ()=> {
                    const isAuthed = await authService.ensureIsAuthed()

                    if(!isAuthed) {
                        return
                    }

                    setIsEditing(true)
                }}
            >
                {isEditing ?
                <TextInput
                    style={styles.input}
                    autoFocus={true}
                    selectionColor={styleStore.palette.primary}
                    placeholderTextColor={styleStore.palette.lightGray}
                    placeholder={'Some simple note'}
                    maxLength={96}
                    onChangeText={(newText)=> {
                        const newTask = new Task({
                            ...props.task,
                            text: newText,
                        })
                        taskStore.updateTask(newTask)
                    }}
                    onBlur={()=> {
                        setIsEditing(false)
                    }}
                    value={props.task.text}
                />
                : <Text style={styles.text}>
                    {props.task.text}
                </Text>}
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={async ()=> {
                    const isAuthed = await authService.ensureIsAuthed()

                    if(!isAuthed) {
                        return
                    }

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
    input: {
        width: percent(100),
        height: percent(100),
        padding: 8,
        color: styleStore.palette.white,
        borderWidth: 1,
        borderColor: styleStore.palette.white,
    },
    button: {
        ...styleStore.centerRow,
        height: percent(100),
        paddingHorizontal: 24,
    },
    buttonText: {
        color: styleStore.palette.primary,
    },
})

export default observer(TaskListRow)
