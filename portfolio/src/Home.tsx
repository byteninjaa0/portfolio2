import SocialLinks from "./SocialLink";
function Home() {
  return (
    <div style={{
      width: "720px",
      maxWidth: "calc(100% - 2em)",
      margin: "auto",
      marginTop: "4rem"
    }}>
      <h2 style={{ fontSize: "40px" }}><b>Sohail Khan</b></h2>
      <p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>I’m a B.Tech student who loves coding and building things that really work. I enjoy reading self-help books, meeting new people, and learning from them. In my free time, I like watching movies and I’m a big coffee lover.</p>
      <p style={{ marginTop: "1.3rem", lineHeight: "1.8" }}>I’m always curious about trying new things and exploring how technology can solve real-life problems. For me, coding is not just about writing programs, it’s about creating something meaningful that people can actually use. I believe in learning every day, whether through books, conversations, or experiences, and I’m excited to keep growing on this journey</p>
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