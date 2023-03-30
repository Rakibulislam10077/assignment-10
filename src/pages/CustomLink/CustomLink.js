import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div className='flex relative'>
            <Link style={{ color: match ? 'black' : 'white', background: match ? 'white' : '', padding: '2px 6px', borderRadius: '5px', }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {
                match ?
                    <div className='bg-white w-full h-1 rounded absolute top-9 '></div>
                    :
                    <></>
            }
        </div>
    );
};

export default CustomLink;