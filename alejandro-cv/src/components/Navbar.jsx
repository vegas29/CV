import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>    
      <nav className="flex justify-between items-center mx-5 sm:hidden py-5">
        <p className="text-white font-bold text-xl hover:cursor-pointer">Alejo<span className="text-blue-500">.</span></p>
        <i className="fa-solid fa-bars text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-sm hover:cursor-pointer" onClick={toggleSidebar}></i>
      </nav>

      <nav className="hidden md:flex py-10 text-white justify-between">
        <p className="font-bold text-2xl">Alejo<span className="text-blue-500">.</span></p>

        <div className="flex gap-5">
          <a href="#aboutme" className="hover:text-gray-300 hover:cursor-pointer">About</a>
          <a href="#works" className="hover:text-gray-300 hover:cursor-pointer">Works</a>
          <a href="#contact" className="hover:text-gray-300 hover:cursor-pointer">Contact</a>
        </div>
      </nav>
      
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } visible md:hidden fixed top-0 left-0 w-64 bg-black h-full transform transition-transform ease-in-out duration-300 md:translate-x-0 md:w-64`}
      >
        <ul className="pt-12 flex flex-col">
          <li className="font-bold p-5 pl-12 hover:bg-gray-900">
            <a href="#" className="text-white">
              About Me<span className="text-blue-500">.</span>
            </a>
          </li>
          <li className="font-bold p-5 pl-12 hover:bg-gray-900">
            <a href="#" className="text-white">
              Works<span className="text-blue-500">.</span>
            </a>
          </li>
          <li className="font-bold p-5 pl-12 hover:bg-gray-900">
            <a href="#" className="text-white">
              Contact<span className="text-blue-500">.</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
