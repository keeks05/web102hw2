import { useState } from 'react'
import { cityFactList } from './data'
import './App.css'

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < cityFactList.length - 1;

  function handlePrevClick() {
     setIndex(index - 1);
  }
  function handleNextClick() {
     setIndex(index + 1);
  }
  function handleCardClick() {
     setFlipped(!flipped)
  }


  let fact = cityFactList[index];
  let color = "#283618"
  if (fact.difficulty === "m") {
   color = "#e9c46a"
  } else if (fact.difficulty === "e") {
     color = "#2a9d8f"
  } else if (fact.difficulty === "h") {
     color = "#e76f51"
  }
  return (
    <div className="App">
      <div className="header">
         <h1>Learn About The State of Washington!!</h1>
         <h4>Click through to get familar with Washigton State</h4>
         <p className="counter">{index} out of {cityFactList.length - 1}  cards</p>
      </div>
      <div className="flip-card" onClick={handleCardClick}>
         <div className="flip-card-inner">
            <div className="flip-card-front" style={{"background-color": color}}>
               <p>{flipped ? fact.answer : fact.prompt}</p>
            </div>
            <div className="flip-card-back"> 
            </div>
         </div>
      </div>
      <div className="movement">
         <button onClick={handlePrevClick} disabled={!hasPrev}>Back</button>
         <button onClick={handleNextClick} disabled={!hasNext}>Next</button>
      </div>
    </div>
  )
}

export default App
