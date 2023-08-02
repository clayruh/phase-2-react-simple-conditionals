import React, {useState} from 'react'
import PlanetFacts from "./PlanetFacts"
import PlanetImage from './PlanetImage'

export default function PlanetCard({planet}) {

  const [info, setInfo] = useState(true)

  function handleClick() {
    setInfo(!info)
  }

  return (
    <div className="card" onClick={handleClick}>
      {info ? <PlanetImage planet={planet}/> : <PlanetFacts planet={planet}/> }
    </div>
  )
}
