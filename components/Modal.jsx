import React from 'react'

export default function Modal({ id, specialties, handleSpecialtyChange }) {
    return (
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="modal-action justify-center">
                    {/* form */}
                    <form method="dialog">
                        <div className="form-control w-full mb-8">
                            <h1 className='text-center mb-10 font-semibold text-2xl'>Select Specialty</h1>
                            <ul className='grid grid-cols-3 gap-6'>
                                {
                                    specialties.map(each =>
                                        <button key={each.id} onClick={() => handleSpecialtyChange(each.name)} className='hover:text-blue-700 cursor-pointer w-fit mx-auto rounded-2xl text-center'
                                        >
                                            {each.icon} {each.name}
                                        </button>
                                    )
                                }
                            </ul>
                        </div>
                        {/* if there is a button in form, it will close the modal */}
                    </form>
                </div>
            </div>
        </dialog>
    )
}
