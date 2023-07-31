import React from 'react'
import { BsCheck2 } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"

const TodoBody = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <div className="todo-body">
      {
        todos.map(todo => (
          <div className="todo" key={todo.id}>
            <p className={`${todo.isChecked && "completed"} todo-task`}>{todo.title}</p>
            <div className="button-group">
              <button className="btn btn-success todo-check" onClick={() => completeTodo(todo.id)}>
                <BsCheck2 />
              </button>
              <button className="btn btn-danger todo-delete" onClick={() => deleteTodo(todo.id)}>
                <AiOutlineDelete />
              </button>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default TodoBody