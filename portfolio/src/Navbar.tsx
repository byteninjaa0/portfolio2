import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.style.background = theme === "dark" ? "#fff" : "#151719";
    document.body.style.color = theme === "dark" ? "#000" : "#fff";
  };

  const links = ["home", "blog", "notes", "projects"];

  return (
    <div className="flex justify-between items-center leading-none w-[720px] max-w-[calc(100%-2em)] mx-auto pt-2">
      <img
        src="/logo.jpg"
        alt="Logo"
        className="h-[50px] object-contain"
      />

      <nav className="flex items-center">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link === "home" ? "/" : `/${link}`}
            className="text-[16px] text-gray-500 hover:text-white transition-colors duration-200 mr-4 cursor-pointer no-underline"
          >
            {link}
          </Link>
        ))}
        <button
  onClick={toggleTheme}
  className={`ml-0 flex items-center justify-center w-5 h-10 cursor-pointer bg-transparent border-none ${
    theme === "dark" ? "text-white" : "text-black"
  }`}
>
  {theme === "dark" ? (
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
