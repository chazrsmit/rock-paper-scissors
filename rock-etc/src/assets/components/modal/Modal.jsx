import './modal.css'
import rules from '../../../rock-paper-scissors-master/images/image-rules.svg'

export default function Modal() {

    return (
        <>
            <>
  {/* Button trigger modal */}
<div className="wrap-modal">
    <button
        type="button"
        className="btn-modal"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
    >
        Rules
    </button>
</div>
    {/* Modal */}
    <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

                <div className="modal-header border-0">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Rules
                    </h1>
                    <button
                        type="button"
                        className="btn-close first"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>

                <div className="modal-body">
                    <img id="img1" src={rules} alt="" />
                </div>

                <div className="modal-footer">
                    <button
                    type="button"
                    className="btn-close second"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    />
                </div>
            </div>
            </div>
        </div>
    </>

        </>
    )
}