import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TextInput from '../components/TextInput';
import Checkbox from '../components/CheckBox';
import AddTaskButton from '../components/AddTaskButton';
import { theme } from '../core/theme';
import { useNavigation } from '@react-navigation/native';

const AddTaskScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    setTasks([...tasks, task]);
    setTask('');
    setError('');
  };

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color={theme.colors.primary} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Thêm Task</Text>
    </View>
  );

  const TaskItem = ({ item, index, handleDeleteTask }) => (
    <View style={styles.taskItem}>
      <Checkbox checked={false} />
      <Text style={styles.taskText}>{item}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(index)}>
        <Ionicons name="trash" size={20} color={theme.colors.error} />
      </TouchableOpacity>
    </View>
  );

  const InputContainer = () => (
    <View style={styles.inputContainer}>
      <View style={styles.inputWraper}>
      <TextInput
        label="Task"
        value={task}
        onChangeText={setTask}
        errorText={error}
        style={styles.input}
        labelStyle={styles.inputLabel}
      />
      </View>
      <AddTaskButton onPress={handleAddTask} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem item={item} index={index} handleDeleteTask={handleDeleteTask} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.taskList}
      />
      <InputContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.primary + '20', 
  },
  headerTitle: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  taskList: {
    paddingVertical: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskText: {
    flex: 1,
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  inputWrapper: {
    flex: 1, 
    marginRight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  inputLabel: {
    color: theme.colors.primary,
  },
});

export default AddTaskScreen;