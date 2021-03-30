import React from "react";
import moment from "moment";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.message}>{item.message}</Text>
            <Text style={styles.datetime}>
                {moment(item.datetime, "YYYY-MM-DDTHH:mm:ss").fromNow()}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    message: {
        padding: 15,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#ddd",
    },
    datetime: {
        fontSize: 15,
        textAlign: "right",
    },
});
