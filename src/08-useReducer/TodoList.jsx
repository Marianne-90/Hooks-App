import {TodoItem} from './TodoItem.jsx'

export const TodoList = ({ todos=[] }) => {
  
  return (
    <ul className="list-group">

      {
        todos.map(todos => (
          <TodoItem key={todos.id} todos={todos}/>
        ))
      }

    </ul>
  )
}