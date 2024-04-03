// Settings.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Settings = ({ route, navigation }) => {
    const { backgroundColor, onChangeColor } = route.params;
  
    const [selectedColor, setSelectedColor] = useState(backgroundColor);
  
    const applyColorChange = () => {
      onChangeColor(selectedColor);
      navigation.goBack();
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Background Color</Text>
      <TouchableOpacity
        style={[styles.colorOption, { backgroundColor: '#fff' }]}
        onPress={() => setSelectedColor('#fff')}
      />
      <TouchableOpacity
        style={[styles.colorOption, { backgroundColor: '#f0f0f0' }]}
        onPress={() => setSelectedColor('#f0f0f0')}
      />
      <TouchableOpacity
        style={[styles.colorOption, { backgroundColor: '#a8d0e6' }]}
        onPress={() => setSelectedColor('#a8d0e6')}
      />
      {/* Add more color options as needed */}
      <TouchableOpacity style={styles.applyButton} onPress={applyColorChange}>
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginVertical: 10,
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: '#89eeb6',
    borderRadius: 10,
    padding: 15,
  },
  applyButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Settings;
