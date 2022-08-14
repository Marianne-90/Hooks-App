import { useReducer, useEffect } from "react";
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList.jsx';
import { TodoAdd } from './TodoAdd.jsx';


const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

  const [todos, dispach] = useReducer(todoReducer, initialState, init);

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

  
  return (
    <>
      <h3>TodoApp</h3>
      <h4>Total: {todos.length}, <small>
        pendientes : {todos.filter(e => e.done === false).length} </small>
      </h4>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos}  
            onDeleteTodo={ handleDeleteTodo } 
            onToggleTodo={handleToggleTodo}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd newTodo={onhandleNewTodo} />
        </div>

      </div>

    </>)
}