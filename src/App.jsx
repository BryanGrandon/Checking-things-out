import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/not-found/not-found";
import Contact from "./pages/contact/contact";
import "./App.css";
import ProjectsUsers from "./containers/projects/projects-users/projects-users";
import ProjectsTodos from "./containers/projects/projects-todos/projects-todos";
import ProjectsPosts from "./containers/projects/projects-posts/projects-posts";
import ProjectsPhotos from "./containers/projects/projects-photos/projects-photos";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/users" element={<ProjectsUsers />} />
          <Route path="/projects/todos" element={<ProjectsTodos />} />
          <Route path="/projects/posts" element={<ProjectsPosts />} />
          <Route path="/projects/photos" element={<ProjectsPhotos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
