import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-[#1A1A1A] p-3 mt-0 '>
                <ul className='flex justify-around max-w-7xl mx-auto text-white'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/products'>Products</Link></li>
                    <li><Link href='/manageProducts'>Manage Products</Link>  </li>
                     
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;