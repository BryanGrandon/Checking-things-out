import { Posts } from "./components/Posts/Posts";
import { Users } from "./components/Users/Users";
import { Photos } from "./components/Photos/Photos";
import { Navbar } from "./components/navbar/navbar";
import Todos from "./components/Todos/Todos";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <header className="header">
          <h1 className="title">Project React</h1>
          <p className="header__text">
            In this project we use the face api offered by JSONPlaceholder to
            create a web page that will show the information provided by the
            api.
          </p>
        </header>
        <article className="article" id="users">
          <h2 className="title__h2">Users</h2>
          <Users />
        </article>
        <article className="article" id="posts">
          <h2 className="title__h2">Posts</h2>
          <Posts />
        </article>
        <article className="article" id="photos">
          <h2 className="title__h2">Photos</h2>
          <Photos />
        </article>
        <article className="article" id="photos">
          <h2 className="title__h2">To-Dos</h2>

          <Todos />
        </article>
      </main>
    </>
  );
}
export default App;
