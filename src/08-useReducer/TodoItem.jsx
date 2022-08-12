export const TodoItem = ({ todos }) => {

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className='align-self-center'>{todos.description}</span>
      <button className="btn delete btn-danger ">borrar</button>
    </li>
  )
}