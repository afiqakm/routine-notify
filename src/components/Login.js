import React from 'react'

function Login() {
    return (
        <div className='flex flex-col items-center'>
            <form className="flex flex-col gap-4 w-80 my-8" action="#">
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="name@test.com" className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="********" className="input input-bordered w-full max-w-xs" required />
                </div>
                <button className="btn btn-primary">Button</button>
            </form>
        </div>
    )
}

export default Login