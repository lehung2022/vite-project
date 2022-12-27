import { useState } from 'react'
import './App.css';
import Story from './components/Story';
// Imports to test


// Tests


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Story />
    </div>
  )
}

export default App;
