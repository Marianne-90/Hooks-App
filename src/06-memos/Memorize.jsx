import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small.jsx';
import { GiChicken } from "react-icons/gi";

export const Memorize = () => {

  const [show, setShow] = useState(true);

  const { counter, increment } = useCounter(10);

  return (<div >
    <h3>Counter: <Small value={counter} /></h3>
    <hr />
    <code>The idea of memo is to renderice just once de Small component (check the console to see it on action )</code><br />
    <button className="btn" onClick={() => increment(1)}>+1</button> 
    <hr/>
    
    <div className="flexChiken">
      <button className="btn" onClick={() => setShow(!show)}>
        Show / Hide {JSON.stringify(show)}
      </button>
      {show && <p className=' chiken'><GiChicken /></p>}
    </div>
    
  </div>)
}
