import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="border border-gray-700  hover:shadow-xl transition-all duration-150 ease-in-out hover:scale-105">
      <div
        className="h-72 hover:mix-blend-overlay  "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>

      <div className="text-white  bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="/"
            className="mr-4 w-full sm:w-fit px-8 py-2 bg-white text-white  bg-gradient-to-br from-[#fc8b72] via-[#fc0000] to-[#ac2124] hover:bg-slate-500 cursor-pointer border border-white"
          >
            Code
          </Link>
          <Link
            href="/"
            className="w-full sm:w-fit px-8 py-2 bg-transparent  hover:bg-slate-800 text-white border border-white"
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
