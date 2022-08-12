import { useRef } from "react"



export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }

  return (<>
    <h3>Focus Screen</h3>
    <hr />
    <code>basically the main purpose is to maintain a ref to an item</code>
    <input
      ref={inputRef}
      className="form-control w-50 mt-"
      type='text'
      placeholder="Ingrese su nombre"
    />
    <button className="btn mt-2" onClick={onClick}>
      set focus
    </button>

  </>)
}