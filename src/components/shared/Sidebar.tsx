import Link from 'next/link';

const Sidebar = () => {
    return (
        <nav className="bg-gray-800 h-screen w-64 p-4">
            <ul className="flex flex-col space-y-4">
                <li>
                    <Link href="/about" className="text-white hover:text-gray-400">
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
                    <Link href="/dashboard" className="text-white hover:text-gray-400">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/profile" className="text-white hover:text-gray-400">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/settings" className="text-white hover:text-gray-400">
                        Settings
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
