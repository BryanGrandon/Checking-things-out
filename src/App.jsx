import { Posts } from "./components/Posts/Posts";
import { Users } from "./components/Users/Users";
import { Photos } from "./components/Photos/Photos";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
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
      </main>
    </>
  );
}
export default App;
