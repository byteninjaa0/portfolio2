import { useParams } from "react-router-dom";

function BlogDetails() {
    const { slug } = useParams();

    // In real projects, fetch the data from API or file
    const posts = {
        "unix-like-os": {
            title: "The job market I used to know",
            content: "Here’s the full blog content about building my UNIX-like OS...",
            date: "2024-06-11",
            image: "https://images.unsplash.com/photo-1515973069-1e40b62f107f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAwOTd8MHwxfHNlYXJjaHwyNnx8aW50ZXJ2aWV3fGVufDB8MHx8fDE3MTgwNTgzNjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
            content2: "I started contributing to Rizin in my 2nd year of college, \n\nbut most of those contributions were small and documentation-related. When my first PR was merged, where I wrote all the man pages of Rizin, it really gave me a kick.\n\nAfter that,I wrote a small function in Rizin that colored the help output.\n\nBut these were still small contributions. I wanted to make a bigger impact, so after much searching, I realized I could write a Z80 assembler for Rizin.\n\nThere is a full list of Z80 instructions online. Of course, I haven’t written code for every single instruction. But when I looked at the instruction table carefully, it became clear that similar instructions could be handled by a single function. So, I wrote an arithmetic function covering all the arithmetic instructions, along with logical and load instructions.\n\nIf you don’t have low-level knowledge, this might feel a bit overwhelming. The truth is, it is overwhelming.\n\nTo simplify, all the code I wrote just converts assembly instructions into hex. For example:\n\nADD A, n → This instruction adds the immediate value n to the accumulator A. I had to convert this assembly instruction into hex, which is:\n\nC6 n\n\nAnd in binary:\n\n1100 0110 nnnn nnnn\n\nWhat started as a daunting challenge eventually turned into one of my proudest contributions. Altogether, the code I wrote can now convert around 1200 Z80 instructions into hex."
        },
        "another-blog": {
            title: "Another Blog Post",
            content: "This is the full content of the second blog...",
            date: "2024-07-01"
        }
    };

    const post = posts[slug];

    if (!post) return <h2>Post not found</h2>;

    return (
        <div style={{ padding: "1rem" }}>
            <p style={{ fontSize: "0.7rem", textAlign: "center", marginTop: "3rem" }}><i>{new Date(post.date).toDateString()}</i></p>
            <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}><b>{post.title}</b></h1>
            <p style={{ lineHeight: "1.1", fontSize: ".9rem", marginTop: "0.3rem", color: "#6b6f72", textAlign: "center" }}>{post.content}</p>
            <br></br>
            <br></br>
            <img src={post.image}></img>
            <br></br>
            <br></br>
            {post.content2.split("\n\n").map((para, index) => (
                <p key={index} style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
                    {para}
                </p>
            ))}

        </div>
    );
}

export default BlogDetails;
