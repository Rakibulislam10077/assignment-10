import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebese.init';

const Signin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='bg-orange-400 rounded-3xl px-4 py-2 font-bold text-white mx-auto block mt-4'>Google Sign in</button>
        </div>
    );
};

export default Signin;