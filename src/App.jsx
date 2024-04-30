import './App.css'
import Answers from './assets/Answers.js';


import EightBall from "./EightBall.jsx";


function App() {

  return (
    <>
      <h1>Magic Eight Ball</h1>
      <EightBall answers={Answers}/>
    </>
  )
}


export default App
