import { useState } from "react";
export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.style.background = theme === "dark" ? "#fff" : "#151719";
    document.body.style.color = theme === "dark" ? "#000" : "#fff";
  };
  const linkStyle = {
    fontSize: "16px",
    color: "grey",
    textDecoration: "none",
    marginRight: "1rem",
    transition: "color 0.2s ease-in-out",
    cursor: "pointer",
  };

  const [hovered, setHovered] = useState(null);

  const links = ["home", "blog", "notes", "projects"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        lineHeight: "100%",
        width: "720px",
        maxWidth: "calc(100% - 2em)",
        margin: "auto",
        paddingTop: "5em",
      }}
    >
      <img
        src="/logo.jpg"
        alt="Logo"
        style={{ height: "50px", objectFit: "contain" }}
      />


      <nav>
        {links.map((link, i) => (
          <Link
            key={i}
            to={link === "home" ? "/" : `/${link}`}
            style={{
              ...linkStyle,
              color: hovered === i ? "white" : "grey",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {link}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            marginLeft: "1rem",
            color: theme === "dark" ? "white" : "black",
          }}
        ></button>
      </nav>
    </div>
  );
}