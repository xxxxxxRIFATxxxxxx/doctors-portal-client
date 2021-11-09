import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import './Login.css';

const Login = () => {
    const { user, loginWithGoogle, loginWithEmail, signUpWithEmail, logout } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        loginWithEmail(data.email, data.password, history, location);
    };

    return (
        // <div>
        //     <button onClick={() => loginWithGoogle(history, location)}>Google Login</button>
        //     <button onClick={() => signUpWithEmail("alex@gmail.com", "alex@gmail.com", "Alex", history, location)}>Email SignUp</button>

        //     <button onClick={() => loginWithEmail("alex@gmail.com", "alex@gmail.com", history, location)}>Email Login</button>

        //     {user.email ? <button onClick={() => logout(history)}>Logout</button> : null}
        //     {user?.displayName}
        // </div>

        <div className="login container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col d-flex align-items-center justify-content-center">
                    <form className="w-75">
                        <div className="mb-3">
                            <label className="form-label form-text mb-1">Email address</label>
                            <input type="email" className="form-control border-top-0 border-start-0 border-end-0 w-100" />
                        </div>

                        <div className="mb-1">
                            <label className="form-label form-text mb-1">Password</label>
                            <input type="password" className="form-control border-top-0 border-start-0 border-end-0 w-100" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label form-text" for="exampleCheck1">
                                <NavLink to="/" className="text-danger text-decoration-none">Forgot your password?</NavLink>
                            </label>
                        </div>

                        <button type="submit" className="btn btn-info w-100 text-white py-2">Sign in</button>
                    </form>
                </div>

                <div className="col text-center">
                    <img className="img-fluid" src="https://i.ibb.co/NjPnpJC/login.png" alt="doctors vector" />
                </div>
            </div>
        </div>
    );
};

export default Login;