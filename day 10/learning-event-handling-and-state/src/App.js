import { EventHandle } from './EventHandle'
import { LearningState } from './LearningState'
import { Counter } from './Counter'
import { StateTypeOfArray } from './StateTypeOfArray'

function App() {
  return (
    <div className="App">
      <p>-------------learning event handle-------------------</p>
      <EventHandle />

      <p>--------------learning state------------------</p>
      <LearningState />

      <p>-----------counter component using state---------------------</p>
      <Counter />

      <p>------------learning state type of array---------------------</p>
      <StateTypeOfArray />
    </div>
  );
}

export default App;
