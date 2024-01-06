'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // const [text , settext] = useState("Sign In")

  const user = typeof window !== 'undefined' ? sessionStorage.getItem("user") : null;
  const handleAuth = async ()=>{
    signOut(auth)
  }

  // if(user) settext("Sign Out")
  return (
    <div className="navbar z-10  bg-black px-20 pt-3  backdrop-blur-2xl ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
          <Link href="/landing">Home</Link>
          </li>
          <li>
            <Link href="/news2">News</Link>
          </li>
          <li>
            <a>About Js</a>
          </li>
          <li>
            <a>Suggest</a>
          </li>
        </ul>
      </div>
      <a className="stripe-background btn btn-ghost text-xl text-white gap-0 logo">
        <span className=" text-orange-600">E</span>
        <span>
          pic<span className=" text-orange-600">P</span>ulse
        </span>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
        <Link href="/landing">Home</Link>
        </li>
        <li>
        <Link href="/news2">News</Link>
        </li>
        <li>
         <a>About Us</a>
        </li>
        <li>
          <a>Suggest</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <button className="btn stripe-background bg-white text-black font-extrabold transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-3 hover:border-white"
      onClick={handleAuth}
      >
        SignIn
      </button>
      {/* Display avatar if logged in  */}
      {/* {isLoggedIn && ( */}
        {/* <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="User Avatar" />
          </div>
        </div> */}
      {/* )} */}
    </div>
  </div>
  )
}

export default Navbar;