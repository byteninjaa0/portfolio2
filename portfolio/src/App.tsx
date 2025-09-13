import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './style.css'; // Import your CSS
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Projects from "./Projects"
import Notes from "./Notes"
import NoteDetails from "./NoteDetails";
import Layout from "./Layout";
import Home from "./Home";

function App() {
  return (
    <div className="min-h-screen">
  <div className="w-[720px] max-w-[calc(100%-2em)] mx-auto mt-16">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetails />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/notes/:slug" element={<NoteDetails />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </div>
  )
}


export default App;
