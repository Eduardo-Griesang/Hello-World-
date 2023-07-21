import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import LandingPage from "./Pages/LandingPage"
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
