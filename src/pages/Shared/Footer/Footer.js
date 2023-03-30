import { Link } from 'react-router-dom';

import backg from '../../../images/logo.png';

const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundImage: `url(${backg})` }} className=" py-8 bg-no-repeat bg-current">
                <div className="container mx-auto flex flex-wrap">
                    <div className="w-full lg:w-1/3 px-4 text-orange-500" >
                        <h2 className="font-bold text-lg mb-4">About Us</h2>
                        <p className="mb-4">We are a fitness club committed to helping our members achieve their fitness goals. Our state-of-the-art facilities and experienced trainers provide the support and guidance you need to succeed.</p>
                        <p><i className="fas fa-map-marker-alt mr-2"></i>123 Main St, Anytown USA</p>
                        <p><i className="fas fa-phone-alt mr-2"></i>(123) 456-7890</p>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <h2 className="font-bold text-lg text-orange-500 mb-4">Classes</h2>
                        <ul className="list-none text-white">
                            <li><Link className="text-orange-300 hover:text-orange-500">Yoga</Link></li>
                            <li><Link className="text-orange-300 hover:text-orange-500">Pilates</Link></li>
                            <li><Link className="text-orange-300 hover:text-orange-500">Cardio</Link></li>
                            <li><Link className="text-orange-300 hover:text-orange-500">Weightlifting</Link></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <h2 className="font-bold text-lg mb-4 text-orange-500">Follow Us</h2>
                        <ul className="list-none">
                            <li><Link href="#" className="text-orange-300 hover:text-orange-500"><i className="fab fa-facebook-f"></i> Facebook</Link></li>
                            <li><Link href="#" className="text-orange-300 hover:text-orange-500"><i className="fab fa-twitter"></i> Twitter</Link></li>
                            <li><Link href="#" className="text-orange-300 hover:text-orange-500"><i className="fab fa-instagram"></i> Instagram</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Footer;