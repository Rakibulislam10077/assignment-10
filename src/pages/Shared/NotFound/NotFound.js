import React from 'react';
import notFound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className='text-center mt-64'>
            <img className='mx-auto' src={notFound} alt="not found images" />
        </div>
    );
};

export default NotFound;