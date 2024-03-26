// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import Aos from "aos";
// import Close from './imgs/close.png'
// import brandlogo from "./imgs/Logo.png"
// import 'aos/dist/aos.css'

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   useEffect(()=>{
//     Aos.init({duration:1000})
//   },[])

//   return (
//     <>
//       <div data-aos='fade-down' className="fixed top-0 left-0 right-0 bg-[#282C33]">
//         <div className=" px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
//           <NavLink to="/">
//             <div className="left flex gap-2 items-center font-bold text-white text-base">
//               {/* logo */}
//               <div className="img">
//                 <img src={brandlogo} alt="" />
//               </div>
//               Emmanuel
//             </div>
//           </NavLink>
//           <div className="right flex items-center relative">
//             <div
//               className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle
//                 ? `right-[-100%] top-0 bottom-0`
//                 : `right-0 top-60 bottom-0`
//                 } bg-[#282C33] md:static`}
//             >
//               <NavLink to="/">
//                 <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
//                   <span className="text-[#C778DD] font-medium">#</span>home
//                 </li>
//               </NavLink>
//               <NavLink to="/projects">
//                 <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
//                   <span className="text-[#C778DD] font-medium">#</span>work
//                 </li>
//               </NavLink>
//               <NavLink to="/about">
//                 <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
//                   <span className="text-[#C778DD] font-medium">#</span>about-me
//                 </li>
//               </NavLink>
//               <NavLink to="/contact">
//                 <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
//                   <span className="text-[#C778DD] font-medium">#</span>contacts
//                 </li>
//               </NavLink>
//               <div
//                 onClick={() => setToggle(false)}
//                 className="close absolute block md:hidden right-3 top-3"
//               >
//                 <img src={Close} alt="" />
//               </div>
//             </div>
            {/* CLOSE&OPEN btns */}
            {/* <div onClick={() => setToggle(true)} className={`${!toggle ? "" : "hidden" }`}>
              <div className="open block md:hidden w-8">
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar; */}








import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import brandlogo from "./imgs/Logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative px-4 py-4 flex justify-between items-center bg-[#282C33]">
          <NavLink to="/">
            <div className="left flex gap-2 items-center font-bold text-white text-base">
              {/* logo */}
              <div className="img">
                <img src={brandlogo} alt="" />
              </div>
              Emmanuel
            </div>
          </NavLink>
            
            <div className="lg:hidden">
                <button className="navbar-burger flex items-center text-[#C778DD] p-3" onClick={handleMenuToggle}>
                    <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
            <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
                <NavLink to="/">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                      <span className="text-[#C778DD] font-medium">#</span>home
                  </li>
                </NavLink>                
                <NavLink to="/projects">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                      <span className="text-[#C778DD] font-medium">#</span>work
                  </li>
                </NavLink>                
                <NavLink to="/about">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                      <span className="text-[#C778DD] font-medium">#</span>about-me
                  </li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                      <span className="text-[#C778DD] font-medium">#</span>contact-me
                  </li>
                </NavLink>
            </ul>
            {isMenuOpen && (
                <>
                    <div className="navbar-menu relative z-50">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={handleMenuToggle}></div>
                        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#282C33] border-r overflow-y-auto">
                            <div className="flex items-center mb-8">
                                <NavLink to='/' className="mr-auto text-3xl font-bold leading-none">
                                      Emmanuel
                                </NavLink>                                
                                <button className="navbar-close" onClick={handleMenuToggle}>
                                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <ul>
                                    <NavLink to="/">
                                      <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                          <span className="text-[#C778DD] font-medium">#</span>home
                                      </li>
                                    </NavLink>                
                                    <NavLink to="/projects">
                                      <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                          <span className="text-[#C778DD] font-medium">#</span>work
                                      </li>
                                    </NavLink>                
                                    <NavLink to="/about">
                                      <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                          <span className="text-[#C778DD] font-medium">#</span>about-me
                                      </li>
                                    </NavLink>
                                    <NavLink to="/contact">
                                      <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                                          <span className="text-[#C778DD] font-medium">#</span>contact-me
                                      </li>
                                    </NavLink>
                                </ul>
                            </div>
                            <div className="mt-auto">
                                <p className="my-4 text-xs text-center text-gray-400">
                                    <span>Copyright © 2024</span>
                                </p>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;
