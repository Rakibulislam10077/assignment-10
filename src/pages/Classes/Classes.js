import React, { useEffect, useState } from 'react';
import Class from './Class';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('gym.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <div>
                {
                    classes.map(clss => <Class cls={clss} key={clss.id}></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;