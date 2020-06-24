import React from 'react';
import './App.css';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

const App = () => {
  return (
    <div>
			<Header/>
			<AddTodo/>
			<Todo/>
    </div>
  );
}

export default App;
