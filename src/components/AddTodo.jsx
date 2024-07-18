import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-grow p-2 rounded-l bg-netflixGray border-none text-netflixWhite focus:outline-none"
        placeholder="Add a new task..."
      />
      <button type="submit" className="bg-netflixRed p-2 rounded-r">
        Add
      </button>
    </form>
  );
}

export default AddTodo;
