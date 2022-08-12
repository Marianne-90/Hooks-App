import { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement.jsx'

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(() => {
    setCounter((e) => e + 1)
  }, []);


  return (
    <>
      <h3>useCallback Hook: {counter}</h3>
      <hr />
      <code>This is use to only charge the involve function once<br/></code>
      <ShowIncrement increment={incrementFather} />
    </>
  )
}