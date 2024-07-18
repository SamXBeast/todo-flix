import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      text: todo,
      timestamp: new Date().toLocaleString(),
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const toggleComplete = (indexToToggle) => {
    setTodos(todos.map((todo, index) =>
      index === indexToToggle ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <Router>
      <div className="bg-netflixBlack min-h-screen text-netflixWhite">
        <Navbar user={user} />
        <div className="container mx-auto p-4">
          {message && <div className="bg-green-500 p-2 rounded mb-4">{message}</div>}
          <Routes>
            <Route path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
              </>
            } />
            <Route path="/signup" element={<SignUp setMessage={setMessage} />} />
            <Route path="/signin" element={<SignIn setMessage={setMessage} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
