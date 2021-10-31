import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    // getting data from useAuth
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();

    // using history & locatin for redirecting
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
        <div className='m-5'>
            <h1 style={{ fontSize: '35px', fontWeight: '600', margin: '20px' }}>Welcome To <span style={{ color: 'green', fontSize: '55px', fontWeight: '700', }}>Desh Travels!!</span></h1>
            <h3 style={{ fontSize: '35px', fontWeight: '600' }}>Please <span style={{ color: 'green' }}>Log in </span> to your <span style={{ color: 'green' }}>account</span></h3>
            <div className="login ">
                <button className='btn btn-danger m-3 p-2' onClick={handleGoogleLogin}>
                    Log in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;