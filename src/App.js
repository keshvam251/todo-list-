import './App.css';
import Footer from './mycomponents/Footer';
import Header from "./mycomponents/Header";
import { Todos } from './mycomponents/Todos';
import { useState, useEffect } from 'react';
import About from './mycomponents/about';
import AddTodo from './mycomponents/AddTodo';
import { Route, Routes } from "react-router-dom";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(inittodo);

  // Keep localStorage updated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const ondelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding the todo", title, desc);

    const mytodo = {
      sno: Date.now(), // unique id
      title,
      desc,
    };

    setTodos([...todos, mytodo]);
  };

  const homeContent = (
    <>
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} ondelete={ondelete} />
    </>
  );

  return (
    <>
      <Header title="My Todo List" searchBar={false} />

      <Routes>
        <Route path="/" element={homeContent} />
        <Route path="/Home" element={homeContent} />
        <Route path="/About" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
