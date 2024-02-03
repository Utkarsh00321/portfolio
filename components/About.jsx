"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2">
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>C/C++</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Bachelors in Technology, Vishwakarma Institute of Information
          Technology.
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-10 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/assets/images/setup.jpg"
          alt="image of programming setup"
          height={500}
          width={500}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mt-4 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Next.js Developer. Transforming ideas into captivating web
            experiences. I have experience in working with HTML, CSS,
            JavaScript, Node.js, Express.js, React.js, MongoDB, MySQL and C/C++.
            Passionate about staying ahead in tech trends. Excited to infuse
            creativity and expertise into a team-driven environment that values
            innovation and growth.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
