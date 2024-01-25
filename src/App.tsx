import { Signal, signal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//
// Application Layer
//
const counter = signal(0)

//
// Presentation Layer
//
type Props = { model: Signal<number> }

const CounterButton: React.FC<Props> = ({ model }) => (
  <button onClick={() => ++model.value }>
    count is {model}
  </button>
)

const App = () => {
  useSignals()

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
      <h1>Vite + React + SignalsX</h1>
      <div className="card">
        <CounterButton model={counter} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
