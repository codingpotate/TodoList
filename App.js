// App.js
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SensorScreen from './components/SensorScreen';
import Settings from './components/Settings';

const Stack = createStackNavigator();

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TodoList"
          component={() => <TodoList backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />}
          options={{
            headerStyle: {
              backgroundColor,
            },
          }}
        />
        <Stack.Screen
          name="AddTodo"
          component={AddTodo}
          options={{
            headerStyle: {
              backgroundColor,
            },
          }}
        />
        <Stack.Screen
          name="SensorScreen"
          component={SensorScreen}
          options={{
            headerStyle: {
              backgroundColor,
            },
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          initialParams={{ backgroundColor, onChangeColor: setBackgroundColor }}
          options={{
            headerStyle: {
              backgroundColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  addButton: {
    backgroundColor: '#89eeb6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  addButtonTitle: {
    fontSize: 20,
    color: '#fff',
  },
});
