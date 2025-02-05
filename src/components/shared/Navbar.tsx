import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center">
            <li>
                    <Link  href="/" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link  href="/about" className="text-white hover:text-gray-400">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/counter" className="text-white hover:text-gray-400">
                        Counter
                    </Link> 
                </li>
                
                <li>
                    <Link href="/products" className="text-white hover:text-gray-400">
                        Product
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" className="text-white hover:text-gray-400">
                      Gallery
                    </Link>
                </li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
