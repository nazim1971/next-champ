import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center">
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
                    <Link href="/dashboard" className="text-white hover:text-gray-400">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/products" className="text-white hover:text-gray-400">
                        Product
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
