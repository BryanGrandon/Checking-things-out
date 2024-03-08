import "./Post.css";

export function Post({ title, text }) {
  return (
    <section className="post">
      <h3 className="post__title">{title}</h3>
      <p className="post__body">{text}</p>
    </section>
  );
}
