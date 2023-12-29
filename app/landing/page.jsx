"use client";
import React, { useEffect, useState ,useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer";
import { SignIn } from "../components/SignIn";
import allnewslogo from '../../public/allnewslogo.jpg'
import thehindu from '../../public/thehindu.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
// import { useViewportScroll } from "framer-motion";


const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
     
 
    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current;
            if (element) {
                const { top } = element.getBoundingClientRect();
                const isVisible = top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };
 
        window.addEventListener("scroll", onWindScroll);
        return () => {
            window.removeEventListener("scroll", onWindScroll);
        };
    }, []);
  const classes = `transition-opacity duration-1000 
  ${isVisible ? "opacity-0" : "opacity-1"
  }`;

  

  return (
    <motion.div className={classes} >
      <section className= "hero h-auto flex flex-col justify-between  px-20 md:flex-row " 
      style={{
        scaleY: scrollYProgress
      }}
      >
        <section className="left pt-3  ">
          <div className="flex flex-col gap-4 ">
            <div className=" h-60 w-full ">
              <div>
                <span className="   text-mainText text-6xl md:text-7xl bg-transparent font-black tracking-wider stripe-background heading">
                  Epic {"\n"}Pulse
                </span>
              </div>
              <p className="leading-6 mt-1 tracking-3 font-semibold">
                Where Every Headline Takes You on an Adventure of Swift and
                Crisp Discovery Embark on an EpicPulse Journey lets make reading
                news paper intresing.
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
              <Image
                src={allnewslogo}
                alt="image"
                // width={"full"}
                className="w-full  h-full object-cover rounded-2xl contrast-200"
                layout="fill"
              />{" "}

            </div>
            <div className="skeleton w-40 h-32 rounded-3xl relative">
              {/* <Image
                src={imageUrls[0]}
                alt="image"
                // width={"full"}
                className="w-full h-full object-cover rounded-2xl brightness-200"
                layout="fill"
              />{" "} */}
              <Image
                src={thehindu}
                alt="image"
                // width={"full"}
                className="w-full h-full object-cover rounded-2xl brightness-200"
                layout="fill"
              />{" "}
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
      <section className="flex justify-center mt-3" 
      style={{
        scaleY: scrollYProgress
      }}
      >
        <h1 className=" items-center text-center whatwedo text-8xl font-black tracking-widest mx-3">
          What{" "}
        </h1>
        <h1 className=" items-center text-center text-blue-500 text-8xl font-black tracking-widest mx-3">
          {" "}
          We
        </h1>
        <h1 className=" items-center text-center whatwedo text-8xl font-black tracking-widest mx-3">
          {" "}
          Do
        </h1>
      </section>
      <SignIn/>
      <Footer/>
    </motion.div>
  );
};

export default Landing;
