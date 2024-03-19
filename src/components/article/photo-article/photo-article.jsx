import React, { Suspense, useState } from "react";
import { MainButton } from "../../buttons/main-button/main-button";
import { fetchData } from "../../../service/fetchData";
import "./photo-article-styles.css";

const photsData = fetchData("https://jsonplaceholder.typicode.com/photos");

export default function PhotosArticle() {
  const data = photsData.read();

  const [render, setRender] = useState(14);
  const updateRender = () => setRender(render + 14);

  return (
    <Suspense>
      <>
        <article>
          <h2>Photos</h2>
          <section className="photos">
            {data.map((photo) => {
              if (photo.id <= render) {
                return (
                  <img
                    key={photo.id}
                    src={photo.url}
                    alt={photo.title}
                    className="image"
                  />
                );
              }
            })}
          </section>
          {data.at(-1).id === render ? (
            ""
          ) : (
            <section className="photos__section-btn">
              <MainButton text="More Photos" theFunction={updateRender} />
            </section>
          )}
        </article>
      </>
    </Suspense>
  );
}
