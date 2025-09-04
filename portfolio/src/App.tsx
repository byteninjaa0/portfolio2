import { useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { FaSun, FaMoon } from "react-icons/fa";


function Navbar() {
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

function SocialLinks() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <span style={{ color: "white", fontFamily: "Arial, sans-serif" }}>
        Find me on
      </span>

      <a
        href="https://github.com/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#333",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaGithub size={18} />
        GitHub
      </a>

      <a
        href="https://linkedin.com/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#0A66C2",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaLinkedin size={18} />
        LinkedIn
      </a>

      <a
        href="https://discord.com/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#5865F2",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaDiscord size={18} />
        Discord Server
      </a>

      <a
        href="https://x.com/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#111",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaXTwitter size={18} />
        x.com
      </a>

      <a
        href="https://instagram.com/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          background:
            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          color: "white",
          padding: "6px 12px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaInstagram size={18} />
        Instagram
      </a>
    </div>
  );
}


function Home() {
  return (
    <div style={{
      width: "720px",
      maxWidth: "calc(100% - 2em)",
      margin: "auto",
      marginTop: "4rem"
    }}>
      <h2 style={{ color: "white", fontSize: "40px" }}>Sohail Khan</h2>
      <p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>I’m a B.Tech student who loves coding and building things that really work. I enjoy reading self-help books, meeting new people, and learning from them. In my free time, I like watching movies and I’m a big coffee lover — it keeps me going during late-night coding sessions.</p>
      <p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>I’m always curious about trying new things and exploring how technology can solve real-life problems. For me, coding is not just about writing programs, it’s about creating something meaningful that people can actually use. I believe in learning every day, whether through books, conversations, or experiences, and I’m excited to keep growing on this journey</p>
      <div
        style={{
          margin: "10px",
          padding: "1px",
          width: "200px",
          textAlign: "center",
          marginLeft: "17rem",
          marginRight: "auto",
          marginBottom: "34px"
        }}
      >_______
      </div>
      <SocialLinks />

    </div>
  )
}
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

function Blog(){

}

function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212" }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App;
