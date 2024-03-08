import { Suspense } from "react";
import { fetchData } from "../../service/fetchData";
import { Post } from "../Post/Post";
import "./Posts.css";

const postData = fetchData("https://jsonplaceholder.typicode.com/posts");

export function Posts() {
  const data = postData.read();
  return (
    <Suspense>
      <section className="posts">
        {data.map((post) => (
          <Post key={post.id} title={post.title} text={post.body} />
        ))}
      </section>
    </Suspense>
  );
}
