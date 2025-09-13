import { Link } from "react-router-dom";

function ProjectCard({ title, description, year, status, link }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg">
      {/* Left side: Logo + Info */}
      <div className="flex items-center gap-4">
        {/* Circle Logo */}
        <div className="w-10 h-10 rounded-full border-4 border-gray-400 border-t-transparent animate-spin-slow" />

        {/* Text Info */}
        <div>
          <Link
            to={link}
            className="font-semibold underline text-base"
          >
            {title}
          </Link>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>

      {/* Right side: Status + Year */}
      <div className="text-right">
        <p className="text-gray-400 text-sm">{status}</p>
        <p className="font-semibold">{year}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
