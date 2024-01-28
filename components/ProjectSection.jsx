import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "My Portfolio Website",
    image: "/assets/images/projects/project1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "fundForge",
    description: "Multi-asset portfolio management website.",
    image: "/assets/images/projects/project2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "promptpedia",
    description: "Website to store and explore AI prompts.",
    image: "/assets/images/projects/project3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-center font-bold text-4xl text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            description={item.description}
            imgUrl={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
