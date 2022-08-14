import { useState } from "react";


export const TodoAdd = ({newTodo}) => {

const [input, setinput] = useState({desc:''});
const { desc } = input;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setinput({ ...input, [name]: value })
  };

  const addList =()=>{
    if (desc.length<1){return}
  return{
    id: new Date().getTime() + 100,
    description: desc,
    done: false,
  }
  }
  
  return (
    <form>

      <input
        type='text'
        placeholder="Que hay que hacer"
        name='desc'
        value={desc}
        className="form-control"
        onChange={onInputChange}
      >
      </input>

      <button
        className="btn mt-1"
        type="submit"
        onClick={()=>newTodo(addList())}
      >
        Agregar
      </button>

    </form>)
}