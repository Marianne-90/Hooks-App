import { useState, useEffect } from "react";
import {Message} from './Message.jsx';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: ''
  })

  const { username, email } = formState;

  const onInputChange = ({ target }) => {

    const { name, value } = target;
    setFormState({ ...formState, [name]: value })
  };

  return (
    <div className='pink'>
      <h3> Simple Form </h3>
      <hr />
      <code>try writing 'exist' and check console</code>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"  
        value={username}
        onChange={onInputChange}
      />
      {
        (username ==='exist') && <Message />
      }
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com "
        name="email"
        value={email}
        onChange={onInputChange}
      />
      
    </div>
  )
}