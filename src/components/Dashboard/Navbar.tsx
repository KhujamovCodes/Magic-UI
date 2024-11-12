import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
            <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="Magic UI" className="w-8 h-8" />
                <span className="font-semibold text-lg">Magic UI</span>
                <span className="px-2 py-1 text-xs font-medium bg-orange-200 text-orange-800 rounded-md">Beta</span>
            </div>

            {/* Large Screen Menu */}
            <div className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-800 hover:text-gray-600">Components</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Templates</a>
                <span className="px-2 py-1 text-xs font-medium bg-orange-200 text-orange-800 rounded-md">New</span>
                <a href="#" className="text-gray-800 hover:text-gray-600">Showcase</a>
                <button className="bg-gray-800 text-white px-3 py-1 rounded-full">
                    Star on GitHub ⭐ 11,403
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800">
                    {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 md:hidden space-y-4">
                    <a href="#" className="text-gray-800 hover:text-gray-600">Components</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Templates</a>
                    <span className="px-2 py-1 text-xs font-medium bg-orange-200 text-orange-800 rounded-md">New</span>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Showcase</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
