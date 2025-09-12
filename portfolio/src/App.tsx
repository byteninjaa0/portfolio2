import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLink";
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './style.css'; // Import your CSS
import Post from "./Post";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Projects from "./Projects"
import { GoProjectSymlink } from "react-icons/go";
import Notes from "./Notes"




function Home() {
  return (
    <div style={{
      width: "720px",
      maxWidth: "calc(100% - 2em)",
      margin: "auto",
      marginTop: "4rem"
    }}>
      <h2 style={{ fontSize: "40px" }}>Sohail Khan</h2>
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


function App() {
  return (
    <div className="min-h-screen">
      <div style={{
        width: "720px",
        maxWidth: "calc(100% - 2em)",
        margin: "auto",
        marginTop: "4rem"
      }}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/notes" element={<Notes />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  )
}


export default App;
