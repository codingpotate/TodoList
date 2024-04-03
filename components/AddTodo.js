import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function AddTodo({ route, navigation }) {
  const [todoText, setTodoText] = useState('');
  const backgroundColor = route?.params?.backgroundColor || '#fff'; // Added null checks

  const addTodo = (text) => {
    if (todoText.trim()) {
      route.params.addTodo(todoText);
      navigation.goBack();
    }
  };
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
        placeholder="Enter Todo"
      />
      <TouchableOpacity style={[styles.addButton, styles.addTodoButton]} onPress={addTodo}>
        <Text style={styles.addButtonTitle}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginVertical: 10,
    width: '80%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#bebebe',
    padding: 10,
    fontSize: 18,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  addTodoButton: {
    backgroundColor: '#89eeb6',
  },
  addButtonTitle: {
    fontSize: 20,
    color: '#fff',
  },
});
