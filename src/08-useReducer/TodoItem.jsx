export const TodoItem = ({ todos, onDeleteTodo, onToggleTodo }) => {

  return (
    <li className={`list-group-item d-flex justify-content-between ${ (todos.done) ? 'green':'' }`}
      onClick={()=>onToggleTodo(todos.id)}>
      <span className={`align-self-center ${ (todos.done) ? 'text-decoration-line-through':'' }`} 
        >
         {todos.description}
      </span>
      <button 
        className="btn delete btn-danger"
        onClick={()=>onDeleteTodo(todos.id)}>
        borrar</button>
    </li>
  )
}