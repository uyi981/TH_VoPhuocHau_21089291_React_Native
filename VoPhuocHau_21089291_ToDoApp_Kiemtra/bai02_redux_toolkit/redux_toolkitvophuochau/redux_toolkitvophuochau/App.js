// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import TodoApp from './src/TodoApp';

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
); 

export default App;
