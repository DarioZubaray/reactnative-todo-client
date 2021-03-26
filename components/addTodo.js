import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Keyboard  } from 'react-native';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');
    const changeHandler = (val) => {
        setText(val)
    }

    const addNewTodo = () => {
        submitHandler(text);
        setText('');
        Keyboard.dismiss();
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                value={text}
                placeholder="New todo..."
                onChangeText={changeHandler} />

            <Button onPress={() => addNewTodo()} title="Add" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})