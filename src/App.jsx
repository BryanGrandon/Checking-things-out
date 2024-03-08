import { Posts } from "./components/Posts/Posts";
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
        <Posts />
      </article>
    </>
  );
}

export default App;
