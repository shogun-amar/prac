import { useState } from 'react';
import './App.css';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      todo: todo,
      isCompleted: false,
    };
    setList([...list, newTodo]);
    setTodo("");
  };

  const handleDelete = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const handleEdit = (index) => {
    setTodo(list[index].todo);
    handleDelete(index);
  };

  const handleCheck = (index, event) => {
    const updatedList = [...list];
    updatedList[index].isCompleted = !updatedList[index].isCompleted;
    setList(updatedList);

    if (updatedList[index].isCompleted) {
      event.target.parentNode.style.setProperty('text-decoration', 'line-through');
    } else {
      event.target.parentNode.style.removeProperty('text-decoration');
    }
  };

  const filterList = () => {
    switch (filter) {
      case "done":
        return list.filter((item) => item.isCompleted === true);
      case "todo":
        return list.filter((item) => item.isCompleted === false);
      default:
        return list;
    }
  };

  const handleDeleteAllTasks = () => {
    const deletedList = []
    setList(deletedList)
  }

  const handleDeleteDoneTasks = () => {
    const deletedDoneList = list.filter((item) => item.isCompleted === false);
    setList(deletedDoneList)
  }


  return (
    <div className="App">
      <div>
        <h1> TodoInput </h1>
        <div>
          <input type="text" value={todo} onChange={handleChange} />
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
        <button className='btn btn-primary' onClick={() => setFilter("all")}> All </button>{' '}
        <button className='btn btn-primary' onClick={() => setFilter("done")}> Done </button>{' '}
        <button className='btn btn-primary' onClick={() => setFilter("todo")}> Todo </button>
      </div>
      <div className='todo-list'>
        {filterList().map((item, index) => {
          return (
            <div key={index}>
              <div>
                <p>
                  {item.todo} 
                  <input type="checkbox" onChange={(event) => handleCheck(index, event)} />{' '}
                  <FaEdit onClick={() => handleEdit(index)} />{'    '}
                  <FaTrash onClick={() => handleDelete(index)} />
                </p> 
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className='btn btn-danger' onClick={handleDeleteDoneTasks}> Delete Done Tasks</button>
        <button className='btn btn-danger' onClick={handleDeleteAllTasks}> Delete All Tasks </button>
      </div>
    </div>
  );
}

export default App;
