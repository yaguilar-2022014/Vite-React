import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function aumentar() {
    if (count + 1 > 200) {
      return 0
    }
    setCount(count + 1)
  }

  function disminmuir() {
    if (count - 1 < -200) {
      return 0
    }
    setCount(count - 1)
  }

  function aumentar8() {
    limitpos()
    setCount(count + 8)
  }

  function disminuir8() {
    limitneg()
    setCount(count - 8)
  }

  function limitpos() {
    if (count + 8 > 200) {
      next
    }
  }

  function limitneg() {
    if (count - 8 < -200) {
      next()
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={aumentar}>
          Aumentar
        </button>
        <div>
          <button onClick={aumentar8}>+8</button>
          <p>Contador: {count}</p>

          <button onClick={disminuir8}>-8</button>
        </div>
        <button onClick={disminmuir}>Disminuir</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
