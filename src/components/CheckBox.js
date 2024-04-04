// Checkbox.js
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../core/theme';

const Checkbox = ({ checked, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
      {checked && (
        <Ionicons name="checkmark" size={16} color={theme.colors.surface} /> // Đổi màu icon sang màu nền
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkbox: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 4,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    backgroundColor: theme.colors.primary, // Đổi màu nền khi checked
  },
});

export default Checkbox;
