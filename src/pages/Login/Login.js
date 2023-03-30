import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebese.init';
import Signin from '../Signin/Signin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleSubmitAndLoginBtn = (e) => {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/home')
    }
    const forgetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Please check your email ')
        }
        else {
            toast('Please enter your email address.!')
        }
    }

    return (
        <div className='mt-12'>
            <div className="w-full max-w-md mx-auto">
                <form onSubmit={handleSubmitAndLoginBtn} className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            ref={emailRef}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="johndoe@example.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                ref={passwordRef}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
                                id="password"
                                type="password"
                                placeholder="*********"
                            />
                            <button
                                className="absolute inset-y-0 right-0 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                <svg
                                    className="h-6 w-6 text-gray-700"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    ></path>
                                    <path
                                        d="M2 12s3-4.5 10-4.5 10 4.5 10 4.5-3 4.5-10 4.5S2 12 2 12z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <Link to='/register' className='text-blue-400'>Create new account</Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleSubmitAndLoginBtn}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Log In
                        </button>
                        <Link
                            onClick={forgetPassword}
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <Signin></Signin>
                </form>
                <ToastContainer />

            </div>

        </div>
    );
};

export default Login;