// TodoApp.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, editTodo } from './actions';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState('');

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo.id);
    setEditText(todo.content);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(editTodo(editingTodo, editText));
      setEditingTodo(null);
      setEditText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Todo App</Text>
      
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEditTodo(item)}>
            {editingTodo === item.id ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.input}
                  value={editText}
                  onChangeText={setEditText}
                  placeholder="Edit your job"
                />
                <Button title="Save" onPress={handleSaveEdit} />
                <Button title="Cancel" onPress={() => setEditingTodo(null)} />
              </View>
            ) : (
              <Text style={styles.todoItem}>{item.content}</Text>
            )}
          </TouchableOpacity>
        )}
      />
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Input your job"
      />
      <Button title="Add Job" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default TodoApp;
