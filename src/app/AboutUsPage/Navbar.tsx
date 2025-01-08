// import { useState } from 'react';
// import { MenuIcon, XIcon } from '@heroicons/react/24/outline';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-purple-800 to-blue-900 px-6 py-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">Logo</div>
//         <div className="hidden md:flex space-x-8">
//           <a href="#who-we-are" className="text-white hover:text-gray-300">
//             Who we are
//           </a>
//           <a href="#what-we-do" className="text-white hover:text-gray-300">
//             What we do
//           </a>
//           <a href="#services" className="text-white hover:text-gray-300">
//             Services
//           </a>
//           <a href="#gallery" className="text-white hover:text-gray-300">
//             Gallery
//           </a>
//           <a href="#press" className="text-white hover:text-gray-300">
//             Press
//           </a>
//           <a href="#contact-us" className="text-white hover:text-gray-300">
//             Contact us
//           </a>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <XIcon className="h-6 w-6 text-white" />
//             ) : (
//               <MenuIcon className="h-6 w-6 text-white" />
//             )}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-4">
//           <a href="#who-we-are" className="block text-white hover:text-gray-300">
//             Who we are
//           </a>
//           <a href="#what-we-do" className="block text-white hover:text-gray-300">
//             What we do
//           </a>
//           <a href="#services" className="block text-white hover:text-gray-300">
//             Services
//           </a>
//           <a href="#gallery" className="block text-white hover:text-gray-300">
//             Gallery
//           </a>
//           <a href="#press" className="block text-white hover:text-gray-300">
//             Press
//           </a>
//           <a href="#contact-us" className="block text-white hover:text-gray-300">
//             Contact us
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
