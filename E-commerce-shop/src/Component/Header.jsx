
import React from 'react';
import "../input.css"
import {FaSignInAlt,FaBars} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";


const Header =()=>
{
    const state=useSelector((state)=>state.cart)
    const [toggleMenu,setToggleMenu]=useState(false)


    const toggleBergerMenu =()=>
    {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu)
    }
    return (
        <>
            <div class="shadow mt-4 mb-2 pb-2">
            <h1 class="text-3xl text-center  text-red-500 animate-bounce">استایل شاپ</h1>
            </div>
            <nav class="mt-5  ">
                 <div class="w-full bg-white h-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                     <div class="text-white p-7 col-span-1 sm:pb-8 text-center sm:text-left ">
                        <h2 class="text-gray-800 animate-bounce">Style<span Style="color:#F8770E;"> Shoop </span></h2>
                    </div>
                     {/*Hamburger menu*/}
                     {toggleMenu &&
                         <div className="lg:hidden w-full absolute text-center bg-gray-900
                          justify-center list-none flex flex-col
                           pt-6 pr-6 gap-8 top-52  sm:top-40  pb-8 z-50">
                             <li><NavLink to="/" className="text-stone-400 hover:text-white">صفحه اصلی</NavLink></li>
                             <li><NavLink to="/products" className="text-stone-400  hover:text-white">فروشگاه </NavLink></li>
                             <li><NavLink to="/contact" className="text-stone-400  hover:text-white">تماس با ما</NavLink></li>
                             <li><NavLink to="/about-us" className="text-stone-400 hover:text-white ">درباره ما</NavLink></li>
                         </div>

                     }
            <div className="hidden lg:justify-center  lg:list-none lg:flex lg:flex-row-reverse lg:pt-6 lg:pr-6 lg:gap-8 lg:col-span-1 ">
                <li><NavLink to="/" className="text-stone-800   hover:text-stone-400">صفحه اصلی</NavLink></li>
                <li><NavLink to="/products" className="text-stone-800  hover:text-stone-400">فروشگاه </NavLink></li>
                <li><NavLink to="/contact" className="text-stone-800  hover:text-stone-400">تماس با ما</NavLink></li>
                <li><NavLink to="/about-us" className="text-stone-800  hover:text-stone-400">درباره ما</NavLink></li>
            </div>
            <div className="lg:hidden color-span-1   flex justify-center  sm:justify-end p-2  " onClick={()=>toggleBergerMenu()}>
                 <button><FaBars size={35}/></button>
             </div>
            <div class="hidden lg:mx-auto  col-span-1  lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-4 lg:w-auto lg:col-span-1 ">
                <NavLink className="flex flex-row items-center bg-transparent border-2 border-stone-300 rounded px-6 py-2 gap-2 hover:bg-blue-500" to="/login" ><FaSignInAlt/>Login</NavLink>
                <NavLink className="flex flex-row items-center bg-transparent border-2 border-stone-300 rounded px-6 py-2 gap-2 hover:bg-blue-500" to="/Register" ><FaSignInAlt/>Register</NavLink>
                <NavLink className="flex flex-row items-center bg-transparent border-2 border-stone-300 rounded px-6 py-2 gap-2 hover:bg-blue-500" to="/Cart" ><FaSignInAlt/>Cart({state.length})</NavLink>
            </div>

        </div>
        </nav>
        </>
    )
}

export default Header