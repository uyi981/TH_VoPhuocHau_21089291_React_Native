import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import { todoListState } from './atoms';

const STORAGE_KEY = '@todo_list';

const TodoApp = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [editingTodo, setEditingTodo] = useState(null); // Công việc đang được chỉnh sửa

  // Load danh sách từ AsyncStorage khi ứng dụng khởi chạy
  useEffect(() => {
    loadTodos();
  }, []);

  // Lưu danh sách vào AsyncStorage khi thay đổi
  useEffect(() => {
    saveTodos(todoList);
  }, [todoList]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu từ AsyncStorage:", error);
    }
  };

  const saveTodos = async (todos) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu vào AsyncStorage:", error);
    }
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = { id: Date.now(), text: newTodo, isComplete: false };
      setTodoList([...todoList, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setNewTodo(todo.text); // Đặt giá trị mới vào ô nhập liệu
  };

  const handleUpdateTodo = () => {
    if (editingTodo && newTodo.trim()) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: newTodo } : todo
        )
      );
      setEditingTodo(null); // Thoát khỏi chế độ chỉnh sửa
      setNewTodo('');
    }
  };

  const handleCancelEdit = () => {
    setEditingTodo(null); // Hủy bỏ chế độ chỉnh sửa
    setNewTodo(''); // Xóa giá trị trong ô nhập liệu
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleEditTodo(item)}>
            <Text style={styles.todoItem}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder={editingTodo ? "Edit your job" : "Input your job"}
      />
      {editingTodo ? (
        <View style={styles.editButtons}>
          <Button title="Update" onPress={handleUpdateTodo} />
          <Button title="Cancel" onPress={handleCancelEdit} color="red" />
        </View>
      ) : (
        <Button title="Add Job" onPress={handleAddTodo} />
      )}
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
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodoApp;
