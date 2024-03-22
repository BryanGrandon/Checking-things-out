import { Suspense, useState } from "react";
import { MainButton } from "../../../components/buttons/main-button/main-button";
import getPhotos from "../../../service/api/get-photos";

export default function ProjectsPhotos() {
  const data = getPhotos.read();
  const [render, setRender] = useState(14);
  const updateRender = () => setRender(render + 14);
  return (
    <>
      <Suspense>
        <section>
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
        {data.at(-1).id === render ? null : (
          <section className="photos__section-btn">
            <MainButton text="More Photos" theFunction={updateRender} />
          </section>
        )}
      </Suspense>
    </>
  );
}
