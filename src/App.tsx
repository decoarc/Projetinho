import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
