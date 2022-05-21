import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    if (user) {
       
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-blod">Login</h2>
                   
                    <div className="divider">OR</div>
                    <button
                     onClick={() => signInWithGoogle()}
                      className="btn btn-outline ">
                           Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;