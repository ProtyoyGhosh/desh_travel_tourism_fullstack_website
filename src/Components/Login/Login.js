import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <h1>Login here</h1>
            <button onClick={handleGoogleLogin}>Google SignIn</button>
        </div>
    );
};

export default Login;