import './buttons.css'
import paper from '../../../rock-paper-scissors-master/images/icon-paper.svg'
import scissors from '../../../rock-paper-scissors-master/images/icon-scissors.svg'
import rock from '../../../rock-paper-scissors-master/images/icon-rock.svg'

export default function Buttons() {

    return (
        <>

        <div className="div-content d-flex flex-column border">

            <div className="background border">

                <div className="row-1 d-flex">
                    <div className="wrap-paper">
                        <div className="btn-paper">
                            <img src={paper} alt="" />
                        </div>
                    </div>
                    <div className="wrap-scissors">
                        <div className="btn-scissors">
                            <img src={scissors} alt="" />
                        </div>
                    </div>
                </div>

                <div className="row-2 d-flex justify-content-center">
                    <div className="wrap-rock">
                        <div className="btn-rock">
                            <img src={rock} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </>
    )

}