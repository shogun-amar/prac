import React from 'react'
import { TodoInput } from "./todoinput";

export const TodoList = (props) => {
  return (
    <div>
        <ul>
            {props.listItems.map((item) => {
               return item
            })}
        </ul>
    </div>
  )
}
