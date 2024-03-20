import PostsArticle from "./components/article/posts-article/posts-article";
import UsersArticle from "./components/article/users-article/users-article";
import PhotosArticle from "./components/article/photo-article/photo-article";
import TodosArticle from "./components/article/todos-article/todos-article";
import { Navbar } from "./components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <header className="header">
          <h1 className="title">Project React</h1>
          <p className="header__text">
            In this project we use the face api offered by JSONPlaceholder to
            create a web page that will show the information provided by the
            api.
          </p>
        </header>

        <UsersArticle />

        <PostsArticle />

        <PhotosArticle />

        <TodosArticle />
      </main>
    </>
  );
}
export default App;
