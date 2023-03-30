import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebese.init';
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirm = (e) => {
        setConfirm(e.target.value)
    }

    if (user) {
        navigate('/home')
    }





    const handleSubmitAndRegisterBtn = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='mt-12'>
            <div className="w-full max-w-lg mx-auto">
                <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            onBlur={handleName}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            onBlur={handleEmail}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="johndoe@example.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            onBlur={handlePassword}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="*********"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            onChange={handleConfirm}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password"
                            type="password"
                            placeholder="*********"
                            required
                        />
                    </div>
                    <div className='flex'>
                        <input onClick={() => setAgree(!agree)} className='mr-2' type="checkbox" />
                        <p className={agree ? 'text-green-500' : 'text-red-500'} > Accept terms and conditions </p>
                    </div>
                    <div className='mb-3'>
                        <Link className='text-orange-400' to='/login'>Already have an account</Link>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            disabled={!agree}
                            onClick={handleSubmitAndRegisterBtn}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div >

        </div >
    );
};

export default Register;