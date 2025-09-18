import { useParams } from "react-router-dom";

function BlogDetails() {
    const { slug } = useParams();
    // In real projects, fetch the data from API or file
    const posts = {
        "unix-like-os": {
            title: "How i Built my own OS",
            content: "Here’s the full blog content about building my UNIX-like OS...",
            date: "2024-06-11",
            image: "/image.png",
            content2: "The idea to build my own OS came when I was working on one of my open-source projects, Rizin. \n\nWhile working on the project, I realized that I was lacking low-level knowledge of a system and how things are done under the hood. This motivated me to build a low-level project from scratch, and an operating system seemed like a great idea to do so. \n\nSo, like with any project we build, I was compelled to search on Google and YouTube. I did the same, but soon I realized that building an OS is not the same as building any other project. The online tutorials I followed on YouTube didn’t help much, because building an OS is not a common thing that most coders do! The problem was that whatever the person in the video was showing me to do, the output I got didn’t match their output, which was really frustrating. \n\nSo, I asked one of the old Rizin contributors to help me out with resources, and he told me about the OSDev website, which has a complete guide on how to make an OS from scratch. \n\nI started from the barebones part, where we just create an OS that prints “Hello World,” which is the starting point of almost any program in the computer world. \n\nSlowly, I started to realize why we can’t use normal libraries (like stdio.h, etc.) while building an OS. This led me to the concept of cross-compilation. It simply means that whenever we compile a program, it creates a binary file that is expected to be executed on the same machine where it was compiled. But in the case of an OS, we need our binary to be machine-independent so that no matter what the hardware is, our OS should boot and run smoothly. \n\nIt took me 1 month to build the OS with 6 basic commands, and this is how it looked on VirtualBox."
        },
        "rizin": {
            title: "Opensource Contribution",
            content: "Here's the full blog content about my rizin contribution",
            date: "2024-07-01",
            content2: "I started contributing to Rizin in my 2nd year of college, \n\nbut most of those contributions were small and documentation-related. When my first PR was merged, where I wrote all the man pages of Rizin, it really gave me a kick.\n\nAfter that,I wrote a small function in Rizin that colored the help output.\n\nBut these were still small contributions. I wanted to make a bigger impact, so after much searching, I realized I could write a Z80 assembler for Rizin.\n\nThere is a full list of Z80 instructions online. Of course, I haven’t written code for every single instruction. But when I looked at the instruction table carefully, it became clear that similar instructions could be handled by a single function. So, I wrote an arithmetic function covering all the arithmetic instructions, along with logical and load instructions.\n\nIf you don’t have low-level knowledge, this might feel a bit overwhelming. The truth is, it is overwhelming.\n\nTo simplify, all the code I wrote just converts assembly instructions into hex. For example:\n\nADD A, n → This instruction adds the immediate value n to the accumulator A. I had to convert this assembly instruction into hex, which is:\n\nC6 n\n\nAnd in binary:\n\n1100 0110 nnnn nnnn\n\nWhat started as a daunting challenge eventually turned into one of my proudest contributions. Altogether, the code I wrote can now convert around 1200 Z80 instructions into hex."
        }
    };
    const post = posts[slug];
    if (!post) return <h2>Post not found</h2>;
    return (
        <div className="p-4">
  <p className="text-[0.7rem] text-center mt-12">
    {new Date(post.date).toDateString()}
  </p>

  <h1 className="text-[2.5rem] text-center font-bold">
    {post.title}
  </h1>
  <p className="leading-[1.1] text-[0.9rem] mt-1 text-[#6b6f72] text-center">
    {post.content}
  </p>
  <br />
  <br />
  <img src={post.image} alt="" />

  <br />

  {post.content2.split("\n\n").map((para, index) => (
    <p key={index} className="leading-[1.6] mb-4">
      {para}
    </p>
  ))}
</div>

    );
}

export default BlogDetails;
