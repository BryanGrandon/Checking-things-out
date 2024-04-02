import { Suspense, useState } from "react";
import { MainButton } from "../../../components/buttons/main-button/main-button";
import getPhotos from "../../../service/api/get-photos";
import "./blog-photos-styles.css";

export default function BlogPhotos() {
  const data = getPhotos.read();
  const [render, setRender] = useState(14);
  const updateRender = () => setRender(render + 14);
  return (
    <>
      <Suspense>
        <section className="photo-containers">
          {data.map((photo) => {
            if (photo.id <= render) {
              return (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt={photo.title}
                  className="photo"
                />
              );
            }
          })}
        </section>
        {data.at(-1).id === render ? null : (
          <section className="photo__section_btn">
            <MainButton text="More Photos" theFunction={updateRender} />
          </section>
        )}
      </Suspense>
    </>
  );
}
