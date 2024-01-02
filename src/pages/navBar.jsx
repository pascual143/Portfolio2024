import React from "react";
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return (
        <>
            <nav  id="top" className="flex p-4 transition ease-in-out transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:bg-indigo-500 duration-500 ">
              <div className="flex flex-shrink-0 text-white xl:right-0 lg:right-0 md:mr-12 lg:mr-12 xxl:mr-12">
                <span className="font-semibold text-xl tracking-tight">Pascual Vila</span>
              </div>
              <div className="font-semibold w-full flex justify-end content-end hover:justify-around">
                <div className="text-sm lg:flex-grow mr-6">
                  <Link to="/cv" className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    CV
                  </Link>
                  <Link to="/proyects" className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    PROYECTS
                  </Link>
                  <Link to="/others" className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    OTHERS
                  </Link>
                </div>
                
              </div>
            </nav>   
         </>
    )
}

export default NavBar