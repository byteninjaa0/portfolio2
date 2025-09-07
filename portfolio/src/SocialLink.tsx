import { FaGithub, FaLinkedin, FaDiscord, FaXTwitter, FaInstagram } from "react-icons/fa6";

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

      {/* <a
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
      </a> */}

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
export default SocialLinks;