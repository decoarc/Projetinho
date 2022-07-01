import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Home></Home>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
