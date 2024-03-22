import { Navbar } from "../../components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="header">
        <h1 className="title">Project React</h1>
        <p className="header__text">
          In this project we use the face api offered by JSONPlaceholder to
          create a web page that will show the information provided by the api.
        </p>
      </header>
    </>
  );
}
