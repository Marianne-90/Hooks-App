
import { useReducer, useEffect } from "react";
import { todoReducer } from '../08-useReducer/todoReducer.js';



const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
   const [todos, dispach] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const onhandleNewTodo = (todo) => {
    event.preventDefault();
    const action = {
      type: '[TODO]Add Todo',
      payload: todo
    }
    todo && dispach(action)
  }

  const handleDeleteTodo = (id)=> {
    dispach({
      type: '[TODO]Remove Todo',
      payload: id})
  }

    const handleToggleTodo = (id)=> {
      console.log(id)
      dispach({
      type: '[TODO]Toggle Todo',
      payload: id})
    }

  return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,
        onhandleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}