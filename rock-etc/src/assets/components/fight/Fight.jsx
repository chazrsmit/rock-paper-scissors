import './fight.css'
import paper from '../../../rock-paper-scissors-master/images/icon-paper.svg'
import scissors from '../../../rock-paper-scissors-master/images/icon-scissors.svg'
import rock from '../../../rock-paper-scissors-master/images/icon-rock.svg'
import React, { useEffect, useState } from "react";

export default function Fight({ ident, random, inFight, setRandom }) {

    const [isLoading, setIsLoading] = useState(true)
    // pour l'utilisation d'un settimeout, obligation d'utiliser un useeffect (en effet, en le mettant dans le return, ça peut créer des bugs.)
    useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Cleanup in case the component unmounts before timeout
    return () => clearTimeout(timer);
    }, []); // Run only once when the component mounts

    // Une fois qu'un combat est lancé, on va générer un random number correspondant à l'un des 3 choix possibles (0: paper, 1: scissors, 2: rock).
    useEffect(() => {
    const timer2 = setTimeout(() => {
        if (inFight === true) {
        setRandom(random = Math.floor(Math.random()*2))
        console.log(random)
        }
    }, 4000);
    return () => clearTimeout(timer2);
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

                {/* Chargement/loading (disparait après 4sec grâce au setTimeout plus haut) */}

                {isLoading && (
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        {/* <div></div> */}
                    </div>
                )}

                <div className="house-choice d-flex flex-column gap-5 align-items-center">
                    <div className="title-choice">
                        <p className="text-white">THE HOUSE PICKED</p>
                    </div>

                    {/* Disparait après 4sec grâce au setTimeOut */}
                    {isLoading &&
                    <div className="empty-choice">
                    </div>
                    }

                    {/* Apparition après 4sec grâce à un set time out */}
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
        </>
    )
}