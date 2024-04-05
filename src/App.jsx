import { BrowserRouter, Route, Routes } from "react-router-dom";
// Pages

// Styles
import Users from "./pages/users/users";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
export default App;
