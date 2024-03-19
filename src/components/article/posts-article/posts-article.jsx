import { Suspense, useState } from "react";
import { PostCard } from "../../cards/post-card/post-card";
import { MainButton } from "../../buttons/main-button/main-button";
import getPosts from "../../../service/api/get-posts";
import "./posts-article-styles.css";

export default function PostsArticle() {
  const data = getPosts.read();

  const [render, setRender] = useState(5);
  const updateRender = () => setRender(render + 5);

  return (
    <Suspense>
      <>
        <article>
          <section className="posts">
            {data.map((post) => {
              if (post.id <= render) {
                return (
                  <PostCard key={post.id} title={post.title} text={post.body} />
                );
              }
            })}
          </section>
          {data.at(-1).id === render ? (
            ""
          ) : (
            <section className="post__section_btn">
              <MainButton text="More Post" theFunction={updateRender} />
            </section>
          )}
        </article>
      </>
    </Suspense>
  );
}
