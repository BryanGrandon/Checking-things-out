import { Suspense, useState } from "react";
import { PostCard } from "../../../components/cards/post-card/post-card";
import { MainButton } from "../../../components/buttons/main-button/main-button";
import getPosts from "../../../service/api/get-posts";
import "./blog-post-styles.css";

export default function BlogPosts() {
  const data = getPosts.read();
  const [render, setRender] = useState(3);
  const updateRender = () => setRender(render + 3);
  return (
    <>
      <Suspense>
        <section className="post-container">
          {data.map((post) => {
            if (post.id <= render) {
              return (
                <PostCard key={post.id} title={post.title} text={post.body} />
              );
            }
          })}
        </section>

        {data.at(-1).id === render ? null : (
          <section className="post__section_btn">
            <MainButton text="More Post" theFunction={updateRender} />
          </section>
        )}
      </Suspense>
    </>
  );
}
