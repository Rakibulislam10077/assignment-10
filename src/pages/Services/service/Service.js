import React from 'react';
import { useNavigate } from 'react-router-dom';

const GymData = ({ data }) => {
    const navigate = useNavigate();
    const handleNavigateBtn = () => {
        navigate('/checkout')
    }
    const { img, p_name, spe } = data;
    return (
        <div className='bg-gray-400 p-4 rounded-lg hover:bg-orange-400 transition-all hover:text-white'>
            <img className='rounded' src={img} alt="" />
            <h1 className='text-3xl my-3'>{p_name}</h1>
            <h2 >{spe}</h2>
            <button onClick={handleNavigateBtn} className='bg-white rounded py-2 px-6 mt-4 text-black font-semibold'>Check Out</button>
        </div>
    );
};

export default GymData;