import React from 'react'
import { MdDelete } from "react-icons/md";


type DeleteModalProps = {
    open: boolean,
    onClose: () => void,
    onConfirm: () => void,
}

const DeleteModal = ({ open, onClose, onConfirm }: DeleteModalProps) => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog open={open} onClose={onClose} id="my_modal_1" className="modal modal-open">
                <div className="modal-box">
                    <div className='flex flex-col items-center gap-y-0'>
                        <MdDelete style={{ height: 200, width: 150, color: 'red' }} />
                        <h3 className="font-bold text-lg">Heads up — this will be permanently deleted!</h3>
                        <p className="py-4">This action can’t be undone!</p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={onConfirm} className="btn">Confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default DeleteModal
