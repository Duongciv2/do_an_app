// AddTaskButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme';

const AddTaskButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Ionicons name="add-circle" size={40} color={theme.colors.primary} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
  },
});

export default AddTaskButton;