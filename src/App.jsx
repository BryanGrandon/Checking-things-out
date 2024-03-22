import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/not-found/not-found";
import Contact from "./pages/contact/contact";
// Containers
import ProjectsUsers from "./containers/projects/projects-users/projects-users";
import ProjectsTodos from "./containers/projects/projects-todos/projects-todos";
import ProjectsPosts from "./containers/projects/projects-posts/projects-posts";
import ProjectsPhotos from "./containers/projects/projects-photos/projects-photos";
// Styles
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/" element={<Projects />}>
            <Route path="users" element={<ProjectsUsers />} />
            <Route path="todos" element={<ProjectsTodos />} />
            <Route path="posts" element={<ProjectsPosts />} />
            <Route path="photos" element={<ProjectsPhotos />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
