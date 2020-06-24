import React, { useEffect, useState } from 'react'

const Todo = () => {

	const [todos, setTodos] = useState([])
	
	const getTodos = async () => {
    try {
			const response = await fetch("http://localhost:5000/todos")
			const jsonData = await response.json()

			setTodos(jsonData);
    } catch(err) {
      console.err(err.message);
    }
	}

	const deleteTodo = async (id) => {
		try {
			const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
				method:"DELETE"
			});

			setTodos(todos.filter(todo => todo.todo_id !== id))
		} catch(err) {
		  console.err(err.message);
		}
	}
	
  useEffect(() => {
     getTodos();  
	},[])

	return (
		<div className="todo-list-container">
			<table className="todo-list">
				<tbody>
				{todos.map(todo => (
						<tr key={todo.todo_id}>
						  <td className="todo-item">{todo.description}</td>
							<td><button className="delete-btn" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
						</tr>
				))}
				</tbody>
			</table>
		</div>
	)
}

export default Todo
