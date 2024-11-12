import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCollectionFill, BsFillGridFill, BsFillPuzzleFill, BsStar } from 'react-icons/bs';
import { RainbowButton } from "@/components/ui/rainbow-button.tsx";
import { FaDiscord, FaGithub, FaSun } from "react-icons/fa";
import { GitHubStarCount } from "react-mower";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
    const [ menuOpen, setMenuOpen ] = useState( false );

    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-white">
            {/* Left Side: Logo and Links */}
            <div className="flex items-center space-x-4">
                <img src="/favicon.png" alt="Magic UI" className="w-8 h-8"/>
                <span className="font-semibold text-lg">Magic UI</span>
                <span className="px-2 py-[2px] text-xs font-medium bg-gray-200 text-gray-800 rounded-md">Beta</span>

                {/* Links with Icons - Only visible on larger screens */}
                <div className="hidden md:flex items-center space-x-6 ml-6">
                    <a href="#" className="flex items-center text-gray-800 hover:text-gray-600">
                        Components
                    </a>
                    <a href="#" className="flex items-center text-gray-800 hover:text-gray-600">
                        Templates
                    </a>
                    <span
                        className="px-2 py-1 text-xs font-medium bg-orange-200 text-orange-800 rounded-md flex items-center">
                         New
                    </span>
                    <a href="#" className="text-gray-800 hover:text-gray-600">
                        Showcase
                    </a>
                </div>
            </div>

            {/* Right Side: GitHub Star Button and Mobile Menu Button */}
            <div className="flex items-center gap-4">
                {/* GitHub Star Button - Visible only on larger screens */}
                {/*<button className="hidden md:block bg-gray-800 text-white px-3 py-1 rounded-full">*/}
                {/*    Star on GitHub ⭐ 11,403*/}
                {/*</button>*/}

                <RainbowButton className="flex gap-4 text-[15px]">
                    <FaGithub/>
                    Star on GitHub ⭐ <GitHubStarCount githubStar="Khujamovcodes/Magic-ui"/>
                </RainbowButton>

                <div className="relative">
                    <input
                        placeholder="Search documentation..."
                        className="input shadow focus:border-4 border-gray-600 px-5 py-2 rounded-xl w-56 transition-all focus:w-64 outline-none"
                        name="search"
                        type="search"
                    />
                    <svg
                        className="size-4 absolute top-3 right-3 text-gray-500"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </div>

                <div className="flex text-gray-700 text-lg items-center gap-8">
                    <a href="#" target="_blank">
                        <FaDiscord/>
                    </a>
                    <a href="#" target="_blank">
                        <FaGithub/>
                    </a>
                    <a href="#" target="_blank">
                        <FaX/>
                    </a>
                    <a href="#" target="_blank">
                        <FaSun/>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen( !menuOpen )} className="text-gray-800">
                        {menuOpen ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24}/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 md:hidden space-y-4">
                    <a href="#" className="flex items-center text-gray-800 hover:text-gray-600">
                        <BsFillPuzzleFill className="mr-2"/> Components
                    </a>
                    <a href="#" className="flex items-center text-gray-800 hover:text-gray-600">
                        <BsFillGridFill className="mr-2"/> Templates
                    </a>
                    <span className="flex items-center text-gray-800">
                        <BsFillCollectionFill className="mr-2"/> New
                    </span>
                    <a href="#" className="flex items-center text-gray-800 hover:text-gray-600">
                        <BsStar className="mr-2"/> Showcase
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
