import React from 'react';
import { Link } from 'react-router-dom';
import trainer from '../../images/trainer.png';

const Trainer = () => {
    return (
        <div className='mt-12'>
            <div className="max-w-sm mx-auto bg-orange-400 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={trainer} alt='Gym trainer' />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Name: Alex joe</div>
                        <Link to='/contact' className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Contact Info</Link>
                        <p className="mt-2 text-gray-500">A professional gym trainer  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trainer;