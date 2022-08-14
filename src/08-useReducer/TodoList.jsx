import {TodoItem} from './TodoItem.jsx'

export const TodoList = ({ todos=[], onDeleteTodo, onToggleTodo }) => {

  
  
  return (
    <ul className="list-group">

      {
        todos.map(todos => (
          <TodoItem key={todos.id} 
            todos={todos} 
            onDeleteTodo={onDeleteTodo} 
            onToggleTodo={onToggleTodo}/>
        ))
      }

    </ul>
  )
}