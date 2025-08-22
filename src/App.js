
import './App.css';
import Footer from './mycomponents/Footer'
import Header from "./mycomponents/Header";
import {Todos} from './mycomponents/Todos'
import { useState } from 'react';
import About from './mycomponents/about'
import AddTodo from './mycomponents/AddTodo';


import {
  Route,
  Routes,
} from "react-router-dom"

  

function App() {
  const [todos, setTodos] = useState([]);
    let inittodo;
      if(localStorage.getItem("todos")===null){
        inittodo=[];
      }
      else{
        inittodo=JSON.parse( localStorage.getItem("todos"))
      }
  
  const ondelete = (todo)=>{
    console.log("i am on delete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  
    const addTodo=(title,desc)=>{
      console.log("i am adding the todo",title,desc)
      let sno;
      console.log(todos);
      if(todos.length==0){
        sno=0;
      }else {
        sno = todos[todos.length-1].sno+1;
      }
      console.log(sno,"sno -46")

      const mytodo ={
        sno:sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos,mytodo])
      console.log(mytodo);
      
      localStorage.setItem("todos",JSON.stringify(todos))
    }
     


 
  return (
    <>
    <Header title ="my todo list" searchBar={false} />

    <Routes>
      <Route path="/Home" element={<><AddTodo addTodo={addTodo}  /> <Todos todos={todos} ondelete={ondelete} /></>} />
      <Route path="/About" element={<About />} />
    </Routes>

    <Footer/>

    </>
  );
}

export default App;
