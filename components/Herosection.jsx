"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Herosection = () => {
  return (
    <>
      <section className="sm:hidden lg:py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left"
          >
            <h1 className="text-white font-extrabold tracking-wide mb-4 text-6xl sm:text-7xl lg:text-8xl  ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8b72] to-[#fc0000]">
                Hello, I am{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Utkarsh",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                  "Next.js Artist",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </h1>
            <div
              //style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              className="py-8 bg-[#353535] w-[220px] h-[220px] lg:w-[320px] lg:h-[320px] rounded-full relative"
            >
              <Image
                src="/assets/images/profile-pic.png"
                alt="Hero image"
                width={200}
                height={200}
                quality={90}
                priority={true}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
              Versatile Next.js Developer. Transforming ideas into captivating
              web experiences.
            </p>
            <Link
              href="/#contact"
              className="mr-4 w-full sm:w-fit px-4 py-2 text-white  bg-gradient-to-br from-[#fc8b72] via-[#fc0000] to-[#ac2124] border border-white hover:bg-slate-500 "
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="mt-4 w-full sm:w-fit px-4 py-2 bg-transparent  hover:bg-slate-800 text-white border border-white"
            >
              Download Resume
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="lg:py-12 hidden sm:block">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left"
          >
            <h1 className="text-white font-extrabold mb-4 text-4xl sm:text-5xl lg:text-6xl  ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8b72] to-[#fc0000]">
                Hello, I am{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Utkarsh",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                  "Next.js Artist",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
              Versatile Next.js Developer. Transforming ideas into captivating
              web experiences.
            </p>
            <Link
              href="/#contact"
              className="mr-4 w-full sm:w-fit px-4 py-2 text-white  bg-gradient-to-br from-[#fc8b72] via-[#fc0000] to-[#ac2124] border border-white hover:bg-slate-500 "
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="mt-4 w-full sm:w-fit px-4 py-2 bg-transparent  hover:bg-slate-800 text-white border border-white"
            >
              Download Resume
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div
              //style={{ width: "300px", height: "300px", borderRadius: "50%" }}
              className="bg-[#353535] w-[310px] h-[310px] lg:w-[320px] lg:h-[320px] rounded-full relative"
            >
              <Image
                src="/assets/images/profile-pic.png"
                alt="Hero image"
                width={300}
                height={300}
                quality={90}
                priority={true}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
