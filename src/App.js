import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import LandingPage from "./Pages/LandingPage"
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import RegularPage from "./components/RegularPage";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        {/* esse Route utiliza rotas aninhadas, onde, dependendo do path que o navegador está, ele renderiza os diferentes componentes dentro
        do Route, utilizando o comando <Outlet /> (documentação em index routes no React Router Dom)*/}
        <Route path="/" element={<RegularPage />}>
          <Route index element={<LandingPage />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="PostPage/:id" element={<PostPage />} />
        </Route>

        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
