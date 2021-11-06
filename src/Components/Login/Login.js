import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { user, loginWithGoogle, loginWithEmail, signUpWithEmail, logout } = useAuth();
    const history = useHistory();
    const location = useLocation();

    return (
        <div>
            <button onClick={() => loginWithGoogle(history, location)}>Google Login</button>
            <button onClick={() => signUpWithEmail("alex@gmail.com", "alex@gmail.com", "Alex", history, location)}>Email SignUp</button>

            <button onClick={() => loginWithEmail("alex@gmail.com", "alex@gmail.com", history, location)}>Email Login</button>

            {user.email ? <button onClick={() => logout(history)}>Logout</button> : null}
            {user?.displayName}
        </div>
    );
};

export default Login;