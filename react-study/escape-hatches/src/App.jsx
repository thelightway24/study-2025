import { useRef, useState } from 'react'
import './App.css'
import Counter from './components/Referencing-Ref'
import Form from './components/Manipulating-the-DOM'
import MyInput from './components/Input-Components-With-Ref'

function App() {
  const [count, setCount] = useState(0)
  let myInputRef = useRef(null)
  function clickRefFocus() {
    myInputRef.current.focus();
  }
  return (
    <>
      <p>Ref로 값 참조하기</p>
      <Counter/>

      <p>Ref로 DOM 조작하기 </p>
      <Form/>
      <p>컴포넌트로 Ref 보내서 제어</p>
      <MyInput ref={myInputRef}/>
      <button onClick={clickRefFocus}>
        Click me!
      </button>
    </>
  )
}

export default App
