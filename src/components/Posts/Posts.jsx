import { Suspense, useState } from "react";
import { fetchData } from "../../service/fetchData";
import { Post } from "../Post/Post";
import { Button } from "../Button/Button";
import "./Posts.css";

const postData = fetchData("https://jsonplaceholder.typicode.com/posts");

export function Posts() {
  const data = postData.read();

  const [render, setRender] = useState(5);
  const updateRender = () => setRender(render + 5);

  return (
    <Suspense>
      <>
        <section className="posts">
          {data.map((post) => {
            if (post.id <= render) {
              return <Post key={post.id} title={post.title} text={post.body} />;
            }
          })}
        </section>
        {data.at(-1).id === render ? (
          ""
        ) : (
          <section className="post__section_btn">
            <Button text="More Post" theFunction={updateRender} />
          </section>
        )}
      </>
    </Suspense>
  );
}
