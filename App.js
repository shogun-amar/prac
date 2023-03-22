import { useState } from 'react';
import './App.css';
import { TodoInput } from './todoinput';
import { TodoList } from "./todolist";

function App() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([item])


  const handleChange = (event) => {
    setItem(event.target.value);
  }
  
  const handleAddItem = () =>{
    const newItem = list.push({item})
    setList(newItem)
  }

  return (
    <div className="App">
      <div>
        <h1> TodoInput </h1>
        <TodoInput 
          handleAddItem = {handleAddItem}
          handleChange = {handleChange}
          item = {item}
          list = {list}
        />
        <TodoList 
          item = {item}
          list = {list}
        />
      </div>
    </div>
  );
}

export default App;
