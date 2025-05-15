import './score.css'
import logo from '../../../rock-paper-scissors-master/images/logo.svg'

export default function Score() {
    return(
        <div className="div-score">

            <div className="score-logo">
                <img src={logo} alt="" srcset="" />
            </div>

            <div className="score-points">
                <p>SCORE</p>
                <div className="points">{}</div>
            </div>
        </div>
    )
}