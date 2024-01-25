import { Signal, signal } from '@preact/signals-react'
import { useSignals } from '@preact/signals-react/runtime'
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
  <button onClick={() => ++model.value}>
    count is {model}
  </button>
)

const App = () => {
  useSignals()

  return (
    <div className="card">
      <CounterButton model={counter} />
    </div>
  )
}

export default App
