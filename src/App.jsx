import './App.css'
import { CounterApp } from './01-use-state/CounterApp.jsx';
import { CounterWithCustomHook } from './01-use-state/CounterWithCustomHook.jsx';
import { SimpleForm } from './02-use-effect/SimpleForm.jsx';
import { SimpleFormWhithCustomHook } from './02-use-effect/SimpleFormWhithCustomHook.jsx';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './04-use-ref/FocusScreen.jsx';
import { LayOut } from './05-use-layout-effect/LayOut.jsx';
import { Memorize } from './06-memos/Memorize.jsx';
import { MemorizeHooks } from './06-memos/MemorizeHooks.jsx';
import { CallBackHook } from './06-memos/CallBackHook.jsx';
import { Padre } from './07-tarea-memo/Padre.jsx';
import {TodoApp} from './08-useReducer/TodoApp.jsx';
import {MainApp} from './09-useContext/MainApp.jsx';


import { BrowserRouter } from 'react-router-dom';

import { GiFishingHook } from "react-icons/gi";
import { Cover } from './Cover.jsx'
import { AppIndex } from './AppIndex.jsx'
import { useState } from 'react';

export default function App() {

  const [display, setDisplay] = useState('')

  const handleDisplay = (display) => {
    setDisplay(display);
  }

  return (
    <>
      <div className='main-grid'>

        <div className='navegation-barr'>
          <h1>
            <GiFishingHook /> <br /> Hook App
          </h1>
          <h5>{display}</h5>
          <AppIndex
            index={['useState', 'useEffect', 'hookExamples', 'useRef', 'useLayoutEffect', 'memos', 'memosExample','useReducer', 'useContext']}
            display={handleDisplay}
            active={display}
          />
        </div>
        <div className='content'>

          {display === '' && <Cover />}
          {display === 'useState' && <>  <CounterApp /> <CounterWithCustomHook /> </>}
          {display === 'useEffect' && <> <SimpleForm /> <SimpleFormWhithCustomHook /> </>}
          {display === 'hookExamples' && <MultipleCustomHooks />}
          {display === 'useRef' && <> <FocusScreen /> </>}
          {display === 'useLayoutEffect' && <> <LayOut /> </>}
          {display === 'memos' && <> <Memorize /> <MemorizeHooks /> <CallBackHook /></>}
          {display === 'memosExample' && <> <Padre /> </>}
          {display === 'useReducer' && <> <TodoApp /> </>}
          {display === 'useContext' && <>  <BrowserRouter> <MainApp />  </BrowserRouter> </>}
        </div>

      </div>
    </>
  )
}
