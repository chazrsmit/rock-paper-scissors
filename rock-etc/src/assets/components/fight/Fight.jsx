import './fight.css'
import paper from '../../../rock-paper-scissors-master/images/icon-paper.svg'
import scissors from '../../../rock-paper-scissors-master/images/icon-scissors.svg'
import rock from '../../../rock-paper-scissors-master/images/icon-rock.svg'
import React, { useEffect, useState } from "react";

export default function Fight({ ident, random, inFight, setRandom, score, setScore }) {

    // Pour gérer la "barre" de chargement
    const [isLoading, setIsLoading] = useState(true)

    // Pour afficher le message "You win / You lose"
    const [result, setResult] = useState("")

    // Pour l'utilisation d'un setTimeOut, obligation d'utiliser un useEffect (en effet, en le mettant dans le return, ça peut créer des bugs.)
    useEffect(() => {
        const timer = setTimeout(() => {

        // Arrêter l'effet de chargement après 4sec grâce à ce switch on/off (true/false).
        setIsLoading(false);
        
        // Une fois qu'un combat est lancé, on va générer un random number correspondant à l'un des 3 choix possibles (0: paper, 1: scissors, 2: rock).
        if (inFight === true) {
            setRandom(random = Math.floor(Math.random()*3))
            console.log(random)
        }

        // Calcul des points suite au résultat du combat :
        // On le met dans le setTimeOut pour éviter des bugs.
        if (ident === "paper") {
            if (random === 0) {
                console.log("draw")
                setResult("draw")
            }
            else if (random === 1) {
                console.log("you lose")
                setScore(score = score - 1)
                setResult("lose")
            }
            else {
                console.log("you win")
                setScore(score = score + 1)
                setResult("win")
            }
        }

        if (ident === "scissors") {
            if (random === 0) {
                console.log("you win")
                setScore(score = score + 1)
                setResult("win")
            }
            else if (random === 1) {
                console.log("draw")
                setResult("draw")
            }
            else {
                console.log("you lose")
                setScore(score = score - 1)
                setResult("lose")
            }
        }

        if (ident === "rock") {
            if (random === 0) {
                console.log("you lose")
                setScore(score = score - 1)
                setResult("lose")
            }
            else if (random === 1) {
                console.log("you win")
                setScore(score = score + 1)
                setResult("win")
            }
            else {
                console.log("draw")
                setResult("draw")
            }
        }

        }, 3000);

        // Cleanup (recommandé)
        return () => clearTimeout(timer);

    }, []); 

    return(

        <>
            <div className="div-fight">

                <div className="player-choice d-flex flex-column gap-5 align-items-center">
                    <div className="title-choice">
                        <p className="text-white">YOU PICKED</p>
                    </div>

                    {ident === "paper" && 
                        <div id="paper" className="wrap-paper bis">
                            <div className="btn-paper bis">
                                <img src={paper} alt="" />
                            </div>
                        </div>
                    }

                    {ident === "scissors" && 
                        <div id="scissors" className="wrap-scissors bis">
                            <div id="scissors" className="btn-scissors bis">
                                <img id="scissors" src={scissors} alt="" />
                            </div>
                        </div>
                    }

                    {ident === "rock" && 
                        <div id="rock" className="wrap-rock bis">
                            <div id="rock" className="btn-rock bis">
                                <img id="rock" src={rock} alt="" />
                            </div>
                        </div>
                    }

                </div>

                {/* Sur ordis */}    
                
                <div className="div-milieu col-2">

                    {isLoading && (
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    )}

                    {result === "win" &&
                        <h4>YOU WIN</h4>
                    }
                    {result === "lose" &&
                        <h4>YOU LOSE</h4>
                    }
                    {result === "draw" &&
                        <h4>DRAW</h4>
                    }

                    {!isLoading && 
                        <button>Play again?</button>
                    }

                </div>


                <div className="house-choice d-flex flex-column gap-5 align-items-center">
                    <div className="title-choice">
                        <p className="text-white">THE HOUSE PICKED</p>
                    </div>

                    {/* Disparait après 3sec grâce au setTimeOut */}
                    {isLoading &&
                    <div className="empty-choice">
                    </div>
                    }

                    {/* Apparition après 3sec grâce à un set time out */}
                    {random === 0 &&
                        <div id="paper" className="wrap-paper bis">
                            <div className="btn-paper bis">
                                <img src={paper} alt="" />
                            </div>
                        </div>
                    }
                    {random === 1 &&
                        <div id="scissors" className="wrap-scissors bis">
                            <div id="scissors" className="btn-scissors bis">
                                <img id="scissors" src={scissors} alt="" />
                            </div>
                        </div>
                    }

                    {random === 2 &&
                        <div id="rock" className="wrap-rock bis">
                            <div id="rock" className="btn-rock bis">
                                <img id="rock" src={rock} alt="" />
                            </div>
                        </div>
                    }

                </div>

            </div>

            <div className="div-fight2">

                {/* Sur tablettes et téléphones */}
                <div className="div-milieu2 col-3">

                    {isLoading && (
                        <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            {/* <div></div> */}
                        </div>
                    )}

                    {/* Remplacé ensuite par le résultat après 3 sec */}
                    {result === "win" &&
                        <h4>YOU WIN</h4>
                    }
                    {result === "lose" &&
                        <h4>YOU LOSE</h4>
                    }
                    {result === "draw" &&
                        <h4>DRAW</h4>
                    }

                    {!isLoading && 
                        <button>Play again?</button>
                    }

                </div>
            </div>
        </>
    )
}