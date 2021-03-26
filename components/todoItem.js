import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={( ) => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
      padding: 15,
      margin: 5,
      borderRadius: 10,
      backgroundColor: '#ddd'
    }
  });