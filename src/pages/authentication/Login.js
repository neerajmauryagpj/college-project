
import * as React from 'react';
const Login = () => {

    return (
        <>
            <div className="container-fluid login-container">
                <div className="row h-100">
                    <div className="col-6 h-100 bg-primary text-white d-flex justify-content-center align-items-center">
                        <div className="text-center">
                            <img src="media/logo.svg" alt="" width="180" />
                            <h1 className="mt-3">Welcome Back!</h1>
                            <p className="mt-3">To keep connected with us please login with your personal info</p>
                        </div>
                    </div>
                    <div className="col-6 h-100 d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <h3 className='text-center text-uppercase mb-4'>Login</h3>
                            <div className='mb-4'>
                                <input type="text" className="form-control" placeholder="User Name" />
                            </div>
                            <div className='mb-4'>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className='mb-4'>
                                <input type="text" className="form-control" placeholder="Location" />
                            </div>
                            <div className='mb-4'>
                                <button type="submit" className='btn btn-primary w-100'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;
