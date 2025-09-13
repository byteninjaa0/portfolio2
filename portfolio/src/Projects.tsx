import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "My Portfolio",
      description: "A simple sleek portfolio made in react.",
      year: "2025",
      status: "Completed",
      link: "/"
    },
    {
      title: "HailOS",
      description: "A tiny UNIX like OS with basic commands",
      year: "2024",
      status: "Completed",
      link: "https://github.com/byteninjaa0/HailOS"
    }
  ];

  return (
    <div>
      <br />
      <br />
      <div className="ml-4 text-lg">Projects</div>
      <br />

      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
