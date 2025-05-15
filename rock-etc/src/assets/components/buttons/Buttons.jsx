import './buttons.css'
import paper from '../../../rock-paper-scissors-master/images/icon-paper.svg'
import scissors from '../../../rock-paper-scissors-master/images/icon-scissors.svg'
import rock from '../../../rock-paper-scissors-master/images/icon-rock.svg'

export default function Buttons({play}) {

    return (
        <>

        <div className="div-content d-flex flex-column">

            <div className="background">

                <div className="row-1 d-flex">
                    <div id="paper" className="wrap-paper" onClick={play}>
                        <div id="paper" className="btn-paper">
                            <img id="paper" src={paper} alt="" />
                        </div>
                    </div>
                    <div id="scissors" className="wrap-scissors" onClick={play}>
                        <div id="scissors" className="btn-scissors">
                            <img id="scissors" src={scissors} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row-2 d-flex justify-content-center">
                    <div id="rock" className="wrap-rock" onClick={play}>
                        <div id="rock" className="btn-rock">
                            <img id="rock" src={rock} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </>
    )

}