import React from "react";
import JokesApp from "../random-jokes.png";
import Portfolio from "../personal-portfolio.png";
import Link from "../components/Link";

const projects = [
  {
    name: "Jokes App",
    year: 2023,
    image: JokesApp,
    description:
      "A single page web app for fetching a list of random jokes using React Query, built with custom components supported by TypeScript & Material UI.",
    tech: ["React", "React Query", "Material UI", "SCSS"],
  },
  {
    name: "Personal Portfolio",
    year: 2022,
    image: Portfolio,
    description:
      "A web app showcasing my projects and sharing my professional experience, built with React and hosted on Vercel.",
    tech: ["React", "Tailwind CSS", "React Router", "SCSS"],
  },
];

function Projects() {
  return (
    <div className="max-w-3xl py-10 px-5 max-[600px]:px-2.5 max-[600px]:px-6 m-auto text-white">
      <h1 className="font-semibold text-4xl max-[600px]:text-2xl mb-8">
        Projects
      </h1>
      {projects.map((project) => (
        <div className="flex flex-row max-[768px]:flex-col gap-3 mb-16">
          {/* <img
            src={project.image}
            alt={project.name}
            className="rounded w-1/3 max-[768px]:w-full"
          /> */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <Link
                href="https://github.com/trinhbond/random-jokes"
                className="text-xl max-[600px]:text-lg font-medium hover:text-green-300 "
              >
                {project.name} ({project.year})
              </Link>
              <p className="max-[600px]:text-sm my-2 text-lg">
                {project.description}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              {project.tech.map((i) => (
                <span className="flex-1 max-w-min whitespace-nowrap rounded text-center text-sm text-green-200">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
