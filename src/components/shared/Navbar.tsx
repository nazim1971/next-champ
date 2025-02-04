const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <a href="/about" className="text-white hover:text-gray-400">
                        About
                    </a>
                </li>
                <li>
                    <a href="/counter" className="text-white hover:text-gray-400">
                        Counter
                    </a>
                </li>
                <li>
                    <a href="/dashboard" className="text-white hover:text-gray-400">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/products" className="text-white hover:text-gray-400">
                        Product
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
