import React from 'react'
import logo from '../images/routify.png'


export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start flex">
                <img className='w-10' src={logo} alt='routify logo' />
                <a className="btn btn-ghost normal-case text-xl">Routify</a>
            </div>
            <div className='navbar-center'>
                <label htmlFor="my-modal-6" className="btn btn-primary modal-button">Add Routine</label>
            </div>
            <div className='navbar-end'>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="avatar online placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <span>JO</span>
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
            {/*Add routine modal*/}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Add new routine</h3>
                    <form>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Routine Name?</span>
                                <span className="label-text-alt">keep it simple</span>
                            </label>
                            <input type="text" placeholder="Jogging, drink water, etc.." className="input input-bordered w-full" />
                        </div>
                        <div className='flex flex-row justify-between gap-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Group</span>
                                </label>
                                <select className="select select-bordered">
                                    <option disabled selected>Pick one</option>
                                    <option>Work</option>
                                    <option>Personal</option>
                                    <option>Events</option>
                                </select>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Time</span>
                                </label>
                                <input type="text" placeholder="under construction" className="input input-bordered w-full max-w-xs" disabled />
                            </div>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Yay!</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
