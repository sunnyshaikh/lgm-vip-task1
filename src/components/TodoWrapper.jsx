import React, { useEffect, useState } from 'react'
import InputForm from "./InputForm"
import TodoBody from "./TodoBody"

const TodoWrapper = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  function addTodo(input) {
    const id = Math.floor(Math.random() * 1000)
    const task = {
      id,
      title: input,
      isChecked: false
    }

    setTodos(prev => [task, ...prev])
  }

  function completeTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo))
  }

  function deleteTodo(id) {
    const filter = todos.filter(todo => todo.id !== id)

    setTodos(filter)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-wrapper">
      <h1 className="todo-wrapper-title">Todo List</h1>
      <InputForm addTodo={addTodo} />
      <TodoBody todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  )
}

export default TodoWrapper