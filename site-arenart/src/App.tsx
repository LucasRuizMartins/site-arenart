import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import "./App.css";
import Home from "./routes/Home";
import TempusFugit from "./routes/Peças/TempusFugit";
import Seasons from "./routes/Seasons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/temporadas" element={<Seasons />} />
        <Route path="/temporadas/tempus-fugit" element={<TempusFugit />} />
      </Routes>
    </Router>
  );
}

export default App;
