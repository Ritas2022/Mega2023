import "./App.css";
import Menu from "./components/Menu";
import MyRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
