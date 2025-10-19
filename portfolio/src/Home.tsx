import SocialLinks from "./SocialLink";
function Home() {
  return (
    <div style={{
      width: "720px",
      maxWidth: "calc(100% - 2em)",
      margin: "auto",
      marginTop: "4rem"
    }}>
      <p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>
  I’m a B.Tech student who loves building things that not only look good but also feel secure and reliable. 
  At <b>Atom Creations</b>, I work as a <b>Junior Web Developer</b>, creating fast and responsive websites with React, TypeScript, Vite, and Tailwind CSS. 
  I enjoy the challenge of turning complex ideas into simple, clean, and smooth user experiences.
</p>

<p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>
  I’ve also contributed to open-source projects like <b>Rizin</b> and <b>WordPress </b>
  improving features, refining interfaces, and helping with documentation. 
  Working with large projects like these has taught me how to write better code, understand security at a deeper level, 
  and collaborate effectively with other developers across the world.
</p>

<p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>
  Lately, I’ve been exploring how <b>AI and security</b> connect with frontend development
  building small experiments like real-time dashboards that visualize system activity. 
  I love the idea of making technology more transparent and trustworthy through good design and meaningful interfaces.
</p>


<div className="text-center mb-3">

  <span className="text-[12px] font-thin">
    _______________
  </span>
</div>

      <SocialLinks />

    </div>
  )
}
export default Home;