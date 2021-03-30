import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AddTodo from "../components/addTodo";
import TodoItem from "../components/todoItem";
import { toastAlert } from "../services/toastAlert";
import { getAll, addNew, deleteById } from "../services/todoFetch";

export const HomeScreen = ({ route }) => {
    const [todos, setTodos] = useState([]);
    const token = route.params.token;

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAll(token);
            if (response?.todos) {
                setTodos(response.todos);
            } else {
                toastAlert(response.message);
            }
        };

        fetchData();
    }, []);

    const pressHandler = async (key) => {
        const response = await deleteById(key, token);
        toastAlert(response.message);
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== key);
        });
    };

    const submitHandler = async (newTodo) => {
        const response = await addNew(newTodo, token);
        if (response.id) {
            setTodos((prevTodos) => {
                return [response, ...prevTodos];
            });
        } else {
            toastAlert(response.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <AddTodo submitHandler={submitHandler} />
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler} />
                        )}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
        backgroundColor: "#fff",
    },
});
