import React from 'react'

export const TodoInput = (props) => {
  return (
    <div>
        <h1> TodoInput </h1>
        <div>
            <input type="text" value={props.listItems} onChange={props.handleChange} />
        </div>
        <div>
            <button className='btn btn-danger' onClick={props.handleAddItem}>
                Add New Task
            </button>
        </div>
        
    </div>
  )
}
