"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Herosection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white font-extrabold mb-4 text-4xl sm:text-5xl lg:text-6xl  ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8b72] to-[#fc0000]">
              Hello, I'm{" "}
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
            Versatile Next.js Developer. Transforming ideas into captivating web
            experiences.
          </p>
          <button className="mr-4 w-full sm:w-fit px-4 py-2 bg-white text-white rounded-full bg-gradient-to-br from-[#fc8b72] via-[#fc0000] to-[#ac2124] hover:bg-slate-500 ">
            Hire Me
          </button>
          <button className="mt-4 w-full sm:w-fit px-4 py-2 bg-transparent rounded-full hover:bg-slate-800 text-white border border-white">
            Download CV
          </button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div
            //style={{ width: "300px", height: "300px", borderRadius: "50%" }}
            className="bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full relative"
          >
            <Image
              src="/assets/images/increased.png"
              alt="Hero image"
              width={400}
              height={400}
              quality={90}
              priority={true}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
