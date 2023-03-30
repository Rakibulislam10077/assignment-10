import React from 'react';


const Contact = () => {
    return (
        <div className='mt-12'>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-500 mb-4">We would love to hear from you. Please feel free to contact us with any questions, comments, or concerns.</p>
                <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-map-marker-alt text-gray-400"></i>
                        <p className="text-gray-500">123 Main St, Anytown USA</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-phone-alt text-gray-400"></i>
                        <p className="text-gray-500">(123) 456-7890</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-envelope text-gray-400"></i>
                        <a href="mailto:info@gymclub.com" className="text-gray-500 hover:text-blue-500">AlexJoeGymclub@gmail.com</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;