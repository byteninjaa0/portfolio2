import { Link } from "react-router-dom";

function Post({ title, description, date, image, slug }) {
  return (
    <Link to={`/blog/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ display: "flex", margin: "1rem", gap: "2rem", alignItems: "flex-start" }}>
        <div>
          <span style={{ fontWeight: "500", fontSize: "1.1rem" }}>{title}</span>
          <p style={{ lineHeight: "1.1", fontSize: ".9rem", marginTop: "0.3rem", color: "#6b6f72" }}>
            {description}
          </p>
          <span style={{ fontSize: "0.7em" }}>
            <time dateTime={date}>{new Date(date).toDateString()}</time>
          </span>
        </div>
        <img
          src={image}
          alt={title}
          loading="eager"
          style={{ width: "200px", height: "100px", borderRadius: "0.7rem", objectFit: "cover", flexShrink: 0 }}
        />
      </div>
    </Link>
  );
}


export default Post;
