import React from 'react';

function TodoItem({ todo, index, deleteTodo, toggleComplete }) {
  return (
    <li className={`p-2 mb-2 rounded flex justify-between items-center ${todo.completed ? 'bg-green-500' : 'bg-netflixGray'}`}>
      <div>
        <p className={`${todo.completed ? 'line-through' : ''}`}>{todo.text}</p>
        <span className="text-sm text-netflixWhite">{todo.timestamp}</span>
      </div>
      <div>
        <button 
          onClick={() => toggleComplete(index)} 
          className={`mr-2 p-2 rounded text-netflixWhite ${todo.completed ? 'bg-yellow-500' : 'bg-green-500'}`}
        >
          {todo.completed ? 'Unmark' : 'Complete'}
        </button>
        <button 
          onClick={() => deleteTodo(index)} 
          className="bg-netflixRed p-2 rounded text-netflixWhite"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
