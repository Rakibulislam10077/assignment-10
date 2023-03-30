import React from 'react';


const Blog = ({ blog }) => {
    const { img, p_name, blogs } = blog;
    return (
        <div style={{ width: '90%' }} className='mx-auto p-3 border-orange-400 border-4 rounded-2xl mb-4'>
            <div>
                <img src={img} alt="" />
                <h1 className=''>{p_name}</h1>
            </div>
            <div>
                <p>{blogs}</p>
            </div>
        </div>
    );
};

export default Blog;