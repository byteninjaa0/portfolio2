import Post from "./Post";

function Blog() {
  const posts = [
    {
      slug: "unix-like-os",
      title: "The job market I used to know",
      description: "How I developed my own UNIX-like OS with minimal commands, what was the motivation, how I found my resources...",
      date: "2024-06-11",
      image: "https://images.unsplash.com/photo-1515973069-1e40b62f107f?w=1080&q=80"
    },
    {
      slug: "another-blog",
      title: "Another Blog Post",
      description: "This is another example blog post description hd  dhdfj djf sdsdjfnskdfsjsfdkjsfdkjdsfndfndjfsfksdfnjskdfj  sdfknsfdknsndfjnfsj",
      date: "2024-07-01",
      image: "https://media.istockphoto.com/id/1597039529/photo/software-development-technology-and-innovation-gears-on-smartphone-screen.jpg?s=612x612&w=0&k=20&c=IdVVqVc_6ygpgHH_HoRM8sGKA5EXIEj6f8_vtjKHTvs="
    }
  ];

  return (
    <div>
        <br />
        <br />
        <span className="ml-[1em]">blog</span>

      {posts.map((post) => (
        <Post key={post.slug} {...post} />
      ))}
    </div>
  );
}

export default Blog;
