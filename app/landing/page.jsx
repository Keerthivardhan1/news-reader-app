"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <div className="navbar  bg-black px-20 pt-3 ">
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
                <a>Home</a>
              </li>
              <li>
                <a>News</a>
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
              <a>Home</a>
            </li>
            <li>
              <a>News</a>
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
          <a className="btn stripe-background bg-white text-black font-extrabold transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-3 hover:border-white">
            Sign In
          </a>
        </div>
      </div>
      <section className="hero h-auto flex flex-col justify-between  px-20 md:flex-row">
        <section className="left pt-3 ">
          <div className="flex flex-col gap-4 ">
            <div className=" h-60 w-full ">
              <div>
                <span className="   text-mainText text-6xl md:text-7xl bg-transparent font-black tracking-wider stripe-background heading">
                 Epic {'\n'}Pulse
                </span>
              </div>
              <p className="leading-6 mt-1 tracking-3 font-semibold">
                Where Every Headline Takes You on an Adventure of Swift and
                Crisp Discovery Embark on an EpicPulse Journey lets make reading news paper intresing.
              </p>
            </div>
            <div className=" ">
              <Link
                href={"/news"}
                className="btn bg-white text-black font-extrabold transition duration-300 ease-in-out hover:bg-black hover:text-white hover:border-3 hover:border-white tracking-wider"
              >
                Read More
              </Link>
            </div>
          </div>
        </section>

        <section className="right pt-3 px-24 flex flex-col gap-7 w-1/2  items-center  ">
          <div className="flex gap-3 md:ml-32">
            <div className="skeleton  w-60 h-32 rounded-3xl relative  ">
            {/* <Image
                src={imageUrls[1]}
                alt="image"
                // width={"full"}
                className="w-full  h-full object-cover rounded-2xl contrast-200"
                layout="fill"
              />{" "} */}
            </div>
            <div className="skeleton w-40 h-32 rounded-3xl relative">
              {/* <Image
                src={imageUrls[0]}
                alt="image"
                // width={"full"}
                className="w-full h-full object-cover rounded-2xl brightness-200"
                layout="fill"
              />{" "} */}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="skeleton w-40 h-32 relative  "></div>
            <div className="skeleton w-40 h-32 rounded-3xl relative"></div>
            <div className="skeleton w-40 h-32 relative"></div>
          </div>
          <div className=" flex gap-3 md:ml-32">
            <div className="skeleton w-40 h-32  relative">
              {/* <figure ><img src=""   /></figure> */}
              <div className=" w-full h-full bg-cover rounded-2xl bg-[url('https://cdn.mos.cms.futurecdn.net/VaRzhLNHQgjVNWKPwJve8A-1200-80.jpg')]"></div>
            </div>
            <div className="skeleton w-40 h-32 rounded-3xl relative"></div>
            <div className="skeleton w-40 h-32 relative"></div>
          </div>
        </section>
      </section>
      <section className="flex justify-center mt-3">
        <h1 className=" items-center text-center whatwedo text-8xl font-black tracking-widest mx-3">What </h1>
        <h1 className=" items-center text-center text-mainText text-8xl font-black tracking-widest mx-3"> We</h1>
        <h1 className=" items-center text-center whatwedo text-8xl font-black tracking-widest mx-3"> Do</h1>
      </section>
    </div>
  );
};

export default Landing;
