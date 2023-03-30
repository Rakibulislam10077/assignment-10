import React from 'react';
import carousel from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div>

            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                <div className="relative h-56 overflow-hidden md:h-96">
                    <div className=" duration-700 ease-in-out" data-carousel-item="active">
                        <img src={carousel} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slider one" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;