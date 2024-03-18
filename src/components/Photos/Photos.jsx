import React, { Suspense, useState } from "react";
import { fetchData } from "../../service/fetchData";
import { Image } from "../Image/Image";
import "./Photos.css";
import { MainButton } from "../buttons/main-button/main-button";

const photsData = fetchData("https://jsonplaceholder.typicode.com/photos");

export const Photos = () => {
  const data = photsData.read();

  const [render, setRender] = useState(14);
  const updateRender = () => setRender(render + 14);

  return (
    <Suspense>
      <>
        <section className="photos">
          {data.map((photo) => {
            if (photo.id <= render) {
              return <Image key={photo.id} src={photo.url} alt={photo.title} />;
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
      </>
    </Suspense>
  );
};
