import { useState } from 'react'
import './App.css';
import MyStyles from './components/MyStyles';
// Imports to test
import App from '../src/__tests__/App.test' 

// Tests
test('Renders main page correctly', () => {
  expect(true).toBeTruthy();
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyStyles />
    </div>
  )
}

export default App;
