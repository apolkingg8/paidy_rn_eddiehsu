import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";
import {observer} from "mobx-react";
import Task from "../Klass/Task";
import taskStore from "../store/taskStore";
import {percent} from "csx";
import styleStore from "../store/styleStore";

const AddTaskBar = () => {
    const [text, setText] = useState('')

    return (
        <View style={styles.wrap}>
            <TextInput
                style={styles.input}
                selectionColor={styleStore.palette.primary}
                placeholderTextColor={styleStore.palette.lightGray}
                placeholder={'Some simple note'}
                maxLength={96}
                onChangeText={(newText)=> {
                    setText(newText)
                }}
                value={text}
            />
            <Pressable
                style={styles.button}
                onPress={()=> {
                    if(text.length === 0) {
                        return
                    }

                    const newTask = new Task({
                        text: text,
                    })
                    taskStore.addTask(newTask)
                    setText('')
                }}
            >
                <Text>ADD</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        ...styleStore.centerRow,
        width: percent(100),
        height: 40,
        marginTop: 48,
        marginBottom: 24,
        paddingHorizontal: 24,
    },
    input: {
        flex: 1,
        height: percent(100),
        padding: 8,
        color: styleStore.palette.white,
        borderWidth: 1,
        borderColor: styleStore.palette.white,
    },
    button: {
        ...styleStore.centerRow,
        height: percent(100),
        marginLeft: 8,
        paddingHorizontal: 24,
        backgroundColor: styleStore.palette.primary,
    },
    buttonText: {
        color: styleStore.palette.white,
    },
})

export default observer(AddTaskBar)
