import React, { useState } from 'react'

const AddTodo = () => {

	const [description, setDescription] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
    try {
      const body = { description }
			const response = await fetch("http://localhost:5000/todos", {
				method: "POST",
				headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
			})

			window.location = "/";

    } catch(err) {
      console.err(err.message);
    }  
	}
	
	return (
		<div>
			<form className="input-form" onSubmit={handleSubmit}>
				<input type="text" 
							 className="new-todo" 
							 placeholder="Enter Todo" 
							 value={description} 
							 onChange={e => {e.preventDefault(); setDescription(e.target.value)}} 
				/>
				<button className="submit-btn">Add</button>
			</form>				
		</div>
	)
}

export default AddTodo
