import {
  FaGithub,
  FaLinkedin,

  FaDiscord,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";

function SocialLinks() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center",
        marginTop: "20px",
        marginRight:"3rem"
      }}
    >
      <span style={{ fontFamily: "Arial, sans-serif" }}>Find me on</span>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#333",
          color: "white",
          padding: "6px 10px",
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
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#0A66C2",
          color: "white",
          padding: "6px 10px",
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
        href="https://t.me/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          backgroundColor: "#0088cc",
          color: "white",
          padding: "6px 10px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaTelegram size={18} />
        Telegram
      </a>

        

      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          background:
            "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
          color: "white",
          padding: "6px 10px",
          borderRadius: "6px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        <FaInstagram size={18} />
        Instagram
      </a>
      <a
  href="https://discord.gg/your-invite-code"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textDecoration: "none",
    backgroundColor: "#5865F2", // Discord blurple
    color: "white",
    padding: "6px 12px",
    borderRadius: "6px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: "bold",
  }}
>
  <FaDiscord size={18} />
  Discord
</a>

    </div>
  );
}

export default SocialLinks;
