import { Posts } from "./components/Posts/Posts";
import { Users } from "./components/Users/Users";
import "./App.css";

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
    </>
  );
}

export default App;
