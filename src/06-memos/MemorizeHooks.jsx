import { useState, useMemo } from 'react';
import { useCounter } from '../hooks';
import { GiDiplodocus } from "react-icons/gi";

const heavyStuff = (interationNumber = 100) => {

  for (let i = 0; i < interationNumber; i++) {
    console.log('ahí vamos...')
  }
  return `${interationNumber} total interations`;
};


export const MemorizeHooks = () => {

  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(400);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (<div className='pink'>
    <h3>Counter: <small>{counter}</small></h3>
    <hr />
    <h4>{memorizedValue}</h4>
    <code>Crazzy heavy Stuff at console (check the console to see it on action )</code><br />
    <button className="btn" onClick={() => increment(1)}>+1</button>
    <hr />

    <div className="flexChiken">
      <button className="btn" onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
      {show && <p className=' chiken'><GiDiplodocus /></p>}
    </div>

  </div>)
}
