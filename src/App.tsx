import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contato" element={<Contato />} />
        <Route path="Portfolio/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
