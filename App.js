import { useState } from 'react';
import './App.css';
import { TodoInput } from './todoinput';
// import { TodoList } from "./todolist";

function App() {
  const [listItems, setListItems] = useState([])

  const handleChange = (event) => {
    setListItems(event.target.value);
  }
  
  const handleAddItem = () =>{
    const newListItem = listItems.push(listItems)
    setListItems(newListItem)
  }

  return (
    <div className="App">
      <div>
        <h1> TodoInput </h1>
        <TodoInput />
        {/* <TodoList /> */}
      </div>
    </div>
  );
}

export default App;
