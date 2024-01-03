'use client'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useRouter } from 'next/navigation';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, useScroll, useTransform } from "framer-motion"

// import {signup , signin} from '../libs/auth'
export const SignIn = () => {
  // toast = ToastContainer()
    // const Oauth = getAuth();
    const router = useRouter()
    const { scrollYProgress } = useScroll()
    const [message , setmessage] = useState("")
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const [user, setUser] = useState({ email: "", password: "" })
    const signup = async (e) => {
        console.log("sign up called user = " , user);

        if (user.email != "" && user.password != "") {
          console.log("inside sign up ");
    
          await createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
       

              toast("created")
              setmessage("Account Successfully Created")
              sessionStorage.setItem("user",true)
              router.push("/news2")

    
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log("errror = ", errorMessage);
              setmessage(errorMessage)
              // ..
            });
    
        }
      }
  return (
    <section  style={{ scale }}>
        <div className="min-h-screen bg-black flex items-center justify-between gap-4">
          <div className="md:w-1/3 md:border-2 md:border-white md:h-1/2   md:ml-5 ">

          </div>
          <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
            <div className="py-12 p-10 bg-black rounded-xl">
              <div className="mb-6">
                <label
                  className="mr-4 text-mainText font-bold inline-block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border bg-black py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  placeholder="@email"
                  onClick={(e) => { setUser((user) => ({ ...user, email: e.target.value })) }}
                />
              </div>
              <div className="">
                <label
                  className="mr-4 text-mainText font-bold inline-block mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-indigo-400 rounded"
                  placeholder="password"
                  onClick={(e) => { setUser((user) => ({ ...user, password: e.target.value })) }}
                />
              </div>
              <span className="text-sm text-gray-700 inline-block mt-4 hover:text-indigo-600 hover:underline hover:cursor-pointer transition duration-200">
                forget password
               
              </span>
              <p> {message}</p>
              <button className="w-full mt-6 text-indigo-50 font-bold bg-indigo-600 py-3 rounded-md hover:bg-indigo-500 transition duration-300"
              onClick={ signup}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
