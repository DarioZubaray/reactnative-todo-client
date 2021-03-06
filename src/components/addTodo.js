import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Keyboard } from "react-native";
import moment from "moment";
import { toastAlert } from "../services/toastAlert";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState("");
    const changeHandler = (val) => {
        setText(val);
    };

    const addNewTodo = () => {
        console.log(moment().format("YYYY-MM-DDTHH:mm:ss.SSS"));
        if (text.length > 3) {
            const newTodo = {
                message: text,
                finished: false,
                datetime: moment().format("YYYY-MM-DDTHH:mm:ss.SSS"),
            };
            submitHandler(newTodo);
            setText("");
            Keyboard.dismiss();
        } else {
            toastAlert("Debe ingresar mas de 3 caracteres");
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                value={text}
                placeholder="New todo..."
                onChangeText={changeHandler}
            />

            <Button onPress={() => addNewTodo()} title="Add" color="coral" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
});
