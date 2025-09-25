import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  const location = useLocation(); // 👈 get current route

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.style.background = theme === "dark" ? "#fff" : "#151719";
    document.body.style.color = theme === "dark" ? "#000" : "#fff";
    document.documentElement.style.setProperty(
      "--hover-color",
      theme === "dark" ? "#fff" : "#000"
    );
  };

  const links = [ "blog", "notes", "projects"];

  return (
   <div className="flex justify-between items-center leading-none w-full max-w-[720px] px-4 mx-auto">

      {/* Logo links to home */}
      <Link to="/">
        <img
          src="/logo.jpg"
          alt="Logo"
          className="h-7 w-7 object-cover rounded-xl"
        />
      </Link>

      <nav className="flex items-center font-medium">
        {links.map((link, i) => {
          const path = link === "home" ? "/" : `/${link}`;
         const isActive =
  path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);


          return (
            <Link
              key={i}
              to={path}
              className={`text-[16px] mr-4 cursor-pointer no-underline transition-colors duration-200 
                ${link === "home" ? "hidden sm:inline" : ""} 
                ${isActive
                  ? theme === "dark"
                    ? "text-white"
                    : "text-black"
                  : theme === "dark"
                    ? "text-gray-500 hover:text-white"
                    : "text-gray-500 hover:text-black"
                }`}
            >
              {link}
            </Link>
          );
        })}

        <button
          onClick={toggleTheme}
          className={`ml-0 flex items-center justify-center w-5 h-10 cursor-pointer bg-transparent border-none ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {theme === "light" ? (
            // 🌙 Slim moon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
              />
            </svg>
          ) : (
            // ☀️ Sun
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m16.95 7.05l-.707-.707M6.757 6.757l-.707-.707m0 12.728l.707-.707M19.243 6.757l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
