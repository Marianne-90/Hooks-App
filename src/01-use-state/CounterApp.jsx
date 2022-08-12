import { useState } from "react";



export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <div className='pink'>
      <h3>Counter App with useState</h3>
      <h4>Counter: {counter1} </h4>
      <h4>Counter: {counter2} </h4>
      <h4>Counter: {counter3} </h4>
      <hr /> 
      <code>Click on de buttons to manage the diferent states</code><br/>
      <button className="btn" onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}>+1</button>
      <button className="btn" onClick={() => setCounter({ ...state, counter2: counter2 + 2 })}>+2</button>
            <button className="btn" onClick={() => setCounter({ ...state, counter3: counter3 + 3 })}>+3</button>
    </div>
  )
};