import { useState } from 'react'
import './App.css'
import Score from './assets/components/score/Score'
import Buttons from './assets/components/buttons/Buttons'
import Fight from './assets/components/fight/Fight'


function App() {
  const [score, setScore] = useState(0)

  // On crée une variable d'état pour déterminer si on est en mode combat ou pas :
  const [inFight, isInFight] = useState(false)

  const [ident, setIdent] = useState()

  // Comptage des win pour le score :
  let win = () => {
    setScore((score) => score + 1)
  }

  // Comptage des défaites pour le score :
  let lose = () => {
    setScore((score) => score - 1)
  }

  // Fonction qui s'enclenche lorsque l'on clique sur un des btn pour jouer :
  let play = (e) => {
    if (!inFight) {
      isInFight(true)

      setIdent(e.target.id)

      console.log("en combat")
    }
    else {
      isInFight(false)
      console.log("pas en combat")
    }
  }

  return (
    <>
      <Score score={score} />

      {(!inFight) && (
        <Buttons play={play} />
      )}

      {(inFight) && (
        <Fight ident={ident} />
      )}

    </>
  )
}

export default App
