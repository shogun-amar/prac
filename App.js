import { useState } from 'react';
import './App.css';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function App() {
  const [list, setList] = useState([])
  const [todo, setTodo] = useState("")
  const [canEdit, setcanEdit] = useState(true)

  const handleChange = (event) => {
    setTodo(event.target.value);
  }
  
  const handleAddTodo = () =>{
    const newTodo = { todo: todo };
    setList([...list, newTodo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  const handleEdit = (index) => {
    setTodo(list[index])
    handleDelete(index)
  }

  return (
    <div className="App">
      <div>
        <h1> TodoInput </h1>
        <div>
            <input type="text" value= {todo} onChange={handleChange} />
        </div>
        {' '}
        <div className='d-grid gap-2'>
            <button className='btn btn-danger' onClick={handleAddTodo}>
                Add New Task
            </button>
        </div>
      </div>
      <div>
        <h2> Todo List </h2>
      </div>
      <div>
        <button className='btn btn-primary'> All </button>{' '}
        <button className='btn btn-primary'> Done </button>{' '}
        <button className='btn btn-primary'> Todo </button>
      </div>
      <div className='todo-list'>
          {list.map((item, index) => {
            return(
            <div key={index}>
              <div>
                <p>  {item.todo} </p> 
              </div>
              <div>
                <FaEdit onClick={() => handleEdit(index)} />{'    '}
                <FaTrash onClick={() => handleDelete(index)}/>
              </div>
            </div>)
          })}
        </div>
    </div>
  );
}

export default App;
