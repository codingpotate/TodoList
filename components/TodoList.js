// TodoList.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function TodoList({ backgroundColor, setBackgroundColor }) {
  const [todoList, setTodoList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => setTodoList(response.data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const removeTodo = (id) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  const navigateToAddTodo = () => {
    navigation.navigate('AddTodo', { addTodo });
  };

  const navigateToSensorScreen = () => {
    navigation.navigate('SensorScreen');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings', {
      backgroundColor: backgroundColor,
      onChangeColor: setBackgroundColor, // Pass the function to change the color
    });
  };

  const addTodo = (text) => {
    setTodoList((prevList) => [...prevList, { id: (prevList.length + 1).toString(), title: text, completed: false }]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoItem todo={item} removeTodo={removeTodo} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={[styles.addButton, styles.addTodoButton]} onPress={navigateToAddTodo}>
        <Text style={styles.addButtonTitle}>Add Todo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.addButton, styles.sensorScreenButton]} onPress={navigateToSensorScreen}>
        <Text style={styles.addButtonTitle}>Sensor Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.addButton, styles.settingsButton]} onPress={navigateToSettings}>
        <Text style={styles.addButtonTitle}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    width: '80%',
  },
  addTodoButton: {
    backgroundColor: '#89eeb6',
  },
  sensorScreenButton: {
    backgroundColor: '#a8d0e6',
  },
  settingsButton: {
    backgroundColor: '#3498db',
  },
  addButtonTitle: {
    fontSize: 20,
    color: '#fff',
  },
});
