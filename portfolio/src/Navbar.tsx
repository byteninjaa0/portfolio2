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
          className={`ml-4 text-[20px] cursor-pointer bg-transparent border-none ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          ⏺
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
