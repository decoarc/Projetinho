import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contato" element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
