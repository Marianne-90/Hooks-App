import { useForm } from '../hooks/useForm.js';

export const SimpleFormWhithCustomHook = () => {


  const { formState, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  });

  const { username, email, password } = formState;

  return (
    <div >
      <h3> Simple Form Whith Custom Hook </h3>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com "
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      
      <button className='btn mt-2' onClick={onResetForm}>Borrar</button>

    </div>
  )
}