import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import AboutUs from "./pages/about-us/about-us";
import Contact from "./pages/contact/contact";
import NotFound from "./pages/not-found/not-found";

// Styles
import "./App.css";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
