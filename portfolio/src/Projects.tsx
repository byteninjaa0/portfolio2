function Projects() {
    return (
        <div>
            <br />
            <br />
            <span style={{ marginLeft: "1rem", fontSize: "1.3rem" }}>Projects</span>
            <br />
            <br />
            <section style={{ display: "flex", flexDirection: "column", gap: "1.45rem" }}>
                <article style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <header style={{ display: "flex", alignItems: "center" }}>
                        <div
                            style={{
                                borderRadius: "100%",
                                width: "48px",
                                height: "48px",
                                objectFit: "cover",
                                aspectRatio: "1 / 1",
                                marginRight: "2rem"
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L15 8H9L12 2Z" />
                            </svg>

                        </div>


                    </header>
                </article>

            </section>
        </div>
    )
}

export default Projects;