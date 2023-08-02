import React, {useState} from 'react'
import StarField from '../visual-effects/StarField'
import PlanetsContainer from './PlanetsContainer'
import planets from '../data/planets'

function App() {

  const [mood, setMood] = useState(false)

  function toggleMood() {
    setMood((mood) => !mood)
  }

  return (
    <div className={mood ? "App" : "App light-mode" }>

      {/* You won't have to touch StarField, it's just here for visual things */}
      <StarField />

      <button onClick={toggleMood}>{mood ? "WAKE UP!!" : "Go the F*** to Sleep"}</button>

      <PlanetsContainer planets={planets} />

    </div>
  );
}

export default App;
