import './score.css'
import logo from '../../../rock-paper-scissors-master/images/logo.svg'

export default function Score({score}) {
    return(
        <div className="div-score">

            <div className="score-logo">
                <img src={logo} alt="" srcset="" />
            </div>

            <div className="score-points">
                <div className="score-p1">
                    <p>SCORE</p>
                </div>
                <div className="score-p2">
                    <p>{score}</p>
                </div>
            </div>
        </div>
    )
}