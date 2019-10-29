import React, { useState, useEffect } from 'react';
import './App.css';
import Clock from './Components/Clock';
import uuid from 'uuid/v4'

function App() {
  const [clocks, setClocks] = useState([])

  const addClock = () => {
    const clock = { id: uuid() }

    setClocks([...clocks, clock])
  }

  const removeClock = id => {
    const newClocks = clocks.filter(obj => obj.id !== id)

    setClocks(newClocks)
  }

  return (
    <div className="App">
      <div>
        <h1>Clocks!</h1>
        <button onClick={addClock}>Add new clock</button>
      </div>
      <div>
        {clocks.map(obj => (
          <ClockListItem
            key={obj.id}
            obj={obj}
            onRemove={removeClock}
          />
        ))}
      </div>
    </div>
  );
}

const ClockListItem = ({ obj, onRemove }) => {
  return (
    <div>
      <Clock />
      <button onClick={() => onRemove(obj.id)} >Remove Clock</button>
    </div>
  )
}

export default App;
