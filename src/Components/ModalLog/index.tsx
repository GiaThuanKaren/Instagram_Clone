import React from 'react'
interface ModalLogInf {
    onClickInsidePopUp?: Function,
    onClickOutsidePopUp?: Function,
    onCancel?: Function

}
function ModalLog({
    onClickInsidePopUp, onClickOutsidePopUp,
    onCancel
}: ModalLogInf) {
    return (
        <>
            <div onClick={() => {
                onCancel && onCancel()

                console.log("Out Side Pop Up")
            }} className="fixed z-[100] left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-80 py-10">
                <div onClick={(e) => {
                    e.stopPropagation()
                    console.log("Inside Popup")
                }} className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-[#262626]">
                    <div className="w-full">
                        <div className=" my-20 ">

                            <div className="space-y-4 w-full">
                                <button className="p-3 bg-[#262626] text-lg  text-red-500  w-full font-semibold ">
                                    Delete
                                </button>
                                <button onClick={() => {
                                    onCancel && onCancel()
                                }} className="p-3 bg-[#262626] text-lg  w-full text-white font-semibold">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}


function ModalLogPostAction() {
    return <>
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
            <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
                <div className="w-full">
                    <div className="m-8 my-20 max-w-[400px] mx-auto">
                        <div className="mb-8">
                            <h1 className="mb-4 text-3xl font-extrabold">
                                Turn on notifications
                            </h1>
                            <p className="text-gray-600">
                                Get the most out of Twitter by staying up to date with what's
                                happening.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <button className="p-3 bg-black rounded-full text-white w-full font-semibold">
                                Allow notifications
                            </button>
                            <button className="p-3 bg-white border rounded-full w-full font-semibold">
                                Skip for now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export {
    ModalLog,
    ModalLogPostAction
}