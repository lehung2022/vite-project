import { useState } from 'react'
import './App.css';
import MyStyles from './components/MyStyles';
// Imports to test


// Tests


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyStyles />
    </div>
  )
}

export default App;
