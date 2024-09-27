import ExternalLink from "./ExternalLink";

type ProjectProps = {
  name: string;
  year: number;
  description: string;
  stack: string[];
  link: string;
};

export default function Project(project: ProjectProps): JSX.Element {
  return (
    <ExternalLink
      className="bg-[#4f6913] flex flex-col space-between place-content-evenly px-3.5 py-4 rounded-md"
      href={project.link}
      key={project.name}
    >
      <h3 className="font-semibold w-full">{project.name}</h3>
      <p className="text-gray-light text-sm h-[160px] max-md:h-auto mt-4">
        {project.description}
      </p>
      <ul className="flex gap-4 max-md:mt-12">
        {project.stack.map((i) => (
          <li className="min-w-fit text-xs text-gray-dark">{i}</li>
        ))}
      </ul>
    </ExternalLink>
  );
}
