import { useState } from 'react'
import './App.css'
import Score from './assets/components/score/Score'
import Buttons from './assets/components/buttons/Buttons'
import Fight from './assets/components/fight/Fight'


function App() {
  const [score, setScore] = useState(0)

  // On crée une variable d'état pour déterminer si on est en mode combat ou pas :
  const [inFight, isInFight] = useState(false)

  // Variable correspondant au choix du joueur :
  const [ident, setIdent] = useState("")

  // Variable corresondant au choix aléatoire de l'ordinateur :
  const [random, setRandom] = useState("")

  // Comptage des win pour le score :
  // let win = () => {
  //   setScore((score) => score + 1)
  // }

  // Comptage des défaites pour le score :
  // let lose = () => {
  //   setScore((score) => score - 1)
  // }

  // Fonction qui s'enclenche lorsque l'on clique sur un des btn pour jouer :
  let play = (e) => {

    if (!inFight) {
      isInFight(true)

      // Lorsque le joueur va cliquer sur l'un des boutons, on va changer l'état de la variable ident qui, via l'id du bouton, va stocker le choix du joueur.
      setIdent(e.target.id)

      console.log("en combat")
    }
    else {
      isInFight(false)
      console.log("pas en combat")
    }
  }

  // Fonction pour rejouer :

  let replay = () => {

    if (inFight) {
      isInFight(false)
    }

    setRandom()

  }

  return (
    <>
      <div className="wrap-score">
        <Score score={score} />
      </div>

      {(!inFight) && (
        <Buttons play={play} />
      )}

      {(inFight) && (
        <Fight ident={ident} random={random} inFight={inFight} setRandom={setRandom} score={score} setScore={setScore} replay={replay} />
      )}

    </>
  )
}

export default App
