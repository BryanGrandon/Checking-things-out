import React, { Suspense, useState } from "react";
import { MainButton } from "../../buttons/main-button/main-button";
import getPhotos from "../../../service/api/get-photos";
import "./photo-article-styles.css";

export default function PhotosArticle() {
  const data = getPhotos.read();

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
