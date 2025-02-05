'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <Link 
                        href="/" 
                        className={pathname === '/' ? 'border-b-2 border-red-500' : 'text-white hover:text-gray-400 pb-2'}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/about" 
                        className={pathname === '/about' ? 'border-b-2 border-red-500' : 'text-white hover:text-gray-400 pb-2'}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/counter" 
                        className={pathname === '/counter' ? 'border-b-2 border-red-500' : 'text-white hover:text-gray-400 pb-2'}
                    >
                        Counter
                    </Link> 
                </li>
                <li>
                    <Link 
                        href="/products" 
                        className={pathname === '/products' ? 'border-b-2 border-red-500' : 'text-white hover:text-gray-400 pb-2'}
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link 
                        href="/gallery" 
                        className={pathname === '/gallery' ? 'border-b-2 border-red-500' : 'text-white hover:text-gray-400 pb-2'}
                    >
                        Gallery
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
