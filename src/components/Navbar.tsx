import logoImage from "../assets/images/logoabresh.png";
import Image from "next/image";
import MenuIcon from '../assets/Icons/icon-menu.svg'


export const Navbar = () => {
    return (
        <div className="bg-black">
            <div className="px-4">
                <div className="py-4 flex items-center justify-between">
                    <div className="relative">
                        <div className="absolute w-full top-2 bottom-0 bg-custom-gradient-light blur-md"></div>
                        <Image 
                            src={logoImage} 
                            alt="Abresh Events logo" 
                            className="h-12 w-12 relative"
                        />
                    </div>
                    <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"> 
                        <MenuIcon className="text-white"/>
                    </div>
                    <nav className=" gap-6 items-center hidden sm:flex">
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
                        <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
                        
                        {/* Button */}
                        <a 
                            href="#_" 
                            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
                        >
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                                Button Text
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
};