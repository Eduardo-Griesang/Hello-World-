import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import LandingPage from "./Pages/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
