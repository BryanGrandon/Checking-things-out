import { Posts } from "./components/Posts/Posts";
import { Users } from "./components/Users/Users";
import "./App.css";
import { Photos } from "./components/Photos/Photos";

function App() {
  return (
    <>
      <h1 className="title">JSON Placeholder</h1>
      <article className="article">
        <h2 className="title__h2">Users</h2>
        <Users />
      </article>
      <article className="article">
        <h2 className="title__h2">Posts</h2>
        <Posts />
      </article>
      <article className="article">
        <h2 className="title__h2">Photos</h2>
        <Photos />
      </article>
    </>
  );
}
export default App;
