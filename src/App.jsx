import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import NotFound from "./pages/not-found/not-found";
import Contact from "./pages/contact/contact";
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
