import { Link } from "react-router-dom";

function Post({ title, description, date, image, slug }) {
  return (
    <Link to={`/blog/${slug}`} className="no-underline text-inherit">
      <div className="flex items-start gap-6 m-4">
        <div>
          <span className="font-medium text-lg">{title}</span>
          <p className="text-sm text-gray-600 mt-1 leading-snug">{description}</p>
          <span className="text-xs">
            <time dateTime={date}>{new Date(date).toDateString()}</time>
          </span>
        </div>
        <img
          src={image}
          alt={title}
          loading="eager"
          className="hidden sm:block w-[200px] h-[100px] rounded-lg object-cover flex-shrink-0"
        />
      </div>
    </Link>
  );
}

export default Post;
