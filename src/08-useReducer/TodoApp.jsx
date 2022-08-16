
import { TodoList } from './TodoList.jsx';
import { TodoAdd } from './TodoAdd.jsx';
import { useTodos }  from '../hooks';



export const TodoApp = () => {

  const { todos, handleDeleteTodo, todosCount, pendingTodosCount, handleToggleTodo, onhandleNewTodo } = useTodos();

  
  return (
    <>
      <h3>TodoApp</h3>
      <h4>Total: {todosCount}, <small>
        pendientes : {pendingTodosCount} </small>
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