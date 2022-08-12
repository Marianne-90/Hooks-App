import { useReducer } from "react";
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList.jsx';
import { TodoAdd } from './TodoAdd.jsx';
const initialState = [
  {
    id: new Date().getTime(),
    description: 'Robar una vaca',
    done: false,
  },
  {
    id: new Date().getTime() + 100,
    description: 'Encender la nave',
    done: false,
  }
]

export const TodoApp = () => {

  const [todos, dispach] = useReducer(todoReducer, initialState)

  const onhandleNewTodo = (todo) => {
    event.preventDefault();
    console.log(todo)
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
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd newTodo={onhandleNewTodo}/>
        </div>

      </div>

    </>)
}