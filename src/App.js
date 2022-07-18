import './App.css'
import { useState } from 'react'
import MainMenu from './components/MainMenu'
import CreateACharacter from './components/CreateACharacter'

function App() {
  // This syntax is called JSX = JavaScript XML

  // useState is a function that returns an array of two elements
  // returns a state variable and a function
  // to update it
  // TERNARY OPERATOR:
  // (condition) ? return this if true : return this if false
  // <Home />  ... const Home = {html: [], change: () => {}}
  const [screen, setScreen] = useState('main')
  
  return(
    <div>
      {
        (screen === 'main') ? <MainMenu setScreen={setScreen} /> : <CreateACharacter />
      }
    </div>
  );
}

export default App;