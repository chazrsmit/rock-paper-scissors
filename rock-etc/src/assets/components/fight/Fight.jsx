import './fight.css'
import paper from '../../../rock-paper-scissors-master/images/icon-paper.svg'
import scissors from '../../../rock-paper-scissors-master/images/icon-scissors.svg'
import rock from '../../../rock-paper-scissors-master/images/icon-rock.svg'
import React, { useEffect, useState } from "react";

export default function Fight({ ident }) {

    const [isLoading, setIsLoading] = useState(true)


    return(

        <>
            <div className="div-fight">

                <div className="player-choice d-flex flex-column gap-5 align-items-center">
                    <div className="title-choice">
                        <p className="text-white">YOU PICKED</p>
                    </div>

                    {ident === "paper" && (
                        <div id="paper" className="wrap-paper bis">
                            <div className="btn-paper bis">
                                <img src={paper} alt="" />
                            </div>
                        </div>
                    )}

                    {ident === "scissors" && (
                        <div id="scissors" className="wrap-scissors bis">
                            <div id="scissors" className="btn-scissors bis">
                                <img id="scissors" src={scissors} alt="" />
                            </div>
                        </div>
                    )}

                    {ident === "rock" && (
                        <div id="rock" className="wrap-rock bis">
                            <div id="rock" className="btn-rock bis">
                                <img id="rock" src={rock} alt="" />
                            </div>
                        </div>
                    )}

                </div>

                {isLoading && (
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                )}

                <div className="house-choice d-flex flex-column gap-5 align-items-center">
                    <div className="title-choice">
                        <p className="text-white">THE HOUSE PICKED</p>
                    </div>
                    <div className="empty-choice">
                    </div>
                </div>

            </div>
        </>
    )
}