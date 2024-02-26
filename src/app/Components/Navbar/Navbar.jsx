import React, { useState } from "react";
import locofy from "../../../../public/casagrand-abt-logo06.png";
import Image from "next/image";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Image src={locofy} className=" w-32 h-10 mr-2" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-end  lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow font-thin uppercase">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 mb-[0.125rem] group text-black transition-all duration-300 ease-in-out'"
          >
                <span class='bg-left-bottom bg-gradient-to-r from-[#fcad15] to-[#fcad15] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> 

            About Us
            </span>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 mb-[0.125rem] group text-black transition-all duration-300 ease-in-out'"
          >
                <span class='bg-left-bottom bg-gradient-to-r from-[#fcad15] to-[#fcad15] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> 

            Projects
            </span>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 mb-[0.125rem] group text-black transition-all duration-300 ease-in-out'"
          >
                <span class='bg-left-bottom bg-gradient-to-r from-[#fcad15] to-[#fcad15] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> 

            Sustainability
            </span>
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 mb-[0.125rem] group text-black transition-all duration-300 ease-in-out'"
          >
                <span class='bg-left-bottom bg-gradient-to-r from-[#fcad15] to-[#fcad15] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'> 

            Blog
            </span>
          </a>
        </div>
        <div>
          {/* <button className="inline-flex items-center bg-amber-500  py-2 px-8 border rounded-3xl text-white font-sans ">
           Contact
         </button> */}
          <button class="sm:mt-0 mt-4 text-red hover:before:bg-redborder-red-500 relative h-[35px] sm:w-[175px] w-full  border rounded-3xl     bg-[#fcad15] px-3 text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-500 before:transition-all before:duration-500 before:rounded-3xl hover:text-white hover:before:left-0 hover:before:w-full">
            <span class=" font-sans  uppercase text-xs relative z-10 ">Contact us</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default App;
