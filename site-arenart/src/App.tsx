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
import About from "./routes/About";
import ChaoBrasil from "./routes/Peças/ChaoBrasil";
import BarDoCaminho from "./routes/Peças/BarDoCaminho";
import NosTelhados from "./routes/Peças/NosTelhados";
import EmConstrucao from "./routes/Peças/EmConstrucao";
import Clarao from "./routes/Peças/Clarao";
import ChaoBrasil2016 from "./routes/Peças/ChaoBrasil2016";
import Insane from "./routes/Peças/Insane";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/temporadas" element={<Seasons />} />
        <Route path="/temporadas/tempus-fugit" element={<TempusFugit />} />
        <Route path="/temporadas/chao-brasil" element={<ChaoBrasil />} />
        <Route path="/temporadas/bar-do-caminho" element={<BarDoCaminho />} />
        <Route path="/temporadas/nos-telhados-da-cidade" element={<NosTelhados />} />
        <Route path="/temporadas/clarao-nas-estrelas" element={<Clarao />} />
        <Route path="/temporadas/chao-brasil-2016" element={<ChaoBrasil2016/>} />
        <Route path="/temporadas/insane" element={<Insane/>} />
        <Route path="/temporadas/em-construcao" element={<EmConstrucao />} />

      </Routes>
    </Router>
  );
}

export default App;
