import React from 'react'
import logo from '../images/routify.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='flex flex-col items-center gap-5'>
            
            <div className="mt-10">
                <img className='w-20 pt-10' src={logo} alt='routify logo' />
            </div>
            <div className="w-full max-w-sm mt-10">
                <div className="alert alert-error shadow-lg">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>This is error placeholder.</span>
                    </div>
                </div>
            </div>
            <form className="flex flex-col gap-4 w-full max-w-sm my-8" action="/Dashboard">

                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="name@test.com" className="input input-bordered  w-full max-w-sm"/>
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="********" className="input input-bordered w-full max-w-sm"/>
                </div>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="********" className="input input-bordered w-full max-w-sm"/>
                </div>
                
                <Link to="/dashboard" className="btn btn-primary">Sign up</Link>
                <p>Already have an account? <Link to="/login" className="link link-secondary" >Login here!</Link></p>
            </form>
            
        </div>
  )
}
