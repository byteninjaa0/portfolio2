import { useParams } from "react-router-dom";

function NoteDetails() {
  const { slug } = useParams();

  const Notes = [
    {
      slug: "miscpython",
      title: "Python Built-in Functions & List Methods",
      date: "2024-06-11",
      content2: "Math:\nround(number, digits) → Round a number to the given number of digits.\nExample: round(3.14159, 2)  # 3.14\n\nList Operations:\nlist.append(item) → Add item at the end of the list.\nlist.extend(iterable) → Add all elements from another list/iterable.\nlist.insert(index, item) → Insert item at a specific index.\nlist.count(item) → Count occurrences of item in the list.\nlist.index(item) → Get the first index of item.\ndel list[index] → Delete the element at a specific index.\ndel list[start:end] → Delete a slice of the list.\n\nASCII / Characters:\nord('a') → Get ASCII value of a character.\nchr(97) → Get character from an ASCII value.\n\nMax / Min:\nmax(iterable, key=func, default=value) → Returns the largest item, optionally using a key function.\nExample: max(['apple', 'banana', 'pear'], key=len)  # 'banana'\nmin() → Returns the smallest item.\nmax(arr) == min(arr) → Checks if all elements are the same.\n\nList Comprehensions:\nRemove a particular element:\ncount = arr.count(0)\nmy_list = [x for x in arr if x != 0]\nmy_list.extend([0]*count)\n\nSplit a string into chunks:\n[s[i:i+3] for i in range(0, len(s), 3)]\n\nMatrix Input:\nmatrix = [list(map(int, input().split())) for _ in range(n)]\n\nCounters:\nfrom collections import Counter\ncounts = Counter(nums)\nmost_common = max(counts, key=counts.get)\n\nBisect:\nfrom bisect import bisect_right\ncount = a - bisect_right(li, li1[i])\n\nSlice Assignment:\nnums[:] = bb"

    },
    {
      slug: "another-blog",
      title: "Another Blog Post",
      date: "2024-07-01",
      content: "Just another blog example..."
    }
  ];

  // ✅ Fix: find the post by slug
  const post = Notes.find((note) => note.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div style={{ padding: "1rem" }}>
      <p
        style={{
          fontSize: "0.7rem",
          textAlign: "center",
          marginTop: "3rem"
        }}
      >
        <i>{new Date(post.date).toDateString()}</i>
      </p>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center" }}>
        <b>{post.title}</b>
      </h1>
      <p
        style={{
          lineHeight: "1.1",
          fontSize: ".9rem",
          marginTop: "0.3rem",
          color: "#6b6f72",
          textAlign: "center"
        }}
      >
        {post.content}
      </p>
      <br />
      {post.image && <img src={post.image} alt={post.title} />}
      <br />
      <br />
      {post.content2 &&
        post.content2.split("\n\n").map((para, index) => (
          <p key={index} style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
            {para}
          </p>
        ))}
    </div>
  );
}
export default NoteDetails;
