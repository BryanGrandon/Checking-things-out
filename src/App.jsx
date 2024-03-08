import { Post } from "./components/Post/Post";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <>
      <h1>JSON Placeholder</h1>
      <article>
        <h2>Users</h2>
        <Users />
      </article>
      <article>
        <h2>Posts</h2>
        <Post />
      </article>
    </>
  );
}

export default App;
