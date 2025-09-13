import { Link } from "react-router-dom";

function Notes() {
  const notesList = [
    {
      slug: "miscpython",
      title: "python notes",
      date: "2024-06-11"
    },
  ];

  return (
    <div style={{ marginLeft: "1rem", fontSize: "1.3rem" }}>
  <span className="block mt-12 text-xl">Notes</span>

  <span className="block mt-6 text-[2.5rem] font-bold">2024</span>

  <div className="mt-4">
    {notesList.map((note) => (
      <div key={note.slug} className="mt-2">
        <Link
          to={`/notes/${note.slug}`}
          className="ml-5 font-semibold underline text-[1.1rem]"
        >
          {note.title}
        </Link>
        <span className="ml-2 text-[12px] font-thin">
          {new Date(note.date).toDateString()}
        </span>
      </div>
    ))}
  </div>
</div>

  );
}
export default Notes;
