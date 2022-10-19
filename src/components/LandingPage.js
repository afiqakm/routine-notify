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
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/*footer*/}

            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Afiq Akmal - Copyright © 2022</p>
                </div>
            </footer>
        </div>
    )
}
