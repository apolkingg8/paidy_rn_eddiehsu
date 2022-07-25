import {StatusBar} from 'expo-status-bar';
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {useState} from "react";
import taskStore from "./store/taskStore";
import Task from "./Klass/Task";
import {observer} from "mobx-react";

const App = () => {
    const [text, onChangeText] = useState('Text');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Button
                title={'Add'}
                onPress={()=> {
                    const newTask = new Task({
                        text: text,
                    })
                    taskStore.addTask(newTask)
                }}
            />
            <ScrollView>
                {taskStore.tasks.map((task)=> {

                    return (
                        <Text style={styles.text}>
                            {task.text}
                        </Text>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e2e2e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
})

export default observer(App)
