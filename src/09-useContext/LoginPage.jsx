import { useContext } from "react"
import {UserContext} from './context/UserContext.jsx'

export const LoginPage = () =>{
  const {user, setUser} = useContext(UserContext);

  return (
    <>
      <h4>Login Page</h4>
      <hr/>
    <pre>
      {JSON.stringify(user,null,3)}
    </pre>
<button className="btn" onClick={()=> setUser({id:123, name:'Marianne', email:'email@email.com'})}>
  Set user
</button>
      
    </>
  )
}