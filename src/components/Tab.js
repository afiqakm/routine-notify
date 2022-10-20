/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Tab() {
    return (
        <div className='flex flex-col h-screen w-full m-auto lg:w-3/4'>
            <div className="tabs tabs-boxed w-fit">
                <a className="tab tab-active">Group 1</a>
                <a className="tab">Group 2</a>
                <a className="tab">Group 3</a>
            </div>
            <div className='flex flex-col w-full py-5 '>
                <div className="card w-full bg-base-100 shadow-xl">
                    <div className="flex flex-row flex-wrap card-body">
                        <h2 className="card-title">Water the flower</h2>
                        
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
