"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "My personal portfolio website. Fully responsive website built using most popular react framework Next.js. Has animations created using framer motion",
    image: "/assets/images/projects/project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Utkarsh00321/portfolio",
    previewUrl: "/",
  },

  {
    id: 2,
    title: "promptpedia",
    description:
      "Website to store and explore AI prompts. A user can create, edit and delete AI prompts based on his requirement. Easy sign-in using Google OAuth.",
    image: "/assets/images/projects/project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Utkarsh00321/promptpedia",
    previewUrl:
      "https://promptpedia-mjpm61vl4-utkarsh-kadams-projects.vercel.app/",
  },
  {
    id: 3,
    title: "fundForge",
    description:
      "Multi-asset portfolio management website.Fully fucntional website with CRUD capabalities. Provides swift sign in with the Google OAuth and Github OAuth",
    image: "/assets/images/projects/project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Utkarsh00321/fundForge",
    previewUrl:
      "https://fund-forge-a2lnzuyjy-utkarsh-kadams-projects.vercel.app/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center font-bold text-5xl text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 text-xl gap-8 md:gap-12">
        {projectsData.map((item, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.4 }}
          >
            <ProjectCard
              key={item.id}
              title={item.title}
              description={item.description}
              imgUrl={item.image}
              gitUrl={item.gitUrl}
              previewUrl={item.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
