import {useCounter} from '../hooks/useCounter.js'

export const CounterWithCustomHook = () => {

const {counter, increment, decrement, reset} = useCounter(0);
  
  return (
    <>
      <h3>Counter With Custom Hook: {counter}</h3>
      <hr />

      <button className="btn" onClick={()=>increment(2)}>+1</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={()=>decrement(2)}>-1</button>
      
    </>
  )
}