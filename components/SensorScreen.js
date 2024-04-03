import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Accelerometer, Magnetometer } from 'expo-sensors';

export default function SensorScreen({ route }) {
  const [accelerometerData, setAccelerometerData] = useState({});
  const [magnetometerData, setMagnetometerData] = useState({});
  const backgroundColor = route.params?.backgroundColor || '#fff'; // Use backgroundColor from route params if available

  useEffect(() => {
    _subscribe();

    return () => {
      _unsubscribe();
    };
  }, []);

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(1000);
    Magnetometer.setUpdateInterval(1000);

    Accelerometer.addListener((accelerometerData) => {
      setAccelerometerData(accelerometerData);
    });

    Magnetometer.addListener((magnetometerData) => {
      setMagnetometerData(magnetometerData);
    });
  };

  const _unsubscribe = () => {
    Accelerometer.removeAllListeners();
    Magnetometer.removeAllListeners();
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.sensorFrame}>
        <Text style={styles.sensorTitle}>Accelerometer Data:</Text>
        <Text style={styles.sensorData}>{JSON.stringify(accelerometerData)}</Text>
      </View>
      <View style={styles.sensorFrame}>
        <Text style={styles.sensorTitle}>Magnetometer Data:</Text>
        <Text style={styles.sensorData}>{JSON.stringify(magnetometerData)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sensorFrame: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  sensorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sensorData: {
    fontSize: 16,
  },
});
