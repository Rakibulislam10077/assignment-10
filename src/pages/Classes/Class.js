import React from 'react';

const Class = ({ cls }) => {
    const { img, p_name, spe, clas } = cls;
    return (
        <div className='flex rounded-lg p-2 hover:shadow-2xl w-1/2 mx-auto mt-10 border shadow-slate-500 mb-12'>
            <div className='mr-4'>
                <img className='w-full h-full' src={img} alt="class img" />
            </div>
            <div>
                <h1 className='text-4xl bg-orange-400 text-center rounded text-white mb-2'>{p_name}</h1>
                <h2 className='text-1xl font-semibold'>{clas}</h2>
                <p className='text-gray-400'>{spe}</p>
            </div>
        </div>
    );
};

export default Class;