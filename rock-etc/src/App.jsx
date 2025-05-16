import { useState } from 'react'
import './App.css'
import Score from './assets/components/score/Score'
import Buttons from './assets/components/buttons/Buttons'
import Fight from './assets/components/fight/Fight'
import Modal from './assets/components/modal/Modal'
import { motion } from 'framer-motion'
// On peut aisément ajouter des aimation via Framer Motion / Motion for React. Pour cela, on ajoute dans le return un motion component (écrit <motion.div>).


function App() {
  const [score, setScore] = useState(0)

  // On crée une variable d'état pour déterminer si on est en mode combat ou pas :
  const [inFight, isInFight] = useState(false)

  // Variable correspondant au choix du joueur :
  const [ident, setIdent] = useState("")

  // Variable corresondant au choix aléatoire de l'ordinateur :
  const [random, setRandom] = useState("")

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

      <div className="wrap-btns">

      {(!inFight) && (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
            >
            <Buttons play={play} />
          </motion.div>
      )}

      {(inFight) && (
          <motion.div
            key="fight"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Fight ident={ident} random={random} inFight={inFight} setRandom={setRandom} score={score} setScore={setScore} replay={replay} />
          </motion.div>
      )}

      </div>

      <Modal />

    </>
  )
}

export default App
