import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebese.init';
import logo from '../../../images/logo.png';
import Link from '../../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleRemoveEmail = () => {
        signOut(auth)
    }
    return (
        <div className='bg-orange-500 py-4 px-12 flex items-center justify-between sticky top-0 z-50'>
            <div className='flex'>
                <Link to='/home'><img className='w-16' src={logo} alt="This is logo" /></Link>
                <p className='ml-1 mt-3 text-2xl font-bold'>FITNESS, USA</p>
            </div>
            <nav className='text-white font-semibold flex gap-6'>
                <Link className=' hover:text-black' to='/'>Home</Link>
                <Link className=' hover:text-black' to='/classes'>Classes</Link>
                <Link className=' hover:text-black' to='/trainer'>Trainer</Link>
                <Link className=' hover:text-black' to='/blog'>Blog</Link>
                <Link className=' hover:text-black' to='/about'>About me</Link>
                {
                    user ?
                        <Link onClick={handleRemoveEmail} className=' hover:text-black' to='/login'>log out</Link>
                        :
                        <Link className=' hover:text-black' to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;