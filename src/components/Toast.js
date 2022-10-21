import React from 'react'

export default function Toast() {
    return (
        <div className="toast toast-end">
            <div className="alert bg-primary ">
                <div>
                    <span>Toast Placeholder - success</span>
                </div>
            </div>
            <div className="alert bg-secondary ">
                <div>
                    <span className='text-white'>Toast Placeholder - error</span>
                </div>
            </div>
        </div>
    )
}
