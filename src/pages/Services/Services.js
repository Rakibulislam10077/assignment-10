import React, { useEffect, useState } from 'react';
import Service from './service/Service';

const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div className='mb-6'>
            <h1 className='text-white text-center py-3 mb-3 text-6xl bg-orange-400 mt-2'>Our Gym Service</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-6'>
                {
                    datas.map(data => <Service data={data} key={data.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;