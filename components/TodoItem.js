import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({ todo, removeTodo }) {
  const [isRemoveVisible, setIsRemoveVisible] = useState(false);

  const handlePress = () => {
    if (isRemoveVisible) {
      removeTodo(todo.id);
    } else {
      setIsRemoveVisible(true);
    }
  };

  return (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={handlePress}
      onLongPress={() => setIsRemoveVisible(true)}
    >
      <Text style={styles.todoText}>{todo.title}</Text>
      {isRemoveVisible && (
        <TouchableOpacity onPress={() => removeTodo(todo.id)}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bebebe',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
  },
  todoText: {
    fontSize: 18,
  },
  removeButton: {
    color: 'red',
  },
});
