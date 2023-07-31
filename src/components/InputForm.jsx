import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"

const InputForm = ({ addTodo }) => {
  const [input, setInput] = useState("")

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    addTodo(input)
    setInput("")
  }

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text"
          className="form-control"
          placeholder="Enter your task..."
          required
          autoFocus
          value={input}
          onChange={handleChange}
        />
        <button className="btn btn-primary"><AiOutlineArrowRight /></button>
      </div>
    </form>
  )
}

export default InputForm