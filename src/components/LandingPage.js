/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../images/routify.png'

export default function LandingPage() {
    return (
        <div>

            {/*Navbar*/}

            <div className="navbar bg-base-100 p-5">
                <div className="navbar-start">
                    <img className='w-10 mx-2' src={logo} alt='routify logo' />
                    <a className="btn btn-ghost normal-case text-xl">Routify</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary" href="/Login">Login</a>
                </div>
            </div>

            {/*Hero*/}

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center flex flex-wrap flex-auto px-0">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold py-10">Always forgot to do your routine?</h1>
                        <p className="py-6">Routify can help remind your routine through notification! </p>
                        <a className="btn btn-primary" href="/Signup">Get Started</a>
                    </div>

                    {/*phone mockup*/}

                    <div className='flex py-10'>
                        <div className="mockup-phone border-primary">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 flex-col gap-5">
                                    <img className='w-20 py-5' src={logo} alt='routify logo' />
                                    <div>
                                        <div className="flex flex-row alert shadow-lg ">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                <div>
                                                    <h3 className="font-bold">Routine notification!</h3>
                                                    <div className="text-xs">You have 1 unread message</div>
                                                </div>
                                            </div>
                                            <div className="flex-none">
                                                <button className=" btn btn-primary btn-sm">open</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/}

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Afiq Akmal © 2022</p>
                </div>
            </footer>
        </div>
    )
}
