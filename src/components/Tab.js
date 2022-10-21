/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Tab() {
    return (
        <div className='flex flex-col h-screen w-full m-auto lg:w-3/4'>
            <div className='tab-nav flex flex-row gap-2  '>
                <div className="tabs tabs-boxed w-fit ">
                    <a className="tab tab-lg tab-active">Group 1</a>
                    <a className="tab tab-lg ">Group 2</a>
                    <a className="tab tab-lg">Group 3</a>
                </div>
                <button className="btn btn-primary btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"></path></svg>
                </button>
            </div>

            <div className='tab-content bg-gray-100 p-5 rounded-lg min-h-full'>
                <div className='flex flex-col w-full py-5 '>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="flex flex-row flex-wrap card-body justify-between">
                            <h2 className="card-title">Water the flower</h2>

                            <div className="card-actions">
                                <button className="btn btn-primary">edit</button>
                                <button className="btn btn-circle btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full py-5 '>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="flex flex-row flex-wrap card-body justify-between">
                            <h2 className="card-title">Water the flower</h2>

                            <div className="card-actions">
                                <button className="btn btn-primary">edit</button>
                                <button className="btn btn-circle btn-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
